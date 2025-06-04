import { Font } from '@/components/font';
import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text,
    Hr,
    Button,
    Column,
    Row,
    Tailwind,
} from '@react-email/components';
import * as React from 'react';

interface LaunchNewsletterProps {
    previewText?: string;
    unsubscribeUrl?: string;
}

const tailwindConfig = {
    theme: {
        extend: {
            colors: {
                brand: {
                    primary: '#1a3c5a',
                    secondary: '#feb5a7',
                    bg: '#fefbf9',
                    text: '#383838',
                    muted: '#334155',
                    border: '#e5e7eb',
                    success: '#22c55e',
                    blue: '#3b82f6',
                },
            },
            fontFamily: {
                body: ['Hanken Grotesk', 'sans-serif'],
                heading: ['Bricolage Grotesque', 'serif'],
            },
        },
    },
};

export const LaunchNewsletter = ({
    previewText = "Your Monthly EU Tech Digest - Issue #001",
    unsubscribeUrl = "{{unsubscribeUrl}}",
}: LaunchNewsletterProps) => {
    return (
        <Html>
            <Head>
                {/* Define multiple fonts with separate Font components */}
                <Font
                    fontFamily="Hanken Grotesk"
                    fallbackFontFamily="Verdana"
                    webFont={{
                        url: "https://newsletter.switch-to.eu/assets/fonts/HankenGrotesk-Regular.woff2",
                        format: "woff2",
                    }}
                    fontWeight={400}
                    fontStyle="normal"
                />

                <Font
                    fontFamily="Bricolage Grotesque"
                    fallbackFontFamily="Georgia"
                    webFont={{
                        url: "https://newsletter.switch-to.eu/assets/fonts/BricolageGrotesque-ExtraBold.woff2",
                        format: "woff2",
                    }}
                    fontWeight={800}
                    fontStyle="normal"
                />
            </Head>

            <Preview>{previewText}</Preview>

            <Tailwind config={tailwindConfig}>
                <Body style={{ fontFamily: 'Hanken Grotesk, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }} className="bg-brand-bg leading-normal m-0 p-0">
                    <Container className="max-w-[600px] mx-auto bg-white rounded-xl overflow-hidden shadow-sm">
                        {/* Header */}
                        <Section className="bg-brand-bg p-6 border-b border-brand-border text-center">
                            <div className="flex items-center justify-center gap-4 mb-2">
                                <Img
                                    src="https://newsletter.switch-to.eu/assets/images/logo.png"
                                    alt="Europe"
                                    className="flex-shrink-0"
                                    width="40"
                                    height="40"
                                />
                                <Link href="https://switch-to.eu" className="font-heading font-extrabold text-3xl text-brand-primary no-underline inline-block">
                                    switch-to.eu
                                </Link>
                            </div>

                            <Text className="text-sm text-brand-muted m-0">
                                Reclaim your digital independence. It's time to switch.
                            </Text>
                        </Section>

                        {/* Main Content */}
                        <Section className="p-8">
                            <Heading className="font-heading font-extrabold text-brand-primary mb-6 text-4xl leading-tight">
                                🇪🇺 Your Monthly EU Tech Digest
                            </Heading>

                            <Text className="mb-4 text-brand-text text-base">Hello Digital Freedom Fighter!</Text>

                            <Text className="mb-4 text-brand-text text-base">
                                Here's the thing about <strong>Big Tech</strong>: they've made switching seem impossible.
                                But it's not. In fact, <strong>it's easier than you think</strong>.
                            </Text>

                            <Text className="mb-4 text-brand-text text-base">
                                <strong>Switch-to.EU</strong> launched this month to prove exactly that.
                                The response from the European tech community has been extraordinary.
                                <strong>Almost 10,000 visitors in two weeks</strong>. People are ready for change.
                            </Text>

                            <Text className="mb-4 text-brand-text text-base">This month, we're covering:</Text>

                            <ul className="mb-6 pl-5">
                                <li className="mb-2 text-brand-text"><strong>The Easiest Switch You Can Make Right Now</strong></li>
                                <li className="mb-2 text-brand-text"><strong>Launch Event Highlights</strong></li>
                                <li className="mb-2 text-brand-text"><strong>How You Can Help</strong></li>
                                <li className="mb-2 text-brand-text"><strong>Press Coverage</strong></li>
                                <li className="mb-2 text-brand-text"><strong>New EU Services</strong></li>
                            </ul>

                            <Text className="mb-4 text-brand-text text-base">
                                Let's explore how we can collectively <strong>regain control of our digital lives</strong>.
                            </Text>

                            <Hr className="border-0 h-px bg-brand-border my-10" />

                            <Heading className="font-heading font-extrabold text-brand-primary mb-4 text-2xl leading-tight mt-8">
                                ⚡ The Easiest Switch You Can Make Right Now
                            </Heading>

                            <Text className="mb-4 text-brand-text text-base">
                                <strong>Your browser</strong>. That's it. <strong>Five minutes</strong> of your time for
                                <strong>immediate privacy benefits</strong>.
                            </Text>

                            <Text className="mb-4 text-brand-text text-base">
                                Every day you use <strong>Chrome</strong>, Google records your every click, search,
                                and website visit. They build detailed profiles to sell to advertisers.
                                <strong>Your browsing history becomes their business model</strong>.
                            </Text>

                            <Text className="mb-4 text-brand-text text-base">
                                But here's what makes browsers the perfect first switch: <strong>no data migration required</strong>,
                                all your accounts still work, and you can <strong>try it risk-free</strong>.
                            </Text>

                            {/* Browser Switch CTA */}
                            <div className="bg-green-50 p-6 rounded-xl border-l-4 border-brand-success my-6">
                                <Heading className="font-heading font-extrabold text-brand-primary mb-4 text-xl leading-tight mt-0">
                                    Switch to a European friendly Browser
                                </Heading>

                                <Img
                                    src="https://newsletter.switch-to.eu/assets/images/vivaldi.jpg"
                                    alt="Vivaldi Browser"
                                    className="w-full h-auto rounded-lg my-4 block"
                                />

                                <Text className="text-sm mb-4 text-brand-text">
                                    Screenshot: <strong>Vivaldi</strong> is a Norwegian privacy-focused browser with extensive
                                    customization and built-in ad/tracker blocking.
                                </Text>

                                <Text className="mb-4 text-brand-text text-base">Two browsers stand out for European users:</Text>

                                <Row className="my-4">
                                    <Column className="w-1/2">
                                        <Button
                                            href="https://switch-to.eu/en/services/eu/vivaldi"
                                            className="py-3  bg-brand-primary text-white no-underline rounded-lg font-semibold text-base text-center w-full"
                                        >
                                            Vivaldi (Norway)
                                        </Button>
                                    </Column>

                                    <Column className="w-1/2">
                                        <Button
                                            href="https://switch-to.eu/en/services/eu/brave"
                                            className="py-3 bg-brand-secondary text-brand-primary no-underline rounded-lg font-semibold text-base text-center w-full"
                                        >
                                            Brave
                                        </Button>
                                    </Column>
                                </Row>

                                <Text className="mb-0 italic text-sm text-brand-text">
                                    Both automatically import your bookmarks, passwords, and settings. The switch takes minutes, not hours.
                                </Text>
                            </div>

                            <Hr className="border-0 h-px bg-brand-border my-10" />

                            {/* Launch Event Highlights */}
                            <Heading className="font-heading font-extrabold text-brand-primary mb-4 text-2xl leading-tight mt-8">
                                🎉 Launch Event Highlights
                            </Heading>

                            <Text className="mb-4 text-brand-text text-base">
                                Thank you to everyone who participated in <strong>"DO THE TECH SWITCH"</strong> - our official launch event.
                                The discussions on challenging <strong>Big Tech monopolies</strong> and supporting
                                <strong>local, ethical alternatives</strong> were very insightful.
                            </Text>

                            <div className="bg-orange-50 rounded-xl p-5 my-4 border-l-4 border-brand-primary">
                                <Heading className="font-heading font-extrabold text-brand-primary mb-2 text-lg mt-0">
                                    Our Speakers Made It Real
                                </Heading>
                                <Text className="text-sm mb-4 text-brand-text">Three experts, three perspectives on why switching matters:</Text>

                                <Text className="text-sm mb-3 text-brand-text">
                                    <strong>Hosts: </strong>
                                    <Link href="https://mvpeters.com" className="text-brand-primary underline font-semibold">Simon Peters (MVPeters)</Link> and
                                    <Link href="https://omvorm.studio" className="text-brand-primary underline font-semibold"> Mathias De Winter (Omvorm)</Link>
                                </Text>

                                <ul className="mb-4 text-sm pl-5">
                                    <li className="mb-2 text-brand-text">
                                        <Link href="https://www.isditecht.be" className="text-brand-primary underline font-semibold"><strong>Jannes Van de Maele</strong></Link> -
                                        The reality of Big Tech surveillance
                                    </li>
                                    <li className="mb-2 text-brand-text">
                                        <Link href="https://vinnie.studio" className="text-brand-primary underline font-semibold"><strong>Vincent Peters</strong></Link> -
                                        How Switch-to.EU makes switching simple
                                    </li>
                                    <li className="mb-2 text-brand-text">
                                        <Link href="https://nestor.coop" className="text-brand-primary underline font-semibold"><strong>Stijn Vanhandsaeme</strong></Link> -
                                        Business alternatives that actually work
                                    </li>
                                </ul>

                                {/* Event Photos */}
                                <Row className="mb-3">
                                    <Column className="w-1/2 pr-1">
                                        <Img src="https://newsletter.switch-to.eu/assets/images/event_1.jpg" alt="Event Photo 1" className="w-full h-auto rounded-lg block" />
                                    </Column>
                                    <Column className="w-1/2 pl-1">
                                        <Img src="https://newsletter.switch-to.eu/assets/images/event_2.jpg" alt="Event Photo 2" className="w-full h-auto rounded-lg block" />
                                    </Column>
                                </Row>

                                <Row>
                                    <Column className="w-1/2 pr-1">
                                        <Img src="https://newsletter.switch-to.eu/assets/images/event_3.jpg" alt="Event Photo 3" className="w-full h-auto rounded-lg block" />
                                    </Column>
                                    <Column className="w-1/2 pl-1">
                                        <Img src="https://newsletter.switch-to.eu/assets/images/event_4.jpg" alt="Event Photo 4" className="w-full h-auto rounded-lg block" />
                                    </Column>
                                </Row>
                            </div>

                            {/* Launch Impact Numbers */}
                            <div className="mt-6 mb-6 p-4 bg-gray-50 rounded-lg">
                                <Heading className="font-heading font-extrabold text-brand-primary mb-3 text-lg mt-0">
                                    Launch Impact Numbers
                                </Heading>
                                <ul className="mb-0 pl-5 text-base">
                                    <li className="mb-2 text-brand-text"><strong>9,847 visitors</strong> in the first two weeks</li>
                                    <li className="mb-2 text-brand-text"><strong>35,000+ page views</strong> and counting</li>
                                    <li className="mb-2 text-brand-text"><strong>2m 34s</strong> average visit duration</li>
                                    <li className="mb-2 text-brand-text"><strong>2,000+ organic search visits</strong></li>
                                    <li className="mb-2 text-brand-text"><strong>35 GitHub issues</strong> created by the community</li>
                                </ul>
                            </div>

                            <Hr className="border-0 h-px bg-brand-border my-10" />

                            {/* How You Can Help */}
                            <Heading className="font-heading font-extrabold text-brand-primary mb-4 text-2xl leading-tight mt-8">
                                🤝 How You Can Help
                            </Heading>

                            <Text className="mb-4 text-brand-text text-base">
                                We're building <strong>Europe's most helpful directory of digital alternatives</strong>.
                                Your expertise matters. <strong>Your contribution shapes the future</strong>.
                            </Text>

                            <div className="bg-blue-50 rounded-xl p-5 my-4 border-l-4 border-brand-primary">
                                <Heading className="font-heading font-extrabold text-brand-primary mb-2 text-lg mt-0">Translation Help</Heading>
                                <Text className="text-sm mb-2 text-brand-text">
                                    Help us serve users across <strong>all European languages</strong>. We're particularly looking for
                                    <strong>native German and French speakers</strong> to translate service descriptions and migration guides.
                                </Text>
                            </div>

                            <div className="bg-orange-50 rounded-xl p-5 my-4 border-l-4 border-brand-primary">
                                <Heading className="font-heading font-extrabold text-brand-primary mb-2 text-lg mt-0">Migration Guide Writers</Heading>
                                <Text className="text-sm mb-2 text-brand-text">
                                    Share your switching experience. Write step-by-step guides for services you've successfully transitioned to.
                                </Text>
                            </div>

                            <div className="bg-green-50 rounded-xl p-5 my-4 border-l-4 border-brand-primary">
                                <Heading className="font-heading font-extrabold text-brand-primary mb-2 text-lg mt-0">European Service Hunters</Heading>
                                <Text className="text-sm mb-2 text-brand-text">
                                    Know an amazing European alternative we haven't covered? Help us discover and add new services to our database.
                                </Text>
                            </div>

                            <div className="bg-blue-50 rounded-xl p-5 my-4 border-l-4 border-brand-primary">
                                <Heading className="font-heading font-extrabold text-brand-primary mb-2 text-lg mt-0">Content Testers</Heading>
                                <Text className="text-sm mb-2 text-brand-text">
                                    Test our migration guides and service descriptions. Your feedback ensures accuracy and usability.
                                </Text>
                            </div>

                            <Text className="mt-6 mb-4 text-brand-text text-base">
                                <strong>Every contribution, no matter how small</strong>, helps Europeans reclaim their
                                <strong>digital sovereignty</strong>.
                            </Text>

                            <Button
                                href="https://switch-to.eu/contribute"
                                className="inline-block py-3 px-6 bg-brand-secondary text-brand-primary no-underline rounded-lg font-semibold text-base my-4"
                            >
                                Get Involved
                            </Button>

                            <Hr className="border-0 h-px bg-brand-border my-10" />

                            {/* Press Coverage */}
                            <Heading className="font-heading font-extrabold text-brand-primary mb-4 text-2xl leading-tight mt-8">
                                📰 We Made the News
                            </Heading>

                            <Text className="mb-4 text-brand-text text-base">
                                Our launch caught the attention of <strong>Belgian media</strong>. Major outlets covered our mission to help
                                Europeans <strong>reclaim digital sovereignty</strong>.
                            </Text>

                            <Img
                                src="https://newsletter.switch-to.eu/assets/images/news.jpg"
                                alt="Vincent Peters and Simon Peters"
                                className="w-full h-auto rounded-lg my-4 block"
                            />

                            <div className="bg-blue-50 rounded-xl p-5 my-4 border-l-4 border-brand-primary">
                                <Heading className="font-heading font-extrabold text-brand-primary mb-2 text-lg mt-0">Belgian Media Coverage</Heading>
                                <Text className="text-sm mb-4 text-brand-text">
                                    <strong>"We pay with our privacy"</strong> - how journalists described the hidden cost of
                                    <strong>Big Tech services</strong>.
                                </Text>

                                <ul className="mb-4 text-sm pl-5">
                                    <li className="mb-2 text-brand-text">
                                        <Link href="https://www.gva.be/binnenland/antwerpse-broers-lanceren-website-die-switch-helpt-maken-van-amerikaanse-techgiganten-als-google-of-whatsapp-naar-europese-alternatieven-we-betalen-met-onze-privacy/67443663.html" className="text-brand-primary underline font-semibold">
                                            <strong>Gazet van Antwerpen</strong>
                                        </Link> - "Antwerp brothers help switch from American tech giants"
                                    </li>
                                    <li className="mb-2 text-brand-text">
                                        <Link href="https://www.standaard.be/podcast/switch-to.eu-het-platform-dat-alternatieven-biedt-voor-de-big-tech-uit-de-vs/68395325.html" className="text-brand-primary underline font-semibold">
                                            <strong>De Standaard Podcast</strong>
                                        </Link> - "Switch-to.eu: The platform offering Big Tech alternatives"
                                    </li>
                                    <li className="mb-2 text-brand-text">
                                        <Link href="https://www.hln.be/internet/weg-van-whatsapp-en-gmail-antwerpse-broers-maken-overstap-naar-europese-alternatieven-makkelijker-met-website~a57fbc3b/" className="text-brand-primary underline font-semibold">
                                            <strong>Het Laatste Nieuws</strong>
                                        </Link> - "Away from WhatsApp and Gmail: making the switch easier"
                                    </li>
                                    <li className="mb-2 text-brand-text">
                                        <Link href="https://www.made-in.be/antwerpen/antwerpse-broers-lanceren-website-die-switch-helpt-maken-van-big-tech-naar-europese-alternatieven-we-betalen-met-onze-privacy/" className="text-brand-primary underline font-semibold">
                                            <strong>Made in Belgium</strong>
                                        </Link> - "From Big Tech to European alternatives"
                                    </li>
                                </ul>
                            </div>

                            <Hr className="border-0 h-px bg-brand-border my-10" />

                            {/* New EU Services */}
                            <Heading className="font-heading font-extrabold text-brand-primary mb-4 text-2xl leading-tight mt-8">
                                🆕 New EU Services Added
                            </Heading>

                            <Text className="mb-6 text-brand-text text-base">
                                <strong>Six new services</strong> added this month, thanks to <strong>community suggestions</strong>.
                                Have one we should know about?
                                <Link href="https://switch-to.eu/en/feedback" className="text-brand-primary underline font-semibold"><strong>Tell us</strong></Link>.
                            </Text>

                            {/* Service Cards */}
                            <div className="bg-blue-50 rounded-xl p-5 my-4 border-l-4 border-brand-primary">
                                <Heading className="font-heading font-extrabold text-brand-primary mb-2 text-lg mt-0">
                                    Vivaldi Browser
                                    <Link href="https://switch-to.eu/en/services/eu/vivaldi" className="text-sm font-normal ml-2 text-brand-primary underline">→ view service</Link>
                                </Heading>
                                <Text className="text-sm mb-2 text-brand-text"><strong>Replaces:</strong> Chrome, Firefox, Safari</Text>
                                <Text className="text-sm mb-2 text-brand-text">
                                    Norwegian privacy-focused browser with extensive customization and built-in ad/tracker blocking.
                                </Text>
                                <div>
                                    <span className="inline-block py-1 px-3 bg-green-200 text-brand-primary text-xs font-semibold rounded-full mr-1 my-1">Norwegian</span>
                                    <span className="inline-block py-1 px-3 bg-green-200 text-brand-primary text-xs font-semibold rounded-full mr-1 my-1">Privacy-first</span>
                                </div>
                            </div>

                            <div className="bg-orange-50 rounded-xl p-5 my-4 border-l-4 border-brand-primary">
                                <Heading className="font-heading font-extrabold text-brand-primary mb-2 text-lg mt-0">
                                    Proton Drive
                                    <Link href="https://switch-to.eu/en/services/eu/proton-drive" className="text-sm font-normal ml-2 text-brand-primary underline">→ view service</Link>
                                </Heading>
                                <Text className="text-sm mb-2 text-brand-text"><strong>Replaces:</strong> Google Drive, iCloud, OneDrive</Text>
                                <Text className="text-sm mb-2 text-brand-text">
                                    Swiss encrypted cloud storage with end-to-end encryption and seamless Proton ecosystem integration.
                                </Text>
                                <div>
                                    <span className="inline-block py-1 px-3 bg-green-200 text-brand-primary text-xs font-semibold rounded-full mr-1 my-1">Swiss</span>
                                    <span className="inline-block py-1 px-3 bg-green-200 text-brand-primary text-xs font-semibold rounded-full mr-1 my-1">End-to-end encrypted</span>
                                </div>
                            </div>

                            <div className="bg-green-50 rounded-xl p-5 my-4 border-l-4 border-brand-primary">
                                <Heading className="font-heading font-extrabold text-brand-primary mb-2 text-lg mt-0">
                                    Mastodon
                                    <Link href="https://switch-to.eu/en/services/eu/mastodon" className="text-sm font-normal ml-2 text-brand-primary underline">→ view service</Link>
                                </Heading>
                                <Text className="text-sm mb-2 text-brand-text"><strong>Replaces:</strong> Twitter/X, Facebook, Instagram</Text>
                                <Text className="text-sm mb-2 text-brand-text">
                                    German-originated decentralized social media with no ads, no algorithms, and community-owned servers.
                                </Text>
                                <div>
                                    <span className="inline-block py-1 px-3 bg-green-200 text-brand-primary text-xs font-semibold rounded-full mr-1 my-1">German</span>
                                    <span className="inline-block py-1 px-3 bg-green-200 text-brand-primary text-xs font-semibold rounded-full mr-1 my-1">Decentralized</span>
                                </div>
                            </div>

                            <div className="bg-blue-50 rounded-xl p-5 my-4 border-l-4 border-brand-primary">
                                <Heading className="font-heading font-extrabold text-brand-primary mb-2 text-lg mt-0">
                                    kDrive
                                    <Link href="https://switch-to.eu/en/services/eu/kdrive" className="text-sm font-normal ml-2 text-brand-primary underline">→ view service</Link>
                                </Heading>
                                <Text className="text-sm mb-2 text-brand-text"><strong>Replaces:</strong> Dropbox, Box, Google Drive</Text>
                                <Text className="text-sm mb-2 text-brand-text">
                                    Swiss sovereign cloud storage with GDPR compliance and enterprise-grade security.
                                </Text>
                                <div>
                                    <span className="inline-block py-1 px-3 bg-green-200 text-brand-primary text-xs font-semibold rounded-full mr-1 my-1">Swiss</span>
                                    <span className="inline-block py-1 px-3 bg-green-200 text-brand-primary text-xs font-semibold rounded-full mr-1 my-1">Sovereign cloud</span>
                                </div>
                            </div>

                            <div className="bg-orange-50 rounded-xl p-5 my-4 border-l-4 border-brand-primary">
                                <Heading className="font-heading font-extrabold text-brand-primary mb-2 text-lg mt-0">
                                    Infomaniak Mail
                                    <Link href="https://switch-to.eu/en/services/eu/infomaniak-mail" className="text-sm font-normal ml-2 text-brand-primary underline">→ view service</Link>
                                </Heading>
                                <Text className="text-sm mb-2 text-brand-text"><strong>Replaces:</strong> Gmail, Outlook, Yahoo Mail</Text>
                                <Text className="text-sm mb-2 text-brand-text">
                                    Swiss professional email service with 100% renewable energy hosting and collaboration tools.
                                </Text>
                                <div>
                                    <span className="inline-block py-1 px-3 bg-green-200 text-brand-primary text-xs font-semibold rounded-full mr-1 my-1">Swiss</span>
                                    <span className="inline-block py-1 px-3 bg-green-200 text-brand-primary text-xs font-semibold rounded-full mr-1 my-1">Eco-friendly</span>
                                </div>
                            </div>

                            <div className="bg-green-50 rounded-xl p-5 my-4 border-l-4 border-brand-primary">
                                <Heading className="font-heading font-extrabold text-brand-primary mb-2 text-lg mt-0">
                                    Filen
                                    <Link href="https://switch-to.eu/en/services/eu/filen" className="text-sm font-normal ml-2 text-brand-primary underline">→ view service</Link>
                                </Heading>
                                <Text className="text-sm mb-2 text-brand-text"><strong>Replaces:</strong> Google Drive, Dropbox, OneDrive</Text>
                                <Text className="text-sm mb-2 text-brand-text">
                                    German zero-knowledge cloud storage with client-side encryption and generous free tier.
                                </Text>
                                <div>
                                    <span className="inline-block py-1 px-3 bg-green-200 text-brand-primary text-xs font-semibold rounded-full mr-1 my-1">German</span>
                                    <span className="inline-block py-1 px-3 bg-green-200 text-brand-primary text-xs font-semibold rounded-full mr-1 my-1">Zero-knowledge</span>
                                </div>
                            </div>
                        </Section>

                        {/* Footer */}
                        <Section className="bg-gray-50 p-6 border-t border-brand-border text-center">
                            <div className="my-4">
                                <Link href="https://github.com/switch-to-eu/switch-to.eu" className="text-brand-primary no-underline mx-3 font-semibold">GitHub</Link>
                                <Link href="https://switch-to.eu/about" className="text-brand-primary no-underline mx-3 font-semibold">About</Link>
                                <Link href="https://switch-to.eu/contribute" className="text-brand-primary no-underline mx-3 font-semibold">Contribute</Link>
                            </div>

                            <Text className="text-sm text-brand-muted mb-2">
                                © 2024 switch-to.eu - A project by{' '}
                                <Link href="https://www.vinnie.studio" className="text-brand-blue font-semibold underline">Studio Vinnie</Link>
                                {' '}and{' '}
                                <Link href="https://www.mvpeters.com/" className="text-brand-blue font-semibold underline">MVPeters</Link>
                            </Text>

                            <Text className="text-sm text-brand-muted mb-2">Empowering digital sovereignty across Europe</Text>

                            <Text className="text-xs mt-4 text-brand-muted mb-2">
                                <Link href={unsubscribeUrl} className="text-brand-muted font-normal underline">Unsubscribe</Link>
                                {' | '}
                                <Link href="https://newsletter.switch-to.eu/newsletters/001_launch.html" className="text-brand-muted font-normal underline">View in browser</Link>
                                {' | '}
                                <Link href="https://switch-to.eu/privacy" className="text-brand-muted font-normal underline">Privacy Policy</Link>
                            </Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default LaunchNewsletter; 