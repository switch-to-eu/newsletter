import { Header, Footer, ServiceCard, SectionDivider, Font } from './components';
import { Html } from './components/html';

import {
  Container,
  Heading,
  Img,
  Link,
  Section,
  Text,
  Button,
  Column,
  Row,
} from '@react-email/components';

interface LaunchNewsletterProps {
  previewText?: string;
  unsubscribeUrl?: string;
  web?: boolean;
}

export const LaunchNewsletter = ({
  previewText = "Your Monthly EU Tech Digest - Issue #001",
  unsubscribeUrl = "{{unsubscribeUrl}}",
  web = false,
}: LaunchNewsletterProps) => {
  return (
    <Html web={web} previewText={previewText}>
      <Container className="max-w-[600px] mx-auto px-0 bg-white rounded-xl overflow-hidden shadow-sm">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <Section className="p-4">
          <Heading className="font-heading font-extrabold text-brand-primary mb-6 text-4xl leading-tight">
            🇪🇺 Let's keep the momentum going—explore, share, and switch.
          </Heading>

          <Text className="mb-4 text-brand-text text-base">
            Here's the thing about <strong>Big Tech</strong>: they've made switching seem impossible. But it's not. In fact, <strong>it's easier than you think</strong>.
          </Text>

          <Text className="mb-4 text-brand-text text-base">
            <strong><Link href="https://switch-to.eu" className="text-brand-primary underline font-semibold">Switch-to.EU</Link></strong> launched this month to prove exactly that. The response from the European tech community has been extraordinary. <strong>Almost 10,000 visitors in two weeks</strong>. People are ready for change.
          </Text>

          <Text className="mb-4 text-brand-text text-base">This month, we're covering:</Text>

          <ol className="mb-6 pl-5">
            <li className="mb-2 text-brand-text"><strong>The Easiest Switch You Can Make Right Now</strong></li>
            <li className="mb-2 text-brand-text"><strong>Launch Event Highlights</strong></li>
            <li className="mb-2 text-brand-text"><strong>How You Can Help</strong></li>
            <li className="mb-2 text-brand-text"><strong>Press Coverage</strong></li>
            <li className="mb-2 text-brand-text"><strong>New EU Services</strong></li>
          </ol>

          <Text className="mb-4 text-brand-text text-base">
            Let's explore how we can collectively <strong>regain control of our digital lives</strong>.
          </Text>

          <SectionDivider />

          <Heading className="font-heading font-extrabold text-brand-primary mb-4 text-2xl leading-tight mt-8">
            ⚡ The Easiest Switch You Can Make Right Now
          </Heading>

          <Text className="mb-4 text-brand-text text-base">
            <strong>Your browser</strong>. That's it. <strong>Five minutes</strong> of your time for <strong>immediate privacy benefits</strong>.
          </Text>

          <Text className="mb-4 text-brand-text text-base">
            Every day you use <strong>Chrome</strong>, Google records your every click, search, and website visit. They build detailed profiles to sell to advertisers. <strong>Your browsing history becomes their business model</strong>.
          </Text>

          <Text className="mb-4 text-brand-text text-base">
            But here's what makes browsers the perfect first switch: <strong>no data migration required</strong>, all your accounts still work, and you can <strong>try it risk-free</strong>.
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
              Screenshot: <strong>Vivaldi</strong> is a 🇳🇴 privacy-focused browser with extensive customization and built-in ad/tracker blocking.
            </Text>

            <Text className="mb-4 text-brand-text text-base">Two browsers stand out for European users:</Text>

            <Row className="my-4">
              <Column className="w-1/2  pr-1">
                <Button
                  href="https://switch-to.eu/en/services/eu/vivaldi"
                  className="py-3  bg-brand-primary text-white no-underline rounded-lg font-semibold text-base text-center w-full"
                >
                  Vivaldi 🇳🇴
                </Button>
              </Column>

              <Column className="w-1/2 pl-1">
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

          <SectionDivider />

          {/* Launch Event Highlights */}
          <Heading className="font-heading font-extrabold text-brand-primary mb-4 text-2xl leading-tight mt-8">
            🎉 Launch Event Highlights
          </Heading>

          <Text className="mb-4 text-brand-text text-base">
            Thank you to everyone who participated in <strong>"DO THE TECH SWITCH"</strong> - our official launch event. The discussions on challenging <strong>Big Tech monopolies</strong> and supporting <strong>local, ethical alternatives</strong> were very insightful.
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
            <Text>Numbers don't lie - Europeans want alternatives. 🚀</Text>
            <ul className="mb-0 pl-5 text-base">
              <li className="mb-2 text-brand-text"><strong>9,847 visitors</strong> in the first two weeks</li>
              <li className="mb-2 text-brand-text"><strong>35,000+ page views</strong> and counting</li>
              <li className="mb-2 text-brand-text"><strong>2m 34s</strong> average visit duration</li>
              <li className="mb-2 text-brand-text"><strong>2,000+ organic search visits</strong></li>
              <li className="mb-2 text-brand-text"><strong>35 <a href="https://github.com/switch-to-eu/switch-to.eu" className="text-brand-primary underline font-semibold">GitHub issues</a></strong> created by the community</li>
            </ul>
          </div>

          <SectionDivider />

          {/* How You Can Help */}
          <Heading className="font-heading font-extrabold text-brand-primary mb-4 text-2xl leading-tight mt-8">
            🤝 How You Can Help
          </Heading>

          <Text className="mb-4 text-brand-text text-base">
            We're building <strong>Europe's most helpful directory of digital alternatives</strong>. Your expertise matters. <strong>Your contribution shapes the future</strong>.
          </Text>

          <div className="bg-blue-50 rounded-xl p-5 my-4 border-l-4 border-brand-primary">
            <Heading className="font-heading font-extrabold text-brand-primary mb-2 text-lg mt-0">Translation Help</Heading>
            <Text className="text-sm mb-2 text-brand-text">
              Help us serve users across <strong>all European languages</strong>. We're particularly looking for <strong>native German and French speakers</strong> to translate service descriptions and migration guides.
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
            <strong>Every contribution, no matter how small</strong>, helps Europeans reclaim their <strong>digital sovereignty</strong>.
          </Text>

          <Button
            href="https://switch-to.eu/en/contribute"
            className="inline-block py-3 px-6 bg-brand-secondary text-brand-primary no-underline rounded-lg font-semibold text-base my-4"
          >
            Get Involved
          </Button>

          <SectionDivider />

          {/* Press Coverage */}
          <Heading className="font-heading font-extrabold text-brand-primary mb-4 text-2xl leading-tight mt-8">
            📰 We Made the News
          </Heading>

          <Text className="mb-4 text-brand-text text-base">
            Our launch caught the attention of <strong>Belgian media</strong>. Major outlets covered our mission to help Europeans <strong>reclaim digital sovereignty</strong>.
          </Text>

          <Img
            src="https://newsletter.switch-to.eu/assets/images/news.jpg"
            alt="Vincent Peters and Simon Peters"
            className="w-full h-auto rounded-lg my-4 block"
          />

          <div className="bg-blue-50 rounded-xl p-5 my-4 border-l-4 border-brand-primary">
            <Heading className="font-heading font-extrabold text-brand-primary mb-2 text-lg mt-0">Belgian Media Coverage</Heading>
            <Text className="text-sm mb-4 text-brand-text">
              <strong>"We pay with our privacy"</strong> - how journalists described the hidden cost of <strong>Big Tech services</strong>.
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

          <SectionDivider />

          {/* New EU Services */}
          <Heading className="font-heading font-extrabold text-brand-primary mb-4 text-2xl leading-tight mt-8">
            🆕 New EU Services Added
          </Heading>

          <Text className="mb-6 text-brand-text text-base">
            <strong>Six new services</strong> added this month, thanks to <strong>community suggestions</strong>. Have one we should know about? <Link href="https://switch-to.eu/en/feedback" className="text-brand-primary underline font-semibold"><strong>Tell us</strong></Link>.
          </Text>

          {/* Service Cards using the new component */}
          <ServiceCard
            serviceName="Vivaldi Browser"
            serviceUrl="https://switch-to.eu/en/services/eu/vivaldi"
            replaces="Chrome, Firefox, Safari"
            description="🇳🇴 privacy-focused browser with extensive customization and built-in ad/tracker blocking."
            tags={["🇳🇴", "Privacy-first"]}
            backgroundColor="bg-blue-50"
          />

          <ServiceCard
            serviceName="Proton Drive"
            serviceUrl="https://switch-to.eu/en/services/eu/proton-drive"
            replaces="Google Drive, iCloud, OneDrive"
            description="Swiss encrypted cloud storage with end-to-end encryption and seamless Proton ecosystem integration."
            tags={["Swiss", "End-to-end encrypted"]}
            backgroundColor="bg-orange-50"
          />

          <ServiceCard
            serviceName="Mastodon"
            serviceUrl="https://switch-to.eu/en/services/eu/mastodon"
            replaces="Twitter/X, Facebook, Instagram"
            description="German-originated decentralized social media with no ads, no algorithms, and community-owned servers."
            tags={["German", "Decentralized"]}
            backgroundColor="bg-green-50"
          />

          <ServiceCard
            serviceName="kDrive"
            serviceUrl="https://switch-to.eu/en/services/eu/kdrive"
            replaces="Dropbox, Box, Google Drive"
            description="Swiss sovereign cloud storage with GDPR compliance and enterprise-grade security."
            tags={["Swiss", "Sovereign cloud"]}
            backgroundColor="bg-blue-50"
          />

          <ServiceCard
            serviceName="Infomaniak Mail"
            serviceUrl="https://switch-to.eu/en/services/eu/infomaniak-mail"
            replaces="Gmail, Outlook, Yahoo Mail"
            description="Swiss professional email service with 100% renewable energy hosting and collaboration tools."
            tags={["Swiss", "Eco-friendly"]}
            backgroundColor="bg-orange-50"
          />

          <ServiceCard
            serviceName="Filen"
            serviceUrl="https://switch-to.eu/en/services/eu/filen"
            replaces="Google Drive, Dropbox, OneDrive"
            description="German zero-knowledge cloud storage with client-side encryption and generous free tier."
            tags={["German", "Zero-knowledge"]}
            backgroundColor="bg-green-50"
          />
        </Section>

        {/* Footer */}
        <Footer
          unsubscribeUrl={unsubscribeUrl}
          viewInBrowserUrl="https://newsletter.switch-to.eu/newsletter/001"
        />
      </Container>
    </Html>
  );
};

export default LaunchNewsletter;