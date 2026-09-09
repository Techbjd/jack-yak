// ============================================
// Images — Single Asset Registry
// ============================================
// Every image URL in the app lives here (public/images/**, kebab-case,
// grouped by feature). Components import IMAGES instead of hardcoding
// strings → moving or renaming an asset means editing one line.
// ============================================

export const IMAGES = {
    logo: {
        jackYak: '/images/logo/jack-yak-logo.png',
    },
    home: {
        heroBg: '/images/home/hero-bg.png',
        heroSecondary: '/images/home/hero-secondary.png',
        mountainDivider: '/images/home/mountain-divider.png',
        aboutJackyak: '/images/home/about-jackyak.png',
        discoverNepal1: '/images/home/discover-nepal-1.png',
        discoverNepal2: '/images/home/discover-nepal-2.png',
        provincesMap: '/images/home/nepal-provinces-map.png',
        trekkerYak: '/images/home/trekker-yak-silhouette.png',
    },
    destination: {
        amaDablam: '/images/destination/ama-dablam-panorama.png',
        swayambhuStupa: '/images/destination/swayambhu-stupa.png',
        stupaPanorama: '/images/destination/stupa-mountain-panorama.png',
        journey: '/images/destination/journey.png',
        journeyMobile: '/images/destination/journey-mobile.png',
        journeyMountain: '/images/destination/journey-mountain.png',
        journeyMobileMountain:
            '/images/destination/journey-mobile-mountain.png',
        yakMascot: '/images/destination/yak-mascot.png',
        mountEverest: '/images/destination/mount-everest.png',
        langtangMountain: '/images/destination/langtang-mountain.png',
        pokharaLake: '/images/destination/pokhara-lake.png',
        mardiHimal: '/images/destination/mardi-himal.png',
        upperMustang: '/images/destination/upper-mustang.png',
        chitwanRhino: '/images/destination/chitwan-rhino.png',
        kathmanduTemple: '/images/destination/kathmandu-temple.png',
        icons: {
            all: '/images/destination/icons/icon-all.png',
            trekking: '/images/destination/icons/icon-trekking.png',
            safari: '/images/destination/icons/icon-safari.png',
            spiritual: '/images/destination/icons/icon-spiritual.png',
            heritage: '/images/destination/icons/icon-heritage.png',
            lakes: '/images/destination/icons/icon-lakes.png',
        },
        featured: {
            elephantSafari: '/images/destination/featured/elephant_safari.png',
            jeepSafari: '/images/destination/featured/jeep_safari.png',
            canoeSafari: '/images/destination/featured/canoe_safari.png',
            birdWatchingSafari: '/images/destination/featured/birdwatching_safari.png',
            crocodileWatching: '/images/destination/featured/crocodilewatching.png',
            tigerWatching: '/images/destination/featured/tiger_watching.png',
        },
    },
    featured: {
        tilichoLake: '/images/featured/tilicho-lake.png',
        everestPrayerFlags: '/images/featured/everest-prayer-flags.png',
        gokyoLake: '/images/featured/gokyo-lake.png',
    },
} as const;

export type Images = typeof IMAGES;
