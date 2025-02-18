import { base } from '$app/paths';
import type { Chapter } from '$lib/types';

export function getChapterUrl(chapter: Chapter): string {
	return `${base}/book/${chapter.slug}/`;
}

export function getSectionUrl(chapter: Chapter, sectionId: string): string {
	return `${getChapterUrl(chapter)}#${sectionId}`;
} 