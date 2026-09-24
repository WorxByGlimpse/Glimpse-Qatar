const footer = document.getElementById("footer");

footer.innerHTML = `
<script> </script>
<footer class="text-center text-lg-start mx-auto">
  <div class="footer-socials">
    <a target="_blank" href="https://www.instagram.com/theglimpseproject/" class="text-white mx-2">
      <i class="fab fa-instagram fa-lg"></i>
    </a>
    <a target="_blank" href="https://www.facebook.com/TheGlimpseProject/" class="text-white mx-2">
      <i class="fab fa-facebook-f fa-lg"></i>
    </a>
    <a target="_blank" href="https://twitter.com/glimpseproject/" class="text-white mx-2">
      <i class="fab fa-twitter fa-lg"></i>
    </a>
    <a target="_blank" href="https://www.linkedin.com/company/glimpse-digital-agency" class="text-white mx-2">
      <i class="fab fa-linkedin-in fa-lg"></i>
    </a>
    <!--<a target="_blank" href="https://www.tiktok.com/@theglimpseproject/" class="text-white mx-2">
      <i class="fab fa-tiktok fa-lg"></i>-->
    </a>
  </div>
  <!-- Grid row -->
  <div class="footer-links__grid">
    <!-- Grid column -->
    <div>
      <!-- Links -->
      <h6 class="fw-bold mb-4 gradient-text-small">Locations</h6>
      <!-- TODO(Qatar): no phone number yet. Add it here, in the Get in touch box, the floating buttons and the schema. -->
      <div class="loc-col-item">
        <a href="#!" class="text-decoration-none text-white">Qatar</a>
        <p class="sub-location"><a href="https://www.google.com/maps/search/?api=1&query=Tornado+Tower%2C+West+Bay%2C+Doha%2C+Qatar" target="_blank" rel="noopener" title="Address">C/O Media City Qatar, Floor No. 16, Tornado Tower, No. 17, Doha, Qatar</a><br>Sunday to Thursday, 9:00 to 18:00</p>
      </div>
      <div class="loc-col-item">
        <a href="https://www.theglimpseproject.com/" target="_blank" class="text-decoration-none text-white">United Arab Emirates</a>
        <p class="sub-location"><a href="https://maps.app.goo.gl/hZLFWbi8gXT11pNn6" target="_blank" title="Address">Office 709 Publishing Pavilion, Dubai Production City, Dubai, UAE</a></p>
      </div>
      <div class="loc-col-item">
        <a href="#!" class="text-decoration-none text-white">Saudi Arabia</a>
        <p class="sub-location">3784 street no 288 Alyasmin, Riyadh PO Box 13325 Riyadh, KSA</p>
      </div>
      <div class="loc-col-item">
        <a href="#!" class="text-decoration-none text-white">France</a>
        <p class="sub-location">Avenue de Maine, France<br><a href="tel:+33647951108">+33 6 47 95 11 08</a></p>
      </div>
      <div class="loc-col-item">
        <a href="#!" class="text-decoration-none text-white">Lebanon</a>
        <p class="sub-location">Yaaccoub Building, 1st Floor Luis Abu Charaf Street Achrafieh Beirut, Lebanon</p>
      </div>
    </div>
    <!-- Grid column -->
    <!-- Grid column -->
    <div class="services">
      <!-- Links -->
      <h6 class="fw-bold mb-4 gradient-text-small">Services</h6>
      <p>
        <a href="/pages/services/digital-strategy" class="text-decoration-none text-white">Digital Strategy</a>
      </p>
      <p>
        <a href="/pages/services/advertising" class="text-decoration-none text-white">Advertising</a>
      </p>
      <p>
        <a href="#" class="text-decoration-none text-white">Website Design<br>& Development</a>
      </p>
      <p>
        <a href="/pages/services/branding" class="text-decoration-none text-white">Brand Awareness</a>
      </p>
      <p>
        <a href="/pages/services/social-media" class="text-decoration-none text-white">Content Creation</a>
      </p>
    </div>
    <!-- Grid column -->
    <!-- Grid column -->
    <div class="">
      <!-- Links -->
      <h6 class="fw-bold mb-4 gradient-text-small">Explore</h6>
      <p>
        <a href="/services" class="text-decoration-none text-white">Services</a>
      </p>
      <p>
        <a href="/awards" class="text-decoration-none text-white">Awards</a>
      </p>
      <p>
        <a href="/portfolio" class="text-decoration-none text-white">Portfolio</a>
      </p>
      <p>
        <a href="/clients" class="text-decoration-none text-white">Clients</a>
      </p>
      <p>
        <a href="/blog" class="text-decoration-none text-white">Blog</a>
      </p>
      <p>
        <a href="/contactus" class="text-decoration-none text-white">Contact Us</a>
      </p>
    </div>
    <!-- Grid column -->
    <!-- Grid column -->
    <div class="">
      <!-- Links -->
      <h6 class="fw-bold mb-4 gradient-text-small">Industries</h6>
      <p>
        <a href="/pages/industries/government" class="text-decoration-none text-white">Government</a>
      </p>
      <p>
        <a href="/pages/industries/sports-and-events" class="text-decoration-none text-white">Sports & Events</a>
      </p>
      <p>
        <a href="/pages/industries/real-estate" class="text-decoration-none text-white">Real Estate</a>
      </p>
      <p>
        <a href="/pages/industries/hospitality-and-tourism" class="text-decoration-none text-white">Hospitality & Tourism</a>
      </p>
      <p>
        <a href="/pages/industries/banking-and-finance" class="text-decoration-none text-white">Banking & Finance</a>
      </p>
      <p>
        <a href="/pages/industries/luxury-and-fashion" class="text-decoration-none text-white">Luxury & Fashion</a>
      </p>
    </div>
    <!-- Grid column -->
    <!-- Grid column -->
    <div class="">
      <!-- Links -->
      <h6 class="fw-bold mb-4 gradient-text-small">Support</h6>
      <p>
        <a href="/faq" class="text-decoration-none text-white">Faq</a>
      </p>
      <p>
        <a href="/contactus" class="text-decoration-none text-white">Contact Us</a>
      </p>
      <p>
        <a href="/careers" class="text-decoration-none text-white">Careers</a>
      </p>
      <p>
        <a href="/privacy-policy" class="text-decoration-none text-white">Privacy Policy</a>
      </p>
      <p>
        <a href="/terms-of-use" class="text-decoration-none text-white">Terms of Use</a>
      </p>
      <p>
        <a href="https://www.worxbyglimpse.com/" target="_blank" class="text-decoration-none text-white">Worx By Glimpse</a>
      </p>
    </div>
    <!-- Grid column -->

  </div>
  <!-- Grid row -->
  <div class="footer-bottom-wrap">
    <div class="footer__input-wrapper">
      <h4 class="gradient-text-small fw-bold text-nowrap">Stay in touch:</h4>
      <div class="footer__gradient-box__input-rev rounded input-group d-flex align-items-center justify-content-evenly">
        <a href="https://chat.whatsapp.com/B5wXiR1rAJEHMDoXJMnyTs" class="btn text-white px-4">Join Now</a>
        <hr />
        <p>SM News by Myndful Social</p>
      </div>
    </div>
    <img width="19" height="20" src="https://d3i7ke5fj3tp7c.cloudfront.net/images/footer/divider.svg" class="divider"
      alt="divider" />
    <div class="footer__input-wrapper">
      <h4 class="gradient-text-small-rev fw-bold text-end">Get in touch:</h4>
      <div class="footer__gradient-box__input-rev rounded input-group d-flex align-items-center justify-content-evenly">
        <a href="mailto:hello@theglimpseproject.com" target="_blank">
          hello@theglimpseproject.com
        </a>
      </div>
    </div>
  </div>
  <div class="d-flex flex-column flex-md-row justify-content-between align-items-center mt-5 gap-4 px-4 text-white" style="font-size: 0.8rem">
    <p>All rights reserved 2026 © Glimpse Media LLC</p>
    <p class="qfc-licence">Licensed by the Qatar Financial Centre Authority · QFC No. 05559</p>
    <p><a href="https://www.google.com/maps/search/?api=1&query=Tornado+Tower%2C+West+Bay%2C+Doha%2C+Qatar" target="_blank" rel="noopener" class="text-white">C/O Media City Qatar, Floor No. 16, Tornado Tower, No. 17, Doha, Qatar.</a></p>
  </div>
</footer>
    `;

