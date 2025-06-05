import React from 'react';
import Link from 'next/link';
import { render } from '@react-email/render';
import { newsletters } from '../../data/newsletters';
import type { Metadata } from "next";
import { notFound } from 'next/navigation';

interface NewsletterPageProps {
    params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: NewsletterPageProps): Promise<Metadata> {
    const { id } = await params;

    const newsletter = newsletters.find(n => n.id === id);

    if (!newsletter) {
        return {
            title: "Newsletter Not Found",
            description: "Newsletter not found",
        };
    }

    return {
        title: `${newsletter.title} - Switch-to.EU Newsletter`,
        description: newsletter.description,
    };
}

export async function generateStaticParams() {
    return newsletters.map((newsletter) => ({
        id: newsletter.id,
    }));
}

export default async function NewsletterPage({ params }: NewsletterPageProps) {
    const { id } = await params;
    const newsletter = newsletters.find(n => n.id === id);

    if (!newsletter) {
        notFound();
    }

    const Component = newsletter.Component;

    // Use the React Email render function
    const html = await render(<Component previewText={newsletter.title}
        unsubscribeUrl="https://newsletter.switch-to.eu/unsubscribe" web={true} />, {
        pretty: false,
        plainText: false
    });

    return (
        <div className="newsletter-viewer">
            <div className="viewer-header">
                <Link href="/">
                    ← Back to Archive
                </Link>
                <h2>{newsletter.title}</h2>
            </div>

            <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
    );
} 