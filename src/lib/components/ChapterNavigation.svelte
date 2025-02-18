<script lang="ts">
	import { base } from '$app/paths';

	export let chapters: {
		title: string;
		slug: string;
		chapter: number;
	}[];
	export let currentSlug: string | undefined = '';

	$: currentIndex = chapters.findIndex((c) => c.slug === currentSlug);
	$: console.log('Navigation:', { currentSlug, currentIndex, prevChapter, nextChapter });
	$: prevChapter = currentIndex > 0 ? chapters[currentIndex - 1] : null;
	$: nextChapter = currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null;
</script>

<div class="mt-16 flex justify-between border-t border-[#FF1493] pt-6 text-white">
	<!-- Previous chapter -->
	<div>
		{#if prevChapter}
			<a
				href="{base}/book/{prevChapter.slug}/"
				class="text-white no-underline hover:text-[#FF1493]"
			>
				← {prevChapter.title}
			</a>
		{/if}
	</div>

	<!-- Next chapter -->
	<div>
		{#if nextChapter}
			<a
				href="{base}/book/{nextChapter.slug}/"
				class="text-white no-underline hover:text-[#FF1493]"
			>
				{nextChapter.title} →
			</a>
		{/if}
	</div>
</div>
