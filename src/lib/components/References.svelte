<script lang="ts">
	import { references, type Reference } from '$lib/data/references';

	export let citationIds: string[] = [];
	export let showHeader = true;

	$: citations = references
		.filter((ref) => citationIds.includes(ref.id))
		.sort((a, b) => a.authors[0].localeCompare(b.authors[0]));
</script>

<div class="references">
	{#if showHeader}
		<h2>References</h2>
	{/if}
	<ul class="list-none space-y-4 pl-0">
		{#each citations as ref}
			<li class="citation">
				{ref.authors.join(', ')} ({ref.year}).
				<span class="font-medium">{ref.title}.</span>
				<span class="italic">{ref.source}.</span>
				{#if ref.url}
					<a href={ref.url} class="text-sky-500 hover:text-sky-600 dark:text-sky-400"> [Link] </a>
				{/if}
				{#if ref.doi}
					<span>DOI: {ref.doi}</span>
				{/if}
			</li>
		{/each}
	</ul>
</div>
