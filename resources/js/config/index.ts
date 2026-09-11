// ============================================
// Config — Single Import Entry (barrel)
// ============================================
// Import everything content-related from ONE place:
//
//   import { popularDestinations, aboutPillars } from '@/config';
//
// This file only RE-EXPORTS. It changes no runtime behaviour.
// The real values still live in the files listed below —
// edit the source file, never this barrel.
// ============================================
//
// WHAT TO EDIT (safe for content/design teammates):
//   ./destination  → destination cards, tabs, view-all listing,
//                    home top strip, guide top carousel
//   ./guide        → guide page: explore cards, plan steps, trust strip
//   ./home         → home page: about-jackyak info blocks
//   ./about        → about page copy (pillars, story, newsletter)
//   ./quiz         → quiz questions + options
//   ./review       → review places, photo/length limits
//   ./user         → user profile placeholder copy + counts
//   ./navigation   → header / mobile nav items
//
// DO NOT EDIT for content changes (design system / assets):
//   ./images       → asset URL registry (moving a file? edit here only)
//   ./colors       → palette + useColors() hook
//   ./theme        → reusable Tailwind class strings
//
// Backend note: these are frontend-owned static defaults. When the
// backend starts sending the same shapes via Inertia props (see
// `@/types/page-props`), components will prefer props and fall back
// to these constants — so keep the SHAPES in sync, not the values.
// ============================================

export {
    popularDestinations,
    featuredTabs,
    featuredTabIcons,
    destinationFeaturedCards,
    viewAllDestinations,
    guideTopDestinations,
    homeTopDestinations,
} from './destination';
export type {
    DestinationCard,
    FeaturedCard,
    ViewAllDestination,
    GuideTopDestination,
    HomeTopDestination,
} from './destination';

export {
    aboutDifferenceParagraphs,
    aboutStoryIntro,
    aboutPillars,
    aboutPlanTitle,
    aboutNewsletter,
} from './about';
export type { AboutPillar } from './about';

export { quizSelectQuestions, quizSegmentQuestions } from './quiz';
export { trustItems, exploreCards, planSteps } from './guide';
export type { TrustItem, ExploreCard, PlanStep } from './guide';

export { aboutJackyakInfoBlocks } from './home';
export type { AboutJackyakInfoBlock } from './home';
export type {
    QuizSelectQuestion,
    QuizSegmentQuestion,
    QuizAnswers,
} from './quiz';

export { reviewPlaces, MAX_REVIEW_LENGTH, MAX_REVIEW_PHOTOS } from './review';

export { userProfile, userSaved, userSettings } from './user';
export type { UserSavedRow, UserSettingRow } from './user';

export { desktopNav, mobileNav, footerColumns } from './navigation';
export type { NavItem, FooterColumnData } from './navigation';

export { IMAGES } from './images';
export type { Images } from './images';

export { COLORS, ColorsContext, useColors, setRootColors } from './colors';
export type { Colors } from './colors';

export {
    fontPrimary,
    fontDisplay,
    fontQuote,
    fontQuoteMark,
    eyebrow,
    destCardTitle,
    pageShell,
    sectionPadding,
    sectionMuted,
    sectionContainer,
    sectionInner,
    headingSection,
    headingSubsection,
    bodyText,
    bodyTextSmall,
    ctaMobile,
    ctaDesktop,
    ctaIconCircle,
    imagePlaceholder,
    imageRoundedLg,
    imageRoundedXl,
    coverImageAbsolute,
    cardRounded,
    panelRounded,
    viewAllLink,
    carouselDotsWrap,
    carouselDot,
    cardMobileImage,
    cardMobileContent,
    authTitle,
    authLabel,
    authInput,
    authButton,
    authSocialButton,
    authDividerLine,
    quizLabel,
    quizInput,
    quizOption,
    quizButton,
    quizNote,
    quizError,
    aboutHeroTitle,
    aboutSectionTitle,
    aboutHeading,
    aboutSubhead,
    aboutBody,
    aboutBar,
    aboutCta,
    aboutNote,
    userName,
    userMuted,
    userSectionTitle,
    userRowDark,
    userRow,
    userEditButton,
    userSignOut,
    modalTitle,
    modalSubtitle,
    modalLabel,
    modalInput,
    modalHint,
    modalTextarea,
    modalPrimary,
    modalGhost,
} from './theme';
