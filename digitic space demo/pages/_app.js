// import '../styles/globals.css'

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp

import '/styles/globals.css';
import './../styles/home.css';
import './../styles/jonasNavigation.css';
import './../styles/button.css';
import './../styles/features.css';
import './../styles/aboutUs.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './../styles/pricing.css';

import { ThemeProvider } from '@material-tailwind/react';
import Features from '../components/Features';

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
