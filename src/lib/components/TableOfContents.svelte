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

<ul role="list" class="space-y-2">
	{#each chapters as chapter}
		<li>
			<div class="group">
				<a
					href="{base}/book/{chapter.slug}"
					class="flex items-center py-2 text-sm font-medium {currentPath === `/book/${chapter.slug}`
						? 'text-sky-500'
						: 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'}"
				>
					<span class="mr-4 text-slate-400 dark:text-slate-600">
						{chapter.chapter.toString().padStart(2, '0')}
					</span>
					{chapter.title}
				</a>
				{#if chapter.sections}
					<div class="ml-8 border-l border-slate-200 dark:border-slate-800">
						{#each chapter.sections as section}
							<a
								href="{base}/book/{chapter.slug}#{section.id}"
								class="block py-1 pl-4 text-sm text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
							>
								{section.title}
							</a>
						{/each}
					</div>
				{/if}
			</div>
		</li>
	{/each}
</ul>
