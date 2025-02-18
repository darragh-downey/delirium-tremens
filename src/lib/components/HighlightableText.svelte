<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { highlightStore, type Highlight } from '$lib/stores/highlights';
  import { onMount } from 'svelte';
  
  const dispatch = createEventDispatcher<{
    highlight: {
      text: string;
      startOffset: number;
      endOffset: number;
    }
  }>();
  
  export let chapterId: string;
  export let disabled = false;
  
  let container: HTMLDivElement;
  let highlights: Highlight[] = [];
  
  function handleSelection() {
    if (disabled) return;
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed) return;
    
    const range = selection.getRangeAt(0);
    const text = selection.toString().trim();
    
    if (!text) return;
    
    dispatch('highlight', {
      text,
      startOffset: range.startOffset,
      endOffset: range.endOffset
    });
    
    selection.removeAllRanges();
  }
  
  onMount(() => {
    const unsubscribe = highlightStore.subscribe(store => {
      highlights = store.highlights.filter(h => h.chapterId === chapterId);
    });
    
    return unsubscribe;
  });
</script>

<div
  bind:this={container}
  class="prose prose-invert"
>
  <div
    role="textbox"
    on:mouseup={handleSelection}
    class="w-full cursor-text"
    aria-label="Content with text highlighting enabled"
    tabindex="0"
  >
    <slot />
  </div>
</div> 