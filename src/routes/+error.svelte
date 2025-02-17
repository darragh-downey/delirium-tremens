<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';
</script>

<div class="flex min-h-[100dvh] flex-col items-center justify-center bg-[#1C1C1C] px-6 py-24 sm:py-32 lg:px-8">
	<div class="text-center">
		<p class="text-6xl font-semibold text-[#FF1493]">{$page.status}</p>
		<h1 class="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Page not found</h1>
		<p class="mt-6 text-base leading-7 text-gray-300">
			Sorry, we couldn't find the page you're looking for.
		</p>
		<div class="mt-10">
			<a
				href="{base}/book/"
				class="text-sm font-semibold text-white hover:text-[#FF1493] transition-colors duration-200"
			>
				← Back to home
			</a>
		</div>
	</div>
</div> 