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
            birdWatchingSafari:
                '/images/destination/featured/birdwatching_safari.png',
            crocodileWatching:
                '/images/destination/featured/crocodilewatching.png',
            tigerWatching: '/images/destination/featured/tiger_watching.png',
        },
    },
    featured: {
        tilichoLake: '/images/featured/tilicho-lake.png',
        everestPrayerFlags: '/images/featured/everest-prayer-flags.png',
        gokyoLake: '/images/featured/gokyo-lake.png',
    },
    // About page slots use object-cover: frames have fixed ratios, so upload
    // matching shapes to avoid heavy cropping —
    // destinations: landscape ~4:3 (e.g. 800x600),
    // luklaFlight: large landscape, min 1200x800 (crops hardest, spans full
    // steps height from 600px up),
    // travelerAvatar: square (e.g. 400x400; object-top keeps faces).
    about: {
        mountEverest: '/images/destination/mount-everest.png',
        pokharaLakeside: '/images/about/pokhara.png',
        chitwanSafari: '/images/about/chitwan.png',
        luklaFlight: '/images/about/desktop_plane.png',
        travelerAvatar: '/images/about/traveler-avatar.png',
        hero: '/images/about/about-hero.png',
        heroSecond: '/images/about/about-hero-second.png',
        difference: '/images/about/about-difference.png',
        differenceMobile: '/images/about/about-difference-mobile.png',
        plan: '/images/about/about-plan.png',
    },
    icons: {
        advanture: '/images/about/icons/advanture_activities.png',
        localCommunication: '/images/about/icons/local_communication.png',
        nationalPark: '/images/about/icons/national_park.png',
        travelling: '/images/about/icons/traveling.png',
        wildlife: '/images/about/icons/wildlife_experience.png',
    },
} as const;

export type Images = typeof IMAGES;
