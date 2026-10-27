// ANALYTICS: GTM and GA4 snippets removed until the Qatar IDs are supplied. See QATAR-LAUNCH-CHECKLIST.md 
const header = document.getElementById("header");

header.outerHTML = `

<!-- Website Schema -->
<script type="application/ld+json"> {
    "@context" : "https://schema.org",
    "@type" : "WebSite",
    "@id" : "https://www.theglimpseproject.qa/#website",
    "name" : "Glimpse Qatar",
    "alternateName" : "Glimpse Digital Agency Qatar",
    "url" : "https://www.theglimpseproject.qa/",
    "inLanguage" : "en",
    "publisher" : { "@id" : "https://www.theglimpseproject.qa/#organization" }
    }
</script>

<!-- Professional Schema -->
<!-- TODO(Qatar): telephone is still a placeholder. See QATAR-LAUNCH-CHECKLIST.md -->
<script type="application/ld+json"> {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "Organization"],
    "@id": "https://www.theglimpseproject.qa/#organization",
    "name": "Glimpse Digital Agency Qatar",
    "legalName": "Glimpse Media LLC",
    "alternateName": "Glimpse Qatar",
    "identifier": {
        "@type": "PropertyValue",
        "propertyID": "QFC Number",
        "value": "05559"
    },
    "description": "Digital marketing agency in Doha, Qatar. SEO, social media, paid media, branding, content production and AR.",
    "url": "https://www.theglimpseproject.qa/",
    "telephone": "+97441477032",
    "logo": "https://www.theglimpseproject.qa/static/images/favicon.png",
    "image": "https://www.theglimpseproject.qa/static/images/favicon.png",
    "email": "hello@theglimpseproject.com",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Unit 76, Level 21, Burj Doha, WestBay",
        "addressLocality": "Doha",
        "addressRegion": "Doha",
        "addressCountry": "QA"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": 25.32078,
        "longitude": 51.53047
    },
    "hasMap": "https://www.google.com/maps/search/?api=1&query=Burj+Doha%2C+West+Bay%2C+Doha%2C+Qatar",
    "areaServed": [
        { "@type": "Country", "name": "Qatar" },
        { "@type": "City", "name": "Doha" },
        { "@type": "City", "name": "Lusail" },
        { "@type": "City", "name": "Al Rayyan" },
        { "@type": "City", "name": "Al Wakrah" }
    ],
    "parentOrganization": {
        "@type": "Organization",
        "name": "Glimpse Digital Agency",
        "url": "https://www.theglimpseproject.com/"
    },
    "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "09:00",
        "closes": "18:00"
    },
    "award": "MENA Agency of the Year 2022-2023",
    "sameAs": [
        "https://www.facebook.com/TheGlimpseProject",
        "https://www.linkedin.com/company/glimpse-digital-agency/",
        "https://x.com/glimpseproject",
        "https://www.instagram.com/theglimpseproject",
        "https://www.tiktok.com/@theglimpseproject"
    ]
}
</script>
`;
