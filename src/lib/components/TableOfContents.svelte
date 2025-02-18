<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';

	export let chapters: {
		title: string;
		slug: string;
		chapter: number;
		sections?: { title: string; id: string }[];
	}[] = [];

	$: currentPath = $page.url.pathname;
</script>

<div class="text-white">
	{#each chapters as chapter}
		<div class="mb-4">
			<a
				href="{base}/book/{chapter.slug}/"
				class="text-white no-underline transition-colors duration-200 hover:text-[#FF1493] {currentPath.includes(
					chapter.slug
				)
					? 'text-[#FF1493]'
					: ''}"
			>
				<span class="text-[#FF1493]">{chapter.chapter}.</span>
				{chapter.title}
			</a>
			{#if chapter.sections}
				<ul class="mt-2 space-y-2 border-l border-[#FF1493] pl-4">
					{#each chapter.sections as section}
						<li>
							<a
								href="{base}/book/{chapter.slug}/#{section.id}"
								class="text-gray-300 no-underline hover:text-[#FF1493]"
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
