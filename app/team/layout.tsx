import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Team | Kimani Wambua & Company Advocates',
    description: 'Meet our distinguished legal leadership team including Francisca N. Wambua, Victor K. Mungai, and our expert consultants.',
};

export default function TeamLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
