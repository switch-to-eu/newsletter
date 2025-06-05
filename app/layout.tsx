import type { Metadata } from 'next'
import PlausibleProvider from 'next-plausible'
import './App.css'

export const metadata: Metadata = {
    title: 'Switch-to.EU Newsletter Archive',
    description: 'Monthly EU Tech Digest - Reclaim your digital independence',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <PlausibleProvider domain="newsletter.switch-to.eu">
                    {children}
                </PlausibleProvider>
            </body>
        </html>
    )
} 