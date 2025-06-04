import React, { Component, Suspense } from 'react';
import { useLoaderData, Link, useParams } from 'react-router';
import { newsletters } from '../data/newsletters';
import type { LoaderFunctionArgs } from "react-router";

export default function NewsletterRoute() {
    let params = useParams();
    const newsletter = newsletters.find(n => n.id === params.id);
    console.log(newsletter);

    if (!newsletter?.Component) {
        throw new Response("Newsletter component not found", { status: 404 });
    }

    return (
        <div className="newsletter-viewer">
            <div className="viewer-header">
                <Link to="/">
                    ← Back to Archive
                </Link>

                <h2>{newsletter.title}</h2>
            </div>

            {newsletter.Component({
                previewText: newsletter.title,
                unsubscribeUrl: "https://newsletter.switch-to.eu/unsubscribe",
            })}
        </div>
    );
} 