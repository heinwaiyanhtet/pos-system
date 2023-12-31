import type { AppProps } from 'next/app'
import '../src/app/globals.css'
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";


export default function App({ Component , pageProps } : AppProps) {
  return (
      <PrimeReactProvider>
          <Component {...pageProps} />
      </PrimeReactProvider>
  );
}
 