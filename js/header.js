const header = document.getElementById("header");

header.outerHTML = `
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>

<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>


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
<!-- TODO(Qatar): telephone, streetAddress, postalCode, geo and hasMap are placeholders. See QATAR-LAUNCH-CHECKLIST.md -->
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
    "logo": "https://www.theglimpseproject.qa/static/images/favicon.png",
    "image": "https://www.theglimpseproject.qa/static/images/favicon.png",
    "telephone": "+97400000000",
    "email": "hello@theglimpseproject.com",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "[QATAR OFFICE ADDRESS]",
        "addressLocality": "Doha",
        "addressRegion": "Doha",
        "addressCountry": "QA"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": 25.2854,
        "longitude": 51.5310
    },
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
