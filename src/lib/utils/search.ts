import Fuse from 'fuse.js';
import type { Chapter } from '$lib/types';

interface SearchResult {
  chapter: Chapter;
  matches: Array<{
    key: string;
    value: string;
    indices: number[][];
  }>;
}

export function createSearchIndex(chapters: Chapter[]) {
  return new Fuse(chapters, {
    keys: ['title', 'content'], // Would need to add content to Chapter type
    threshold: 0.3,
    includeMatches: true
  });
} 