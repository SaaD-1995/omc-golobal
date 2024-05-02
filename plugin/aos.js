import AOS from 'aos';
import 'aos/dist/aos.css';
export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    AOS.init();
  }
});
// export default ({ app }) => {
//   app.AOS = new AOS.init({ 
//     offset: 120, 
//     delay: 0, 
//     duration: 400, 
//     easing: 'ease', 
//     once: false, 
//     mirror: false, 
//     anchorPlacement: 'top-bottom',
//   });
// };
// import 'aos/dist/aos.css';
// import AOS from 'aos';

// export default ({ app }) => {
//   app.AOS = new AOS.init({
//     offset: 100, 
//     duration: 800,
//     easing: 'ease-in-out', 
//     once: true, 
//   });
// };

