<script lang="ts">
	import { base } from '$app/paths';
	import ThemeToggle from './ThemeToggle.svelte';
	export let onToggleSidebar: () => void;
</script>

<header
	class="fixed top-0 z-50 flex h-16 w-full items-center border-b border-transparent bg-[var(--background)] px-4 py-6"
>
	<div class="flex flex-1 items-center justify-between">
		<button
			type="button"
			class="inline-flex h-10 w-10 items-center justify-center rounded-md text-white hover:text-gray-300 lg:hidden"
			on:click={onToggleSidebar}
		>
			<span class="sr-only">Open sidebar</span>
			<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h16"
				/>
			</svg>
		</button>
		<div class="flex items-center space-x-4 lg:ml-4">
			<img src="{base}/OIT_transparent_2.svg" alt="Book Logo" class="h-auto w-32 py-12" />
		</div>

		<div class="hidden items-center space-x-4 lg:flex">
			<a href="{base}/" class="text-xl font-bold text-[var(--text)] hover:text-[var(--text-muted)]">
				Defending Critical Infrastructure
			</a>
		</div>
		<div class="hidden lg:block">
			<ThemeToggle />
		</div>
	</div>
</header>
