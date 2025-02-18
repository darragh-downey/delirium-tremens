<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import { chapters } from '$lib/data/chapters';
	import { navigating } from '$app/stores';
	import { onMount } from 'svelte';
	import { afterNavigate } from '$app/navigation';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import MainContent from '$lib/components/MainContent.svelte';
	import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';
	import LoadingSpinner from '$lib/components/LoadingSpinner.svelte';
	import ReadingProgress from '$lib/components/ReadingProgress.svelte';
	import ErrorBoundary from '$lib/components/ErrorBoundary.svelte';
	import KeyboardShortcuts from '$lib/components/KeyboardShortcuts.svelte';
	import NavigationLoading from '$lib/components/NavigationLoading.svelte';
	import { tick } from 'svelte';
	import { activeSection } from '$lib/stores/activeSection';
	import { browser } from '$app/environment';
	import { debounce } from '$lib/utils/debounce';

	let isSidebarOpen = false;
	function toggleSidebar() {
		isSidebarOpen = !isSidebarOpen;
	}

	function closeSidebar() {
		isSidebarOpen = false;
	}

	$: currentSlug = $page.url.pathname
		.replace(base, '')
		.replace('/book/', '')
		.split('/')
		.filter(Boolean)[0];

	$: currentChapter = chapters.find((c) => c.slug === currentSlug);

	async function scrollToHash() {
		const hash = window.location.hash;
		if (hash) {
			await tick();
			const element = document.getElementById(hash.slice(1));
			if (element) {
				const headerOffset = 96;
				const elementPosition = element.offsetTop - headerOffset;

				window.scrollTo({
					top: elementPosition,
					behavior: 'smooth'
				});
			}
		}
	}

	afterNavigate(async () => {
		await scrollToHash();
	});

	onMount(async () => {
		await scrollToHash();
	});

	function createSectionObserver() {
		if (!browser) return;

		const observerCallback = debounce((entries: IntersectionObserverEntry[]) => {
			entries.forEach((entry) => {
				// Get all currently visible sections
				const visibleSections = Array.from(document.querySelectorAll('h2[id], h3[id]')).filter(
					(section) => {
						const rect = section.getBoundingClientRect();
						return rect.top <= 150 && rect.bottom > 150;
					}
				);

				if (visibleSections.length > 0) {
					// Use the first visible section as the active one
					activeSection.set(visibleSections[0].id);
				} else if (entry.boundingClientRect.top > 150) {
					// If we're above the first section
					const firstSection = document.querySelector('h2[id], h3[id]');
					if (firstSection) {
						activeSection.set(firstSection.id);
					}
				} else {
					// If we're below the last section
					const sections = document.querySelectorAll('h2[id], h3[id]');
					const lastSection = sections[sections.length - 1];
					if (lastSection) {
						activeSection.set(lastSection.id);
					}
				}
			});
		}, 100);

		const observer = new IntersectionObserver(observerCallback, {
			root: null,
			rootMargin: '-150px 0px -50%',
			threshold: [0, 1]
		});

		// Observe all sections
		document.querySelectorAll('h2[id], h3[id]').forEach((section) => {
			observer.observe(section);
		});

		return observer;
	}

	onMount(() => {
		if (browser) {
			const observer = createSectionObserver();
			return () => {
				if (observer) {
					observer.disconnect();
				}
			};
		}
	});
</script>

{#if $navigating}
	<LoadingSpinner />
{/if}

<div class="flex min-h-[100dvh] flex-col bg-[var(--background)]">
	<ReadingProgress />
	<Header onToggleSidebar={toggleSidebar} />
	<KeyboardShortcuts />
	<NavigationLoading />

	<div class="flex min-h-screen">
		<Sidebar {isSidebarOpen} onCloseSidebar={closeSidebar} {chapters} />

		<div class="flex flex-1 pt-16">
			<ErrorBoundary>
				<MainContent {currentChapter}>
					<slot />
					<ChapterNavigation {chapters} {currentSlug} />
				</MainContent>
			</ErrorBoundary>

			<!-- Right sidebar - Section navigation -->
			<aside
				class="hidden w-64 shrink-0 border-l border-[var(--primary)]/20 p-8 xl:block"
				aria-label="On this page navigation"
			>
				{#if currentChapter?.sections}
					<div class="sticky top-24">
						<h4 class="mb-4 font-semibold text-[var(--primary)]">On this page</h4>
						<ul class="space-y-2">
							{#each currentChapter.sections as section}
								<li>
									<a
										href="#{section.id}"
										on:click|preventDefault={async (e: MouseEvent) => {
											const element = document.getElementById(section.id);
											if (element) {
												const headerOffset = 96;
												const elementPosition = element.offsetTop - headerOffset;

												window.scrollTo({
													top: elementPosition,
													behavior: 'smooth'
												});

												history.pushState(null, '', `#${section.id}`);
												activeSection.set(section.id);
											}
										}}
										class="text-[var(--text-secondary)] no-underline transition-colors duration-200 hover:text-[var(--primary)]
											{$activeSection === section.id ? 'text-[var(--primary)]' : ''}"
										aria-label="Jump to section: {section.title}"
									>
										{section.title}
									</a>
								</li>
							{/each}
						</ul>
					</div>
				{/if}
			</aside>
		</div>
	</div>

	<Footer />
</div>
