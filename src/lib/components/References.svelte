<script lang="ts">
	import { references, type Reference } from '$lib/data/references';

	export let citationIds: string[] = [];

	$: citations = references
		.filter((ref) => citationIds.includes(ref.id))
		.sort((a, b) => a.authors[0].localeCompare(b.authors[0]));
</script>

<div class="references">
	<h2>References</h2>
	<ul class="list-none space-y-4 pl-0">
		{#each citations as ref}
			<li class="citation">
				{ref.authors.join(', ')} ({ref.year}).
				<span class="font-medium">{ref.title}.</span>
				<span class="italic">{ref.source}.</span>
				{#if ref.url}
					<a href={ref.url} class="text-[#FF1493] no-underline hover:text-[#FF69B4]"> [Link] </a>
				{/if}
				{#if ref.doi}
					<span>DOI: {ref.doi}</span>
				{/if}
			</li>
		{/each}
	</ul>
</div>
