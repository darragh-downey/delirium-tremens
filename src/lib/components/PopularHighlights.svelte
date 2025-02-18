<script lang="ts">
  import { highlightStore } from '$lib/stores/highlights';
  
  export let chapterId: string;
  
  $: popularHighlights = $highlightStore.popularHighlights
    .filter(h => h.chapterId === chapterId)
    .slice(0, 3);
</script>

{#if popularHighlights.length > 0}
  <div class="space-y-4">
    <h3 class="text-lg font-semibold text-[var(--primary)]">Most Highlighted</h3>
    <div class="space-y-3">
      {#each popularHighlights as highlight}
        <div class="rounded-lg border border-[var(--primary)]/20 bg-[var(--prose-quote-bg)] p-4 shadow-sm transition-all duration-200 hover:shadow-md">
          <blockquote class="text-[var(--text)]">
            "{highlight.text}"
          </blockquote>
          <p class="mt-2 text-sm text-[var(--text-muted)]">
            Highlighted {highlight.count} {highlight.count === 1 ? 'time' : 'times'}
          </p>
        </div>
      {/each}
    </div>
  </div>
{/if} 