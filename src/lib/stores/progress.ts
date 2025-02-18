import { writable } from 'svelte/store';
import type { Chapter } from '$lib/types';

interface ReadingProgress {
  completedChapters: Set<string>;
  bookmarkChapter?: string;
  lastRead: Date;
}

export const readingProgress = writable<ReadingProgress>({
  completedChapters: new Set(),
  lastRead: new Date()
}); 