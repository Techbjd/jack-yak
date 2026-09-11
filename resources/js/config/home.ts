// ============================================
// Home — page content
// ============================================
// Copy lives here so components stay pure UI.
// Backend can replace these arrays later without touching components.
// ============================================

export interface AboutJackyakInfoBlock {
    title: string;
    body: string;
}

/**
 * About-Jackyak info blocks — exactly 2 items, order matters.
 * Mobile renders [0] above the image and [1] below it;
 * desktop maps over both in a 2-col grid.
 */
export const aboutJackyakInfoBlocks: AboutJackyakInfoBlock[] = [
    {
        title: 'Popular Destinations',
        body: 'Discover breathtaking mountains, serene lakes, ancient heritage sites, lush national parks, and vibrant cities across Nepal. Every destination offers a unique adventure waiting to be explored.',
    },
    {
        title: 'Travel Tips',
        body: 'Find essential information on the best seasons to visit, packing guides, permits, transportation, budgeting, and safety tips before you travel.',
    },
];
