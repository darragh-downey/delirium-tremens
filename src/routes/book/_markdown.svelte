<script>
	/** @type {string[]} */
	export let references = [];
	import References from '$lib/components/References.svelte';
</script>

<article class="prose prose-invert w-full focus:outline-none" role="main" aria-label="Main content">
	<div
		class="mx-auto w-full max-w-prose
		prose-headings:scroll-mt-24 prose-headings:text-[var(--prose-headings)]
		prose-p:text-[var(--prose-text)] prose-li:text-[var(--prose-text)]
		prose-ul:marker:text-[var(--prose-bullets)]
		prose-ol:marker:text-[var(--prose-bullets)]"
	>
		<slot />
		{#if references.length > 0}
			<References citationIds={references} />
		{/if}
	</div>
</article>
