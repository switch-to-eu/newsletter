import { Body, Html as EmailHtml, Head, Preview, Tailwind } from "@react-email/components";
import { Font } from "./font";
import { emailTailwindConfig } from "../utils/tailwind-config";

export const Html = ({ children, web, previewText }: { children: React.ReactNode, web: boolean, previewText: string }) => {

    console.log("isWeb", web);

    if (web) {
        return <Tailwind config={emailTailwindConfig}>
            <div style={{ fontFamily: 'Hanken Grotesk, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }} className="bg-brand-bg leading-normal m-0 p-0">
                {children}
            </div>
        </Tailwind>
    } else {
        console.log("is not web");
        return (
            <EmailHtml>
                <Head>
                    <Font
                        fontFamily="Hanken Grotesk"
                        fallbackFontFamily="Verdana"
                        webFont={{
                            url: "https://newsletter.switch-to.eu/assets/fonts/HankenGrotesk-SemiBold.woff2",
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

                <Tailwind config={emailTailwindConfig}>
                    <Body style={{ fontFamily: 'Hanken Grotesk, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }} className="bg-brand-bg leading-normal m-0 p-0">
                        {children}
                    </Body>
                </Tailwind>
            </EmailHtml>
        )
    }
};