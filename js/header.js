const header = document.getElementById("header");

header.outerHTML = `
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-M6KSJH8LWL"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-M6KSJH8LWL');
</script>

<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W8X6X6C');</script>


<!-- Website Schema -->
<script type="application/ld+json"> {
    "@context" : "https://schema.org",
    "@type" : "WebSite",
    "name" : "The Glimpse Project",
    "url" : "https://www.theglimpseproject.com/"
    }
</script>

<!-- Review Schema -->
<script type="application/ld+json"> {
    "@context": "https://schema.org/",
    "@type": "CreativeWorkSeries",
    "name": "Glimpse Digital Agency",
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "bestRating": "5",
        "ratingCount": "26"
        }
    }
</script>

<!-- Professional Schema -->
<script type="application/ld+json"> {
    "@context": "http://schema.org",
    "@type": ["ProfessionalService", "Organization"],
    "name": "Glimpse Digital Agency",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ooIYEzF99wZxYsqdcY9sz-FlzAN9Y4iRlw&s",
    "@id": "/g/11f12705qy",
    "url": "https://www.theglimpseproject.com/",
    "telephone": "+97145655290",
    "address": [
        {
            "@type": "PostalAddress",
            "streetAddress": "Office 709 Publishing Pavilion, Dubai Production City",
            "addressLocality": "Dubai",
            "addressRegion": "Dubai",
            "postalCode": "00000",
            "addressCountry": "AE",
            "serviceArea": ["Dubai"]
        },
        {
            "@type": "PostalAddress",
            "streetAddress": "3784 street no 288 Alyasmin",
            "addressLocality": "Riyadh",
            "addressRegion": "KSA",
            "postalCode": "13325",
            "addressCountry": "SA",
            "serviceArea": ["Riyadh"]
        },
        {
            "@type": "PostalAddress",
            "streetAddress": "Avenue de Maine",
            "addressLocality": "Paris",
            "addressRegion": "France",
            "postalCode": "75014",
            "addressCountry": "FR",
            "serviceArea": ["France"]
        },
        {
            "@type": "PostalAddress",
            "streetAddress": "Yaaccoub Building, 1st Floor Luis Abu Charaf Street Achrafieh",
            "addressLocality": "Beirut",
            "addressRegion": "Lebanon",
            "postalCode": "112091",
            "addressCountry": "LB",
            "serviceArea": ["Beirut"]
        }],
    "priceRange": "Affordable",
    "hasMap": "https://maps.app.goo.gl/XbspQhLBCAy5aNBUA",
    "geo": [
        {
            "@type": "GeoCoordinates",
            "latitude": 25.0367204,
            "longitude": -55.1908277,
            "address": "Office 709 Publishing Pavilion, Dubai Production City"
        },
        {
            "@type": "GeoCoordinates",
            "latitude": 24.828640,
            "longitude": -46.631851,
            "address": "3784 street no 288 Alyasmin, Riyadh"
        },
        {
            "@type": "GeoCoordinates",
            "latitude": 48.832750,
            "longitude": 2.324780,
            "address": "Avenue de Maine, Paris"
        },
        {
            "@type": "GeoCoordinates",
            "latitude": 33.885000,
            "longitude": 35.521820,
            "address": "Yaaccoub Building, 1st Floor Luis Abu Charaf Street, Achrafieh, Beirut"
        }],
    "openingHoursSpecification": [
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Monday",
            "opens": "09:30",
            "closes": "18:00"
        },
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Tuesday",
            "opens": "09:30",
            "closes": "18:00"
        },
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Wednesday",
            "opens": "09:30",
            "closes": "18:00"
        },
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Thursday",
            "opens": "09:30",
            "closes": "18:00"
        },
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Friday",
            "opens": "09:30",
            "closes": "14:00"
        }],
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
