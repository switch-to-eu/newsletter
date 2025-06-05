import React from 'react';
import Link from 'next/link';
import { newsletters } from './data/newsletters';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Newsletter Archive - Switch-to.EU",
    description: "Monthly EU Tech Digest - Reclaim your digital independence. Browse our archive of European digital alternatives.",
};

export default function Home() {
    return (
        <div className="container">
            {/* Header */}
            <div className="header">
                <div className="header-content">
                    <img
                        src="https://www.switch-to.eu/images/europe.svg"
                        alt="Europe"
                        className="europe-svg"
                    />
                    <a href="https://switch-to.eu" className="logo">switch-to.eu</a>
                </div>
                <p className="tagline">
                    Newsletter Archive - Reclaim your digital independence
                </p>
            </div>

            {/* Main Content */}
            <div className="content">
                <h1>🇪🇺 Monthly EU Tech Digest</h1>

                <p>
                    Welcome to our newsletter archive! Each month, we share the
                    latest <strong>European digital alternatives</strong> to
                    help you <strong>reclaim your digital sovereignty</strong>.
                    Browse our past issues below.
                </p>

                <ul className="newsletter-list">
                    {newsletters.map((newsletter) => (
                        <li key={newsletter.id} className="newsletter-item">
                            <Link
                                href={`/newsletter/${newsletter.id}`}
                                className="newsletter-link"
                            >
                                <h3 className="newsletter-title">{newsletter.title}</h3>
                                <div className="newsletter-date">{newsletter.date}</div>
                                <p className="newsletter-description">{newsletter.description}</p>
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Newsletter subscription form */}
                <div className="subscribe-section">
                    <h2>📧 Subscribe to our Newsletter</h2>
                    <p className="subscribe-description">
                        Stay informed about how you can make the switch and
                        inspire others to embrace European digital sovereignty.
                    </p>
                    <form
                        action="https://bandoco.mailcoach.app/subscribe/95f2e6cc-fc67-42ee-b845-f1c47af7c55f"
                        method="post"
                        acceptCharset="utf-8"
                        className="subscribe-form"
                    >
                        <input
                            type="hidden"
                            name="_token"
                            value="zHOZnjPQoUsQFECtrK5IxpitXflpXKD90ToDMQ7G"
                            autoComplete="off"
                        />
                        <div className="form-group">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email address..."
                                aria-label="Email address"
                                required
                                className="email-input"
                            />
                            <input
                                type="submit"
                                name="submit"
                                id="submit"
                                value="Subscribe"
                                className="subscribe-btn"
                            />
                        </div>
                    </form>
                </div>

                <p style={{ marginTop: '30px', textAlign: 'center' }}>
                    <a href="https://switch-to.eu" className="btn">
                        Visit switch-to.eu
                    </a>
                </p>
            </div>

            {/* Footer */}
            <div className="footer">
                <div className="social-links">
                    <a href="https://github.com/switch-to-eu/switch-to.eu">GitHub</a>
                    <a href="https://switch-to.eu/about">About</a>
                    <a href="https://switch-to.eu/contribute">Contribute</a>
                </div>

                <p>
                    © 2025 switch-to.eu - A project by{' '}
                    <a
                        href="https://vinnie.studio"
                        style={{ color: '#3b82f6', fontWeight: 600 }}
                    >
                        Studio Vinnie
                    </a>{' '}
                    and{' '}
                    <a
                        href="https://mvpeters.com/"
                        style={{ color: '#3b82f6', fontWeight: 600 }}
                    >
                        MVPeters
                    </a>
                </p>

                <p>Empowering digital sovereignty across Europe 🇪🇺</p>

                <p style={{ fontSize: '12px', marginTop: '16px' }}>
                    <a href="https://switch-to.eu/privacy">Privacy Policy</a>
                </p>
            </div>
        </div>
    );
} 