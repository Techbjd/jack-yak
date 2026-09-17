/**
 * Login / register page copy + form endpoints.
 *
 * RULE: all user-facing auth strings live here. Components handle layout,
 * validation flow, and submission only.
 */

export const loginCopy = {
    endpoint: '/login',
    title: 'Welcome Back',
    subtitle: 'Sign in to discover personalized destinations.',
    emailLabel: 'Email',
    emailPlaceholder: 'Enter Your Email',
    emailRequired: 'Email is required.',
    emailInvalid: 'Please enter a valid email address.',
    passwordLabel: 'Password',
    passwordPlaceholder: 'Enter Your Password',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot Password?',
    submit: 'Sign In',
    submitting: 'Signing in…',
    divider: 'Or',
    guestCta: 'Continue to explore destinations',
    guestAria: 'Continue as guest to find your destination',
    noAccount: 'Don’t you have an account?',
    signUp: 'Sign up',
    lookingAround: 'Just looking around?',
    browse: 'Browse destinations',
} as const;

export const registerCopy = {
    endpoint: '/register',
    title: 'Create account',
    subtitle:
        'Sign up to save trips, request availability, and leave reviews.',
    nameLabel: 'Name',
    namePlaceholder: 'Enter Your Name',
    emailLabel: 'Email',
    emailPlaceholder: 'Enter Your Email',
    passwordLabel: 'Password',
    passwordPlaceholder: 'Min. 8 characters',
    confirmLabel: 'Confirm password',
    confirmPlaceholder: 'Repeat your password',
    submit: 'Sign Up',
    submitting: 'Creating…',
    haveAccount: 'Already have an account?',
    signIn: 'Sign in',
} as const;
