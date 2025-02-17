<script lang="ts">
	import { base } from '$app/paths';

	export let chapters: {
		title: string;
		slug: string;
		chapter: number;
	}[];
	export let currentSlug: string | undefined = '';

	$: currentIndex = chapters.findIndex((c) => c.slug === currentSlug);
	$: prevChapter = currentIndex > 0 ? chapters[currentIndex - 1] : null;
	$: nextChapter = currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null;
</script>

<nav
	class="mt-8 flex items-center justify-between border-t border-gray-200 pt-8 dark:border-gray-800"
>
	{#if prevChapter}
		<a
			href="{base}/book/{prevChapter.slug}"
			class="group flex items-center text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
		>
			<svg
				viewBox="0 0 3 6"
				class="mr-3 h-1.5 w-auto overflow-visible text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300"
			>
				<path
					d="M3 0L0 3L3 6"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
			{prevChapter.title}
		</a>
	{:else}
		<div></div>
	{/if}

	{#if nextChapter}
		<a
			href="{base}/book/{nextChapter.slug}"
			class="group flex items-center text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
		>
			{nextChapter.title}
			<svg
				viewBox="0 0 3 6"
				class="ml-3 h-1.5 w-auto overflow-visible text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300"
			>
				<path
					d="M0 0L3 3L0 6"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</a>
	{:else}
		<div></div>
	{/if}
</nav>
