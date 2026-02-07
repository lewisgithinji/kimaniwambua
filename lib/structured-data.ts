// Structured data for SEO and rich snippets
export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Kimani Wambua & Company Advocates",
    "description": "Professional legal services firm providing comprehensive legal solutions in Kenya. We provide amicable legal solutions across Property Law, Banking, Business Law, Commercial Law, Company Secretarial Services, Litigation, and Probate Administration.",
    "url": "https://kimaniwambuaadvocates.com",
    "logo": "https://kimaniwambuaadvocates.com/images/logo.svg",
    "image": "https://kimaniwambuaadvocates.com/images/logo.svg",
    "telephone": "+254733877867",
    "email": "info@kimaniwambuaadvocates.com",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Mirage Plaza, 2nd Floor, Right wing, Bellevue, Mombasa Road",
        "addressLocality": "Nairobi",
        "postalCode": "00100",
        "postOfficeBoxNumber": "10862-00100",
        "addressCountry": "KE"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": "-1.3178",
        "longitude": "36.8489"
    },
    "areaServed": {
        "@type": "Country",
        "name": "Kenya"
    },
    "priceRange": "$$",
    "founder": [
        {
            "@type": "Person",
            "name": "Francisca Ngina Wambua Mungai",
            "jobTitle": "Managing Partner",
            "email": "fwambua@kimaniwambuaadvocates.com"
        },
        {
            "@type": "Person",
            "name": "Victor Kimani",
            "jobTitle": "Partner",
            "email": "kimani@kimaniwambuaadvocates.com"
        },
        {
            "@type": "Person",
            "name": "Daniel Njoroge",
            "jobTitle": "Partner",
            "email": "dnjoroge@kimaniwambuaadvocates.com"
        }
    ],
    "openingHoursSpecification": [
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:30",
            "closes": "17:30"
        }
    ],
    "sameAs": [
        // Add social media profiles if available
    ],
    "knowsAbout": [
        "Property Law",
        "Conveyancing",
        "Banking Law",
        "Securities Law",
        "Business Law",
        "Commercial Law",
        "Company Secretarial Services",
        "Litigation",
        "Arbitration",
        "Probate Administration"
    ]
};

export const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Kimani Wambua & Company Advocates",
    "description": "Advocates, Commissioners for Oaths & Notary Public",
    "url": "https://kimaniwambuaadvocates.com",
    "telephone": "+254733877867",
    "email": "info@kimaniwambuaadvocates.com",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Mirage Plaza, 2nd Floor, Right wing, Bellevue, Mombasa Road",
        "addressLocality": "Nairobi",
        "postalCode": "00100",
        "addressCountry": "KE"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": "-1.3178",
        "longitude": "36.8489"
    },
    "openingHours": "Mo-Fr 08:30-17:30"
};
