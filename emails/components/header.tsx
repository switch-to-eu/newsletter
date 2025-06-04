import {
    Section,
    Row,
    Column,
    Img,
    Link,
    Text,
} from '@react-email/components';

interface HeaderProps {
    logoUrl?: string;
    logoAlt?: string;
    logoWidth?: number;
    logoHeight?: number;
    brandName?: string;
    brandUrl?: string;
    tagline?: string;
}

export const Header = ({
    logoUrl = "https://newsletter.switch-to.eu/assets/images/logo.png",
    logoAlt = "Europe",
    logoWidth = 40,
    logoHeight = 40,
    brandName = "switch-to.eu",
    brandUrl = "https://switch-to.eu",
    tagline = "Reclaim your digital independence. It's time to switch.",
}: HeaderProps) => {
    return (
        <Section className="bg-brand-bg p-6 border-b border-brand-border text-center">
            <Row className="mb-2">
                <Column className="w-auto text-center">
                    <Img
                        src={logoUrl}
                        alt={logoAlt}
                        className="inline-block mr-4 align-middle"
                        width={logoWidth.toString()}
                        height={logoHeight.toString()}
                    />

                    <Link href={brandUrl} className="font-heading font-extrabold text-3xl text-brand-primary no-underline align-middle">
                        {brandName}
                    </Link>
                </Column>
            </Row>

            <Text className="text-sm text-brand-muted m-0">
                {tagline}
            </Text>
        </Section>
    );
}; 