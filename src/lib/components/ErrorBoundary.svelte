<script lang="ts">
	import { base } from '$app/paths';
	
	let error: Error | null = null;
	
	function handleError(e: ErrorEvent) {
		error = e.error;
	}
</script>

<svelte:window on:error={handleError} />

{#if error}
	<div class="flex min-h-screen items-center justify-center bg-[var(--background)] p-4 text-center">
		<div>
			<h1 class="mb-4 text-2xl font-bold text-[var(--primary)]">Something went wrong</h1>
			<p class="mb-6 text-[var(--text)]">{error.message}</p>
			<a
				href="{base}/book/"
				class="text-[var(--text)] hover:text-[var(--primary)] transition-colors duration-200"
			>
				← Back to home
			</a>
		</div>
	</div>
{:else}
	<slot />
{/if} 