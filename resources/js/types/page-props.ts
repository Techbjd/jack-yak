// ============================================
// Page props contract — backend → frontend (Inertia)
// ============================================
// TODAY: routes/web.php uses Route::inertia() with NO props, so every
// page below renders from frontend static defaults in `@/config/*`.
// Nothing here changes runtime behaviour — this file only DECLARES
// the shapes the backend MUST send when it takes over, reusing the
// SAME interfaces the components already consume.
//
// Rule for teammates:
//   1. Backend sends these props via Inertia::render('Page', [...]) .
//   2. Page component prefers props, falls back to `@/config` default.
//   3. Never invent a second shape — import the type from `@/config`.
//
// Example (backend, later):
//   Inertia::render('ViewAll', ['destinations' => $destinations]);
// Example (frontend, later):
//   function ViewAll({ destinations = viewAllDestinations }: ViewAllProps)
// ============================================

import type { Auth } from './auth';
import type {
    AboutJackyakInfoBlock,
    AboutPillar,
    DestinationCard,
    ExploreCard,
    FeaturedCard,
    GuideTopDestination,
    HomeTopDestination,
    NavItem,
    PlanStep,
    QuizSelectQuestion,
    QuizSegmentQuestion,
    TrustItem,
    UserSavedRow,
    UserSettingRow,
    ViewAllDestination,
} from '@/config';

/** Props every page receives (see HandleInertiaRequests middleware). */
export interface SharedPageProps {
    name: string;
    auth: Auth;
}

/** GET /home — currently fully static (Hero, Map, Discover, Top). */
export interface HomeProps extends SharedPageProps {
    /** Overrides `popularDestinations` in `@/config/destination`. */
    popularDestinations?: DestinationCard[];
    /** Overrides `homeTopDestinations` in `@/config/destination`. */
    homeTopDestinations?: HomeTopDestination[];
    /** Overrides `aboutJackyakInfoBlocks` in `@/config/home`. */
    aboutJackyakInfoBlocks?: AboutJackyakInfoBlock[];
}

/** GET /destinations — hero, journey, popular, immersive, featured. */
export interface DestinationProps extends SharedPageProps {
    popularDestinations?: DestinationCard[];
    featuredTabs?: string[];
    featuredCards?: FeaturedCard[];
}

/** GET /view-all — paginated listing, 12 per page in ViewAll.tsx. */
export interface ViewAllProps extends SharedPageProps {
    /** Overrides `viewAllDestinations` in `@/config/destination`. */
    destinations?: ViewAllDestination[];
}

/** GET /guide — WhyExplore, TopDestinations, PlanTrip, Stories. */
export interface GuideProps extends SharedPageProps {
    popularDestinations?: DestinationCard[];
    /** Overrides `guideTopDestinations` in `@/config/destination`. */
    guideTopDestinations?: GuideTopDestination[];
    /** Overrides `exploreCards` in `@/config/guide`. */
    exploreCards?: ExploreCard[];
    /** Overrides `planSteps` in `@/config/guide`. */
    planSteps?: PlanStep[];
    /** Overrides `trustItems` in `@/config/guide`. */
    trustItems?: TrustItem[];
}

/** GET /about — hero, difference, journey story, newsletter CTA. */
export interface AboutProps extends SharedPageProps {
    differenceParagraphs?: string[];
    storyIntro?: string;
    pillars?: AboutPillar[];
    planTitle?: string;
}

/** GET /form (Quiz) — destination-finder form. */
export interface QuizProps extends SharedPageProps {
    selectQuestions?: QuizSelectQuestion[];
    segmentQuestions?: QuizSegmentQuestion[];
}

/** GET /user — profile, saved, settings, sign-out cards. */
export interface UserProps extends SharedPageProps {
    saved?: UserSavedRow[];
    settings?: UserSettingRow[];
}

/** Navigation (header/sidebar) — overrides `@/config/navigation`. */
export interface NavigationProps {
    desktopNav?: NavItem[];
    mobileNav?: NavItem[];
}

/** Review form — overrides `@/config/review`. */
export interface ReviewProps {
    places?: string[];
    maxLength?: number;
    maxPhotos?: number;
}
