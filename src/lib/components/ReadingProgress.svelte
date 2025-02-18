<script lang="ts">
	import { onMount } from 'svelte';
	
	let progress = 0;
	
	onMount(() => {
		function updateProgress() {
			const windowHeight = window.innerHeight;
			const documentHeight = document.documentElement.scrollHeight - windowHeight;
			progress = (window.scrollY / documentHeight) * 100;
		}
		
		window.addEventListener('scroll', updateProgress);
		return () => window.removeEventListener('scroll', updateProgress);
	});
</script>

<div class="fixed top-0 left-0 z-[60] h-0.5 w-full bg-[var(--background)]">
	<div 
		class="h-full bg-[var(--primary)] transition-all duration-150"
		style="width: {progress}%"
	></div>
</div> 