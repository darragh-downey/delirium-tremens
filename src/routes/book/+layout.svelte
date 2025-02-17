<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import TableOfContents from '$lib/components/TableOfContents.svelte';
	import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';
	import Footer from '$lib/components/Footer.svelte';

	const chapters = [
		{
			title: 'Introduction to Cybersecurity',
			slug: '01-introduction',
			chapter: 1,
			sections: [
				{ title: 'What is Cybersecurity?', id: 'what-is-cybersecurity' },
				{ title: 'Why is Cybersecurity Important?', id: 'why-is-cybersecurity-important' }
			]
		},
		{
			title: 'Basic Security Concepts',
			slug: '02-basics',
			chapter: 2
		},
		{
			title: 'Threat Analysis',
			slug: '03-threats',
			chapter: 3
		}
	];

	$: currentSlug = $page.url.pathname.split('/').pop();
</script>

<slot />
