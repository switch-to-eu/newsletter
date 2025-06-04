import { Hr } from '@react-email/components';

interface SectionDividerProps {
    className?: string;
    marginY?: string;
}

export const SectionDivider = ({
    className = "border-0 h-px bg-brand-border",
    marginY = "my-10",
}: SectionDividerProps) => {
    return <Hr className={`${className} ${marginY}`} />;
}; 