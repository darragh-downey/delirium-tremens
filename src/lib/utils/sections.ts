export function validateSectionIds(contentElement: HTMLElement, chapterSections: Array<{ id: string, title: string }> | undefined) {
    if (!chapterSections) return;

    // Get all heading IDs from the content
    const contentHeadings = Array.from(contentElement.querySelectorAll('h2[id], h3[id]'));
    const contentIds = new Set(contentHeadings.map(h => h.id));

    // Get all section IDs from the chapter data
    const sectionIds = new Set(chapterSections.map(s => s.id));

    // Find mismatches
    const missingInContent = [...sectionIds].filter(id => !contentIds.has(id));
    const missingInNav = [...contentIds].filter(id => !sectionIds.has(id));

    if (missingInContent.length > 0) {
        console.warn('Section IDs in navigation but missing in content:', missingInContent);
    }
    if (missingInNav.length > 0) {
        console.warn('Heading IDs in content but missing in navigation:', missingInNav);
    }

    // Log the full mapping for debugging
    console.debug('Content structure:', 
        contentHeadings.map(h => ({
            id: h.id,
            level: h.tagName.toLowerCase(),
            title: h.textContent?.trim()
        }))
    );
    console.debug('Navigation structure:', chapterSections);
} 