<script lang="ts">
	import { base } from '$app/paths';
	import TableOfContents from './TableOfContents.svelte';
	import type { Chapter } from '$lib/types';
	
	export let isSidebarOpen: boolean;
	export let onCloseSidebar: () => void;
	export let chapters: Chapter[];
</script>

{#if isSidebarOpen}
	<div
		role="button"
		tabindex="0"
		class="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
		on:click={onCloseSidebar}
		on:keydown={(e) => {
			if (e.key === 'Escape') {
				onCloseSidebar();
			}
		}}
	></div>
{/if}

<aside
	class="fixed bottom-0 left-0 top-16 z-40 max-h-[calc(100vh-4rem)] w-[min(72%,18rem)] transform overflow-y-auto border-r border-transparent bg-[var(--background)] px-4 pb-10 pt-6 text-[var(--text)] transition-transform duration-300 ease-in-out lg:hidden {isSidebarOpen
		? 'translate-x-0'
		: '-translate-x-full'}"
>
	<TableOfContents {chapters} />
</aside>

<aside 
	class="hidden w-64 shrink-0 border-r border-[var(--primary)]/20 lg:block"
	aria-label="Table of contents"
>
	<div class="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto p-4">
		<TableOfContents {chapters} />
	</div>
</aside> 