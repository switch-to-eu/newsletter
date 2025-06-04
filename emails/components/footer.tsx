import {
    Section,
    Link,
    Text,
} from '@react-email/components';

interface FooterProps {
    githubUrl?: string;
    aboutUrl?: string;
    contributeUrl?: string;
    companyName?: string;
    studioName?: string;
    studioUrl?: string;
    mvpName?: string;
    mvpUrl?: string;
    unsubscribeUrl?: string;
    viewInBrowserUrl?: string;
    privacyUrl?: string;
    tagline?: string;
}

export const Footer = ({
    githubUrl = "https://github.com/switch-to-eu/switch-to.eu",
    aboutUrl = "https://switch-to.eu/about",
    contributeUrl = "https://switch-to.eu/contribute",
    companyName = "switch-to.eu",
    studioName = "Studio Vinnie",
    studioUrl = "https://www.vinnie.studio",
    mvpName = "MVPeters",
    mvpUrl = "https://www.mvpeters.com/",
    unsubscribeUrl = "{{unsubscribeUrl}}",
    viewInBrowserUrl = "https://newsletter.switch-to.eu/newsletters/001_launch.html",
    privacyUrl = "https://switch-to.eu/privacy",
    tagline = "Empowering digital sovereignty across Europe",
}: FooterProps) => {
    return (
        <Section className="bg-gray-50 p-6 border-t border-brand-border text-center">
            <div className="my-4">
                <Link href={githubUrl} className="text-brand-primary no-underline mx-3 font-semibold">GitHub</Link>
                <Link href={aboutUrl} className="text-brand-primary no-underline mx-3 font-semibold">About</Link>
                <Link href={contributeUrl} className="text-brand-primary no-underline mx-3 font-semibold">Contribute</Link>
            </div>

            <Text className="text-sm text-brand-muted mb-2">
                © 2024 {companyName} - A project by{' '}
                <Link href={studioUrl} className="text-brand-blue font-semibold underline">{studioName}</Link>
                {' '}and{' '}
                <Link href={mvpUrl} className="text-brand-blue font-semibold underline">{mvpName}</Link>
            </Text>

            <Text className="text-sm text-brand-muted mb-2">{tagline}</Text>

            <Text className="text-xs mt-4 text-brand-muted mb-2">
                <Link href={unsubscribeUrl} className="text-brand-muted font-normal underline">Unsubscribe</Link>
                {' | '}
                <Link href={viewInBrowserUrl} className="text-brand-muted font-normal underline">View in browser</Link>
                {' | '}
                <Link href={privacyUrl} className="text-brand-muted font-normal underline">Privacy Policy</Link>
            </Text>
        </Section>
    );
}; 