import '../styles/globals.css';
// import 'tailwindcss/tailwind.css';
import 'nprogress/nprogress.css';
import NProgress from 'nprogress';
import Router from 'next/router';
import Nav from '../components/nav';

// NProgress.configure({
//   minimum: 0.1,
//   easing: 'ease-in-out',
//   trickle: false,
//   trickleSpeed: 200,
//   speed: 500,
//   showSpinner: true,
// });

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Nav />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
