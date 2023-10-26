let prom = await fetch("https://moxie.foxnews.com/google-publisher/latest.xml");
let text = await prom.text();

console.log(text.substring(0, 100));

document.addEventListener("DOMContentLoaded", async function () {
  const datefunc = document.getElementById("date");

  function newdate() {
    var d = new Date();
    return d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear();
  }
  datefunc.innerText = newdate();

  window.addEventListener("load", function setBackground() {
    document.body.style.backgroundImage = "imagesRecent gym pics (1).jpg";
  });

  //   var cookie = document.getElementById("cookie");

  //   //when the user clicks outside the cookie window it closes it
  //   window.onclick = function (event) {
  //     if (event.target == cookiePopup) {
  //       cookie.style.display = none;
  //     }
  //   };

  //   window.addEventListener("load", function () {
  //     setTimeout(function open(event) {
  //       document.querySelector("cookiepopup").style.display = block;
  //     }, 1000);
  //   });
  // });
  // document.body.style.height = "200pt";

  let prom = await fetch(
    "https://moxie.foxnews.com/google-publisher/latest.xml"
  );
  let text = await prom.text();

  console.log(text.substring(0, 100));
});

// var script = document.createElement('script');
// script.type = 'text/javascript';
// script.src = 'https://cdnjs.cloudflare.com/ajax/libs/cookie-banner/1.2.2/cookiebanner.min.js';
// script.id = 'cookiebanner';
// script.setAttribute[height=20]; // non-standard attribute (may need to use 'setAttribute(..)'
// script['data-position'] = 'top';
// script['data-message']  = 'We use cookies!';
// document.head.appendChild(script);

// script.onload = function () {
//   console.log("loaded script");

//   // console.log( initCookieConsent );
// };
// console.log("ready");
