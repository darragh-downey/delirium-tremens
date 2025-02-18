import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import { derived } from 'svelte/store';

export interface Highlight {
  id: string;
  text: string;
  chapterId: string;
  startOffset: number;
  endOffset: number;
  count: number;
  createdAt: Date;
  userIds: string[];
}

interface HighlightStore {
  highlights: Highlight[];
  popularHighlights: Highlight[];
}

const initialState: HighlightStore = {
  highlights: [],
  popularHighlights: []
};

function createHighlightStore() {
  const { subscribe, set, update } = writable<HighlightStore>(initialState);

  if (browser) {
    const stored = localStorage.getItem('highlights');
    if (stored) {
      set(JSON.parse(stored));
    }
  }

  return {
    subscribe,
    addHighlight: (highlight: Omit<Highlight, 'id' | 'count' | 'userIds' | 'createdAt'>) => {
      update(store => {
        const newHighlight: Highlight = {
          ...highlight,
          id: crypto.randomUUID(),
          count: 1,
          userIds: ['current-user'], // Would come from auth
          createdAt: new Date()
        };
        const newStore = {
          ...store,
          highlights: [...store.highlights, newHighlight]
        };
        if (browser) {
          localStorage.setItem('highlights', JSON.stringify(newStore));
        }
        return newStore;
      });
    },
    removeHighlight: (id: string) => {
      update(store => ({
        ...store,
        highlights: store.highlights.filter(h => h.id !== id)
      }));
    },
    updatePopular: () => {
      update(store => ({
        ...store,
        popularHighlights: [...store.highlights]
          .sort((a, b) => b.count - a.count)
          .slice(0, 5)
      }));
    }
  };
}

export const highlightStore = createHighlightStore();

export const highlightsByChapter = derived(highlightStore, $store => {
    const byChapter = new Map<string, Highlight[]>();
    
    for (const highlight of $store.highlights) {
        const chapterHighlights = byChapter.get(highlight.chapterId) || [];
        byChapter.set(highlight.chapterId, [...chapterHighlights, highlight]);
    }
    
    return byChapter;
}); 