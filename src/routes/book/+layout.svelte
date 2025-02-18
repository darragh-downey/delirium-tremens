<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';
	import { chapters } from '$lib/data/chapters';
	import { navigating } from '$app/stores';

	$: currentSlug = $page.url.pathname.replace(base, '').split('/').filter(Boolean).pop();
</script>

{#if $navigating}
	<div class="fixed inset-0 z-50 flex items-center justify-center bg-[#1C1C1C]/50 backdrop-blur-sm">
		<div class="animate-pulse text-[#FF1493]">Loading...</div>
	</div>
{/if}

<article
	class="prose prose-invert mx-auto w-full max-w-none prose-headings:scroll-mt-28 prose-headings:font-display
	prose-headings:font-normal
	prose-headings:text-[#FF1493]
	prose-h1:text-2xl
	prose-h2:text-xl
	prose-h3:text-lg
	prose-p:text-white
	prose-a:text-[#FF1493]
	prose-a:no-underline
	hover:prose-a:text-[#FF69B4]
	prose-strong:text-white
	prose-li:text-white
	lg:max-w-4xl
	xl:max-w-6xl"
>
	<slot />
</article>
<ChapterNavigation {chapters} {currentSlug} />
