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

export interface SharedPageProps {
    name: string;
    auth: Auth;
}

export interface HomeProps extends SharedPageProps {
    popularDestinations?: DestinationCard[];
    homeTopDestinations?: HomeTopDestination[];
    aboutJackyakInfoBlocks?: AboutJackyakInfoBlock[];
}

export interface DestinationProps extends SharedPageProps {
    popularDestinations?: DestinationCard[];
    featuredTabs?: string[];
    featuredCards?: FeaturedCard[];
}

export interface ViewAllProps extends SharedPageProps {
    destinations?: ViewAllDestination[];
}

export interface GuideProps extends SharedPageProps {
    popularDestinations?: DestinationCard[];
    guideTopDestinations?: GuideTopDestination[];
    exploreCards?: ExploreCard[];
    planSteps?: PlanStep[];
    trustItems?: TrustItem[];
}

export interface AboutProps extends SharedPageProps {
    differenceParagraphs?: string[];
    storyIntro?: string;
    pillars?: AboutPillar[];
    planTitle?: string;
}

export interface QuizProps extends SharedPageProps {
    selectQuestions?: QuizSelectQuestion[];
    segmentQuestions?: QuizSegmentQuestion[];
}

export interface UserProps extends SharedPageProps {
    saved?: UserSavedRow[];
    settings?: UserSettingRow[];
}

export interface NavigationProps {
    desktopNav?: NavItem[];
    mobileNav?: NavItem[];
}

export interface ReviewProps {
    places?: string[];
    maxLength?: number;
    maxPhotos?: number;
}