// Adding extra floating buttons
// TODO(Qatar): the floating WhatsApp and call buttons were removed until a Qatar number exists.

// CHATWOOT
function createContactButtons() {
  var BASE_URL = "https://app.chatwoot.com";
  var onPageScriptEl = document.getElementsByTagName("script")[0];
  //Create script tag
  var scriptElement = document.createElement("script");
  scriptElement.src = BASE_URL + "/packs/js/sdk.js";
  scriptElement.defer = true;
  scriptElement.async = false;
  //Place script tag with other scripts
  onPageScriptEl.parentNode.insertBefore(scriptElement, onPageScriptEl);
  //Connect chatwoot
  scriptElement.onload = function () {
    window.chatwootSDK.run({
      websiteToken: 'HcF3HQKWcxGTtNbvf9XBRyrn',
      baseUrl: BASE_URL
    })
    //Wait for chatwoot to load
    window.addEventListener("chatwoot:ready", function () {
      //Fly In for all buttons
      var chatBtn = document.querySelector(".woot--bubble-holder .woot-widget-bubble");
      if (chatBtn) chatBtn.style.display = "block";
    })
  }
};
createContactButtons();

var extraBadges = document.createElement("div");
extraBadges.setAttribute("id", "extra-badges");
extraBadges.innerHTML = `
<div id="offset-badge">
  <a href="https://offset.org/certificate/698F0F02/" target="_blank">
    <img src="https://static.offset.org/static/images/badges/en/vertical-black.svg" alt="badge" style="max-width: 180px !important; height: auto !important;"/>
  </a>
</div>
`;
document.getElementsByTagName("body")[0].appendChild(extraBadges);
