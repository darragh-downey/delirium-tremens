<script lang="ts">
	import { navigating } from '$app/stores';
	import type { Chapter } from '$lib/types';
	import HighlightableText from './HighlightableText.svelte';
	import PopularHighlights from './PopularHighlights.svelte';
	import { validateSectionIds } from '$lib/utils/sections';
	import { onMount } from 'svelte';
	
	export let currentChapter: Chapter | undefined;
	let contentElement: HTMLElement;

	onMount(() => {
		if (contentElement && currentChapter?.sections) {
			validateSectionIds(contentElement, currentChapter.sections);
		}
	});
</script>

<main class="flex-1 px-4 py-8 xl:px-8">
	{#if $navigating}
		<div class="absolute inset-0 bg-[var(--background)]/50 backdrop-blur-sm"></div>
	{/if}
	{#if currentChapter}
		<h1 class="mb-6 text-2xl font-bold text-[var(--primary)] sm:mb-8 sm:text-3xl">
			{currentChapter.title}
		</h1>
		<PopularHighlights chapterId={currentChapter.slug} />
	{/if}
	<article
		bind:this={contentElement}
		class="prose prose-invert mx-auto w-full max-w-4xl 
		prose-headings:scroll-mt-28 prose-headings:font-display prose-headings:font-normal prose-headings:text-[var(--prose-headings)]
		prose-h1:text-xl prose-h2:text-lg prose-h3:text-base 
		prose-p:text-[var(--text)]
		prose-a:text-[var(--prose-links)]
		prose-a:no-underline hover:prose-a:text-[var(--primary-hover)]
		prose-strong:text-[var(--text)]
		prose-li:text-[var(--text)]
		prose-ul:marker:text-[var(--prose-bullets)]
		prose-ol:marker:text-[var(--prose-bullets)]
		prose-blockquote:border-[var(--prose-quote-borders)]
		prose-blockquote:bg-[var(--prose-quote-bg)]
		prose-blockquote:px-4
		prose-blockquote:py-1
		prose-blockquote:rounded-sm
		sm:prose-h1:text-2xl sm:prose-h2:text-xl sm:prose-h3:text-lg"
	>
		<HighlightableText chapterId={currentChapter?.slug ?? ''}>
			<slot />
		</HighlightableText>
	</article>
</main>
