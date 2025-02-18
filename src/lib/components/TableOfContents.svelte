<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import type { Chapter } from '$lib/types';
	import { getChapterUrl, getSectionUrl } from '$lib/utils/navigation';
	import { activeSection } from '$lib/stores/activeSection';
	import { chapters } from '$lib/data/chapters';

	export let chapterList: Chapter[] = chapters;
	export let side: 'left' | 'right' = 'left';

	$: currentPath = $page.url.pathname;
	$: currentChapter = chapterList.find((c) => c.slug === $page.params.chapter);
	$: hasActiveSections = currentChapter?.sections && currentChapter.sections.length > 0;

	function handleKeydown(e: KeyboardEvent, href: string) {
		if (e.key === 'Enter') {
			window.scrollTo(0, 0);
			window.location.href = href;
		}
	}

	function handleSectionKeydown(e: KeyboardEvent, chapter: Chapter, sectionId: string) {
		if (e.key === 'Enter') {
			window.location.href = getSectionUrl(chapter, sectionId);
		}
	}
</script>

{#if side === 'right'}
	{#if hasActiveSections}
		<nav class="sticky top-16 hidden h-[calc(100vh-4rem)] flex-col gap-4 py-8 lg:flex">
			<div class="flex flex-col gap-2">
				<ul class="mt-2 space-y-2 pl-4 {hasActiveSections ? 'border-l border-[#FF1493]' : ''}">
					{#each currentChapter.sections as section}
						<li>
							<a
								href={getSectionUrl(currentChapter, section.id)}
								tabindex="0"
								on:keydown|preventDefault={(e: KeyboardEvent) =>
									handleSectionKeydown(e, currentChapter, section.id)}
								class="text-[var(--text-secondary)] no-underline transition-colors duration-200 hover:text-[var(--primary)]
									{$activeSection === section.id ? 'text-[var(--primary)]' : ''}"
							>
								{section.title}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</nav>
	{/if}
{:else}
	<div class="text-[var(--text)]">
		{#each chapterList as chapter}
			<div class="mb-4">
				{#if chapter.slug === ''}
					<a
						href="{base}/book/"
						tabindex="0"
						on:keydown|preventDefault={(e: KeyboardEvent) => handleKeydown(e, `${base}/book/`)}
						class="text-[var(--text)] no-underline transition-colors duration-200 hover:text-[var(--primary)] {currentPath ===
						base + '/book/'
							? 'text-[var(--primary)]'
							: ''}"
					>
						{chapter.title}
					</a>
				{:else}
					<a
						href={getChapterUrl(chapter)}
						tabindex="0"
						class="text-[var(--text)] no-underline transition-colors duration-200 hover:text-[var(--primary)] {currentPath.includes(
							chapter.slug
						)
							? 'text-[var(--primary)]'
							: ''}"
					>
						<span class="text-[var(--primary)]">{chapter.chapter}.</span>
						{chapter.title}
					</a>
				{/if}
				{#if chapter.sections}
					<ul class="mt-2 space-y-2 border-l border-[var(--primary)] pl-4">
						{#each chapter.sections as section}
							<li>
								<a
									href={getSectionUrl(chapter, section.id)}
									tabindex="0"
									on:keydown|preventDefault={(e: KeyboardEvent) =>
										handleSectionKeydown(e, chapter, section.id)}
									class="text-[var(--text-secondary)] no-underline transition-colors duration-200 hover:text-[var(--primary)]
										{$activeSection === section.id ? 'text-[var(--primary)]' : ''}"
								>
									{section.title}
								</a>
							</li>
						{/each}
					</ul>
				{/if}
			</div>
		{/each}
	</div>
{/if}
