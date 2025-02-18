<script lang="ts">
	import { onMount } from 'svelte';
	let showHint = true;

	onMount(() => {
		const hasSeenHint = localStorage.getItem('hasSeenKeyboardHint');
		if (hasSeenHint) {
			showHint = false;
		}
	});

	function dismissHint() {
		showHint = false;
		localStorage.setItem('hasSeenKeyboardHint', 'true');
	}
</script>

{#if showHint}
	<div class="fixed bottom-4 right-4 z-50 rounded-lg bg-[var(--background)] p-4 shadow-lg border border-[var(--primary)]/20">
		<p class="text-sm text-[var(--text)]">
			Keyboard shortcuts: <kbd class="px-1 py-0.5 rounded bg-[var(--primary)]/10">Alt</kbd> + 
			<kbd class="px-1 py-0.5 rounded bg-[var(--primary)]/10">←</kbd> / 
			<kbd class="px-1 py-0.5 rounded bg-[var(--primary)]/10">→</kbd>
		</p>
		<button 
			class="mt-2 text-xs text-[var(--text-muted)] hover:text-[var(--primary)]"
			on:click={dismissHint}
		>
			Dismiss
		</button>
	</div>
{/if} 