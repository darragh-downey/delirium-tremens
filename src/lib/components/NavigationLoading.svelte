<script lang="ts">
	import { navigating } from '$app/stores';
</script>

{#if $navigating}
	<div class="fixed bottom-4 left-4 z-50 rounded-lg bg-[var(--background)] p-4 shadow-lg border border-[var(--primary)]/20">
		<div class="flex items-center space-x-2">
			<div class="h-2 w-2 rounded-full bg-[var(--primary)] animate-ping"></div>
			<p class="text-sm text-[var(--text)]">Navigating...</p>
		</div>
	</div>
{/if} 