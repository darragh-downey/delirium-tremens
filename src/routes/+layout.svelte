<script lang="ts">
	import '../app.css';
	import { theme } from '$lib/stores/theme';
	import { onMount } from 'svelte';

	onMount(() => {
		theme.initialize();
	});
</script>

<div class="min-h-screen bg-[var(--background)]">
	<slot />
</div>
