import {
    Heading,
    Text,
    Link,
} from '@react-email/components';

interface ServiceCardProps {
    serviceName: string;
    serviceUrl: string;
    replaces: string;
    description: string;
    tags: string[];
    backgroundColor?: string;
}

export const ServiceCard = ({
    serviceName,
    serviceUrl,
    replaces,
    description,
    tags,
    backgroundColor = "bg-blue-50",
}: ServiceCardProps) => {
    return (
        <div className={`${backgroundColor} rounded-xl p-5 my-4 border-l-4 border-brand-primary`}>
            <Heading className="font-heading font-extrabold text-brand-primary mb-2 text-lg mt-0">
                {serviceName}
                <Link href={serviceUrl} className="text-sm font-normal ml-2 text-brand-primary underline">→ view service</Link>
            </Heading>
            <Text className="text-sm mb-2 text-brand-text"><strong>Replaces:</strong> {replaces}</Text>
            <Text className="text-sm mb-2 text-brand-text">
                {description}
            </Text>
            <div>
                {tags.map((tag, index) => (
                    <span key={index} className="inline-block py-1 px-3 bg-green-200 text-brand-primary text-xs font-semibold rounded-full mr-1 my-1">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}; 