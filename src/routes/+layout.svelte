<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import TableOfContents from '$lib/components/TableOfContents.svelte';
	import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let isSidebarOpen = false;

	const chapters = [
		{
			title: 'Introduction to Cybersecurity',
			slug: '01-introduction',
			chapter: 1,
			sections: [
				{ title: 'What is Cybersecurity?', id: 'what-is-cybersecurity' },
				{ title: 'Why is Cybersecurity Important?', id: 'why-is-cybersecurity-important' }
			]
		},
		{
			title: 'Basic Security Concepts',
			slug: '02-basics',
			chapter: 2
		},
		{
			title: 'Threat Analysis',
			slug: '03-threats',
			chapter: 3
		}
	];

	$: isBookRoute = $page.url.pathname.startsWith('/book');
	$: currentSlug = $page.url.pathname.split('/').pop() || '';
</script>

{#if isBookRoute}
	<div class="flex min-h-[100dvh] flex-col bg-white dark:bg-slate-900">
		<!-- Header -->
		<header
			class="fixed top-0 z-50 flex h-16 w-full shrink-0 items-center border-b border-gray-200 bg-white px-4 dark:border-gray-800 dark:bg-slate-900"
		>
			<div class="flex flex-1 items-center justify-between">
				<!-- Mobile menu button -->
				<button
					type="button"
					class="lg:hidden -ml-0.5 -mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-md hover:text-slate-900 dark:hover:text-white"
					on:click={() => (isSidebarOpen = !isSidebarOpen)}
				>
					<span class="sr-only">Open sidebar</span>
					<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
				<div class="flex items-center space-x-4">
					<a
						href="{base}/book"
						class="text-xl font-bold text-gray-900 hover:text-gray-600 dark:text-white dark:hover:text-gray-300"
					>
						Defending Critical Infrastructure
					</a>
				</div>
				<div class="flex items-center space-x-4">
					<a
						href="https://github.com/OIT-Cyber/oit-cyber-book"
						class="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
					>
						<span class="sr-only">GitHub</span>
						<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
							<path
								d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
							/>
						</svg>
					</a>
				</div>
			</div>
		</header>

		<div class="max-w-8xl relative mx-auto flex flex-1 pt-16">
			<!-- Mobile sidebar backdrop -->
			{#if isSidebarOpen}
				<div
					role="button"
					tabindex="0"
					class="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm lg:hidden"
					on:click={() => (isSidebarOpen = false)}
					on:keydown={(e) => e.key === 'Escape' && (isSidebarOpen = false)}
				></div>
			{/if}

			<!-- Sidebar -->
			<aside
				class="fixed bottom-0 left-0 top-16 z-40 w-72 transform overflow-y-auto border-r border-gray-200 bg-white px-4 pb-10 pt-6 transition-transform duration-300 ease-in-out dark:border-gray-800 dark:bg-slate-900 lg:block {isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}"
			>
				<nav class="text-base lg:text-sm">
					<TableOfContents {chapters} />
				</nav>
			</aside>

			<!-- Main content -->
			<main class="min-h-[calc(100dvh-4rem)] w-full lg:pl-72">
				<div class="px-4 py-10 sm:px-6 lg:px-8">
					<article
						class="prose prose-slate mx-auto max-w-[calc(100vw-2rem)] lg:max-w-3xl dark:prose-invert prose-headings:scroll-mt-28 prose-headings:font-display prose-headings:font-normal prose-a:break-words"
					>
						<slot />
						<ChapterNavigation {chapters} {currentSlug} />
					</article>
				</div>
			</main>
		</div>

		<Footer />
	</div>
{:else}
	<slot />
{/if}
