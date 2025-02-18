<script>
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import { base } from '$app/paths';

  onMount(() => {
    goto(`${base}/book/authors/`);
  });
</script>

<div>Redirecting...</div>
