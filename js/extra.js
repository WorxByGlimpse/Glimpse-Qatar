// // Create warning banner
// const bannerWrapper = document.querySelector("#banner-wrapper");
// bannerWrapper.innerHTML = `
//     <!-- Functionality Script at bottom -->
//     <div id="warning-banner" 
//         style="
//             display: block;
//             position: relative;
//             top: 0;
//             background-color: yellow;
//             padding: 15px 40px;
//             color: red;
//             text-align: center;
//             margin-top: -100%;
//             transition: margin 1s;">
//         <button id="banner-button" 
//         style="
//             position: absolute;
//             top: 10px;
//             right: 20px;
//             background: none;
//             color: red;
//             font-size: 20px;">X</button>
//         <span style="display: block; text-align: center; font-size: 30px; font-family: Cera Pro Bold;">
//             <img src="/static/images/Scam.png" style="width: 30px; position: relative; top: -5px; left: -10px;" alt="alert">
//             SCAM ALERT: WE ARE NOT RECRUITING
//         </span>
//         Recently we have been getting an influx of people reporting scammers over LinkedIn and Whatsapp. These scammers seem to be impersonating Employees of Glimpse
//         <br>and promising work from home jobs. Please be Vigilant! Report & Block these numbers so they get banned from the platforms.
//     </div>
// `

// // Show banner after 1s
// setTimeout(() => {
//     document.getElementById("warning-banner").style.marginTop = 0;
// }, 1000)

// // Setup close banner functionality
// document.getElementById('banner-button').onclick = () => {
//     document.getElementById('warning-banner').style.marginTop = '-100%';
// }
