<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import type { Chapter } from '$lib/types';

	export let prevChapter: Chapter | null;
	export let nextChapter: Chapter | null;

	function handleKeydown(event: KeyboardEvent) {
		if (event.altKey) {
			if (event.key === 'ArrowLeft' && prevChapter) {
				event.preventDefault();
				window.scrollTo(0, 0);
				goto(`${base}/book/${prevChapter.slug}/`).catch((error) => {
					console.error('Navigation failed:', error);
				});
			} else if (event.key === 'ArrowRight' && nextChapter) {
				event.preventDefault();
				window.scrollTo(0, 0);
				goto(`${base}/book/${nextChapter.slug}/`).catch((error) => {
					console.error('Navigation failed:', error);
				});
			}
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />
