window.onload = () => {
    // List of portfolio details to dynamically change the page
    const portfolioDetails = {
        1: {
            title: "Chaumet",
            paragraph: "Chaumet is a renowned luxury brand known for its exquisite jewelry and watches. With a rich heritage dating back to 1780, Chaumet offers a wide range of meticulously crafted pieces that embody elegance, sophistication, and timeless beauty. From dazzling diamond rings to stunning tiaras and high-end timepieces, Chaumet caters to individuals who appreciate the finest craftsmanship and exquisite design.",
        },
        2: {
            title: "UAE-Pavilion",
            paragraph: "The UAE Pavilion at Expo 2020 is a magnificent showcase of the United Arab Emirates' rich culture, innovation, and aspirations. It offers a captivating journey through immersive exhibits, interactive displays, and captivating storytelling, highlighting the nation's achievements, heritage, and vision for the future. From awe-inspiring architecture to thought-provoking exhibits, the UAE Pavilion at Expo 2020 provides visitors with a unique opportunity to explore the UAE's contributions to various sectors and experience the essence of Emirati hospitality.",
        },
        3: {
            title: "Hisense",
            paragraph: "Hisense is a leading global electronics brand that offers a wide range of cutting-edge consumer electronics and home appliances. Known for their innovative technology and high-quality products, Hisense provides televisions, refrigerators, air conditioners, washing machines, and more. With a focus on delivering superior performance, energy efficiency, and user-friendly features, Hisense caters to the needs of modern households and ensures an enhanced entertainment and living experience.",
        },
        4: {
            title: "Al-Ain",
            paragraph: "Al Ain Water is a well-established brand recognized for its premium bottled water products. Sourced from natural springs in the United Arab Emirates, Al Ain Water undergoes rigorous purification processes to ensure exceptional purity and taste. With a commitment to quality and sustainability, Al Ain Water offers a variety of bottled water options, including still and sparkling, catering to individuals who prioritize hydration and seek a refreshing and reliable water brand.",
        },
        5: {
            title: "Hyundai",
            paragraph: "Hyundai is a leading automotive brand known for its reliable and innovative vehicles. With a diverse lineup of cars and SUVs, Hyundai offers practicality, performance, and value for a wide range of consumers. From fuel-efficient compact cars to spacious family SUVs and eco-friendly electric models, Hyundai combines cutting-edge technology, safety features, and stylish design to meet the needs and preferences of modern drivers.",
        },
        6: {
            title: "Lamborghini",
            paragraph: "Lamborghini is an iconic brand synonymous with luxury, performance, and prestige in the automotive industry. With their distinctive and striking designs, Lamborghini produces high-performance sports cars and supercars that deliver exhilarating driving experiences. From the powerful engines to the aerodynamic styling and exquisite craftsmanship, each Lamborghini vehicle represents the pinnacle of automotive engineering and captures the imagination of car enthusiasts worldwide.<br><br>Services provided: Strategy, Advertising, and Performance Marketing",
        },
        7: {
            title: "Roxy-Cinemas",
            paragraph: "Roxy Cinemas is a premium cinema chain that provides a luxurious movie-watching experience. With state-of-the-art theaters, comfortable seating, and cutting-edge audiovisual technology, Roxy Cinemas offers a perfect setting for film enthusiasts. Whether it's the latest Hollywood blockbusters or independent films, Roxy Cinemas presents a wide range of movies across different genres, accompanied by gourmet snacks and refreshments, ensuring an unforgettable cinematic experience.",
        },
        8: {
            title: "LG",
            paragraph: "LG is a globally renowned brand offering a wide range of consumer electronics and home appliances. From state-of-the-art televisions, smartphones, and audio systems to refrigerators, washing machines, air purifiers, and more, LG combines innovative technology, sleek design, and user-friendly features. With a focus on enhancing the everyday lives of consumers, LG products provide superior performance, connectivity, and convenience, elevating entertainment, productivity, and home living experiences.",
        },
        9: {
            title: "Genesis",
            paragraph: "Genesis is a luxury automotive brand renowned for its sophisticated design, performance, and craftsmanship. With a range of sedans, SUVs, and electric vehicles(EVs), Genesis combines elegance, comfort, and advanced technology to deliver an exceptional driving experience. From meticulously crafted interiors to powerful engines and innovative safety features, Genesis vehicles embody refined luxury and offer a seamless blend of style, performance, and innovation.",
        },
        10: {
            title: "Novo-Cinemas",
            paragraph: "Novo Cinemas is a leading cinema brand that offers immersive movie experiences. With modern theaters equipped with advanced audiovisual technology, comfortable seating, and a diverse selection of movies, Novo Cinemas creates an enchanting environment for film lovers. A mountain of movie selections and limitless fun is guaranteed at Novo Cienmas,  supreme cinematic experience that caters to a huge segment of the UAE population.",
        },
        11: {
            title: "Yash-Raj-Films",
            paragraph: "Yash Raj Films is one of India's most esteemed and influential film production companies. Known for producing high-quality Bollywood films, Yash Raj Films has a rich legacy of creating engaging and entertaining movies that have captivated audiences for decades. From blockbuster hits to critically acclaimed films, Yash Raj Films has contributed significantly to the Indian film industry and continues to be a prominent player in shaping the cinematic landscape.",
        },
        12: {
            title: "Balade",
            paragraph: "Balade is a brand that offers a range of authentic Mediterranean dairy products. With a focus on quality and tradition, Balade produces delicious and wholesome products such as labneh, feta cheese, and halloumi. Made from the finest ingredients and using traditional methods, Balade products capture the rich flavors and culinary heritage of the Mediterranean region, providing a delightful experience for cheese and dairy lovers.",
        },
        13: {
            title: "Jaeger-LeCoultre",
            paragraph: "Jaeger Le-Coultre, often abbreviated as JLC, is a prestigious Swiss watchmaker renowned for its exceptional craftsmanship and horological expertise. With a heritage dating back to 1833, JLC offers a wide range of luxury watches, including intricate complications, elegant dress watches, and timeless classics. Each timepiece reflects precision, artistry, and attention to detail, making Jaeger Le-Coultre a preferred choice for those seeking refined timekeeping instruments.",
        },
        14: {
            title: "MOTN",
            paragraph: "MOTN(Mother of the Nation Festival) is an exciting festival that celebrates UAE culture, authorized by the Department of Tourism and Culture. It offers a vibrant experience with a fusion of food experiences, media showcases, cinema screenings, thrilling amusements, and an overall festive atmosphere. MOTN invites visitors to immerse themselves in the rich traditions and delights of the UAE while enjoying a diverse range of activities and entertainment options.",
        },
        15: {
            title: "Frontrow-Films",
            paragraph: "Front Row is a prestigious filmed entertainment company that has established itself as a leader in the industry. With a focus on delivering high-quality content, Front Row brings audiences a diverse range of captivating films, television shows, and digital media experiences. Known for its commitment to excellence, Front Row collaborates with acclaimed filmmakers, talented actors, and visionary creators to produce compelling and thought-provoking entertainment. Whether through gripping dramas, exciting action films, or innovative storytelling, Front Row consistently strives to provide audiences with a premier cinematic experience that leaves a lasting impression.",
        },
        16: {
            title: "Aseel",
            paragraph: "Aseel is a well-known brand that specializes in high-quality Ghee, Butter, Cooking oils, and Extra-Virgin Olive. With a commitment to excellence and purity, Aseel has been leading as the flagship Ghee brand in the UAE for over 40 years, loved by many and distinguishes itself with unique butter and vegetable Ghee, pure butter and trusted quality that has stood the test of time. Aseel Ghee provides a delightful culinary experience and serves as a staple in households and restaurants, ensuring memorable meals for the best tasting high-quality ghee and cooking products ",
        },
        17: {
            title: "Yakult",
            paragraph: "Yakult is a globally recognized probiotic beverage brand that promotes digestive health and well-being. Packed with beneficial bacteria called Lactobacillus casei Shirota, Yakult offers a convenient and delicious way to support a healthy gut. With its distinctive small bottle packaging, Yakult contains live and active cultures that can aid digestion and maintain a balanced gut microbiota, making it a popular choice for individuals seeking to incorporate probiotics into their daily routine.",
        },
        18: {
            title: "Sombrero",
            paragraph: "Sombrero Tortilla offers a delectable range of Mexican tortillas that are ready to eat, providing a convenient and authentic taste of Mexico. Made with traditional recipes and high-quality ingredients, Sombrero Tortilla ensures an enjoyable culinary experience. These soft, flavorful tortillas are perfect for creating a variety of Mexican-inspired dishes, from classic tacos and quesadillas to mouthwatering enchiladas and burritos.Whether you're a seasoned chef or a busy individual seeking a delicious and convenient meal option, Sombrero Tortilla brings the taste of Mexico to your table, providing an easy and satisfying way to enjoy the authentic flavors of this beloved cuisine.",
        },
        19: {
            title: "Al-Ain-Foods",
            paragraph: "Al Ain Foods is a well-established food company that specializes in a wide range of quality food products. From fresh dairy products and juices to canned goods and frozen items, Al Ain Foods offers a diverse selection that caters to different culinary needs. With a commitment to taste, nutrition, and food safety, Al Ain Foods ensures that its products meet the highest standards of quality, providing wholesome and delicious options for consumers.",
        },
        20: {
            title: "Gorenje",
            paragraph: "Gorenje is a trusted brand specializing in innovative home appliances and kitchen solutions. With a commitment to quality and design, Gorenje offers a diverse range of products, including refrigerators, ovens, cooktops, dishwashers, and washing machines. Combining advanced technology, functional features, and stylish aesthetics, Gorenje appliances provide convenience, efficiency, and elegance for the contemporary home, making everyday tasks easier and more enjoyable.",
        },
        21: {
            title: "United-Foods",
            paragraph: "United Foods is a leading food manufacturing and distribution company that offers a wide range of consumer food products. With a focus on quality and innovation, United Foods produces a variety of food items, including sauces, snacks, spreads, and beverages. The company's diverse product portfolio caters to different tastes and cultures, highlighting some of the most nutritious, tasty food and beverages in the world .",
        },
        22: {
            title: "IBA",
            paragraph: "The International Boxing Association in Abu Dhabi 22 is an electrifying fighting event that showcases the strength and skills of the world's top boxers. This highly anticipated competition brings together elite fighters from around the globe to compete in a thrilling display of athleticism, strategy, and determination. Held in Abu Dhabi, this event offers spectators an unforgettable experience as they witness intense boxing matches featuring some of the most formidable fighters in the world. With a passionate audience and a pulsating atmosphere, the International Boxing Association in Abu Dhabi 22 is a must-see event for boxing enthusiasts and sports fans alike.",
        },
        23: {
            title: "Alpin",
            paragraph: "Alpin is a naturally-alkaline spring water brand that is well-known as one of the leading water brands in freshness, taste and healthy benefits. The story of Alpin begins amidst the rain and snow that graciously descend upon the untouched peaks of the majestic Taurus Mountains in Turkey, gracing the land year-round. These divine elements nourish a thriving network of humble streams, whose collective journey feeds an aquifer hidden deep beneath the earth's surface. As this water embarks on its unhurried passage through layers of time-worn rocks, it undergoes a natural purification process, all the while absorbing precious minerals and vital elements bestowed by nature itself.",
        }
    }

    // Retrieve Existing document elements
    let pageId = document.querySelector("meta[portfId]").getAttribute("portfId");
    let dedicatedPortfolioContent = document.querySelector("#dedicated-portfolio-content");

    // Write page content
    dedicatedPortfolioContent.innerHTML = `
        <div class="title__wrap">
            <h1 class="title">${portfolioDetails[pageId].title.replaceAll("-", " ")}</h1>
            <img src="https://d3i7ke5fj3tp7c.cloudfront.net/images/particle.svg" alt="particle" height="8px"
                class="ms-1" />
            <div class="subtitle__wrap">
                <hr style="width: 12%" />
            </div>
        </div>
    
        <p>${portfolioDetails[pageId].paragraph}</p>
    
        <div id="hero-video-wrapper">
            <video id="hero-video" autoplay loop muted playsinline
                src="https://d3i7ke5fj3tp7c.cloudfront.net/images/portfolio_dedicated_pages/${portfolioDetails[pageId].title}_Header_Video.mp4"
                type="video/mp4" ondblclick="goFullScreen('hero-video')"></video>
        </div>
    
        <div id="artworks">
            <img draggable="false" class="previews"
                src="https://d3i7ke5fj3tp7c.cloudfront.net/images/portfolio_dedicated_pages/${portfolioDetails[pageId].title}_Image_001.jpg"
                alt="" height="400" width="400">
            <img draggable="false" class="previews"
                src="https://d3i7ke5fj3tp7c.cloudfront.net/images/portfolio_dedicated_pages/${portfolioDetails[pageId].title}_Image_002.jpg"
                alt="" height="400" width="400">
            <img draggable="false" class="previews"
                src="https://d3i7ke5fj3tp7c.cloudfront.net/images/portfolio_dedicated_pages/${portfolioDetails[pageId].title}_Image_003.jpg"
                alt="" height="400" width="400">
            <img draggable="false" class="previews"
                src="https://d3i7ke5fj3tp7c.cloudfront.net/images/portfolio_dedicated_pages/${portfolioDetails[pageId].title}_Image_004.jpg"
                alt="" height="400" width="400">
            <img draggable="false" class="previews"
                src="https://d3i7ke5fj3tp7c.cloudfront.net/images/portfolio_dedicated_pages/${portfolioDetails[pageId].title}_Image_005.jpg"
                alt="" height="400" width="400">
                <div id="showcase">
                <img draggable="false" id="test" width="1400" height="1866" src="#" alt="">
                </div>
                </div>
                `

    //Retrieve dynamically written document elements
    let artworks = document.querySelector("#artworks");
    let previews = document.querySelectorAll(".previews");
    let showcase = document.querySelector("#showcase>img");

    // Add Click function to preview images
    previews.forEach(preview => {
        preview.addEventListener("mouseenter", function () {
            preview.scrollIntoView(true)
            showcase.src = preview.src;
            showcase.style.maxHeight = "5000px";
        })
    });
    artworks.addEventListener("mouseleave", function () {
        showcase.style.maxHeight = "0px";
    })
}

