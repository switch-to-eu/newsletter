import React from 'react';
import { Section, Row, Column } from '@react-email/components';

interface EmailListItem {
    content: string | React.ReactNode;
}

interface EmailListProps {
    items: EmailListItem[];
    type?: 'ordered' | 'unordered';
    className?: string;
    itemClassName?: string;
}

export const EmailList: React.FC<EmailListProps> = ({
    items,
    type = 'unordered',
    className = '',
    itemClassName = '',
}) => {
    const bulletSymbol = '•';

    return (
        <Section className={className}>
            {items.map((item, index) => (
                <Row key={index} className="mb-2">
                    <Column className={`w-6 align-top font-bold text-brand-text ${itemClassName}`}>
                        {type === 'ordered' ? `${index + 1}.` : bulletSymbol}
                    </Column>
                    <Column className={`flex-1 text-brand-text ${itemClassName}`}>
                        {item.content}
                    </Column>
                </Row>
            ))}
        </Section>
    );
}; 