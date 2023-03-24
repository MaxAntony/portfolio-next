import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { MainLayout } from 'components/layouts/MainLayout';
import { useEffect } from 'react';
import { GoogleAnalytics } from 'nextjs-google-analytics';
import { DefaultSeo } from 'next-seo';

function MyApp({ Component, pageProps }: AppProps) {
  // This hook only run once in browser after the component is rendered for the first time.
  // It has same effect as the old componentDidMount lifecycle callback.
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator && window.workbox !== undefined) {
      const wb = window.workbox;
      // add event listeners to handle any of PWA lifecycle event
      // https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-window.Workbox#events
      wb.addEventListener('installed', (event) => {
        console.log(`Event ${event.type} is triggered.`);
        console.log(event);
      });

      wb.addEventListener('controlling', (event) => {
        console.log(`Event ${event.type} is triggered.`);
        console.log(event);
      });

      wb.addEventListener('activated', (event) => {
        console.log(`Event ${event.type} is triggered.`);
        console.log(event);
      });

      // A common UX pattern for progressive web apps is to show a banner when a service worker has updated and waiting to install.
      // NOTE: MUST set skipWaiting to false in next.config.js pwa object
      // https://developers.google.com/web/tools/workbox/guides/advanced-recipes#offer_a_page_reload_for_users
      const promptNewVersionAvailable = (_: any) => {
        // `event.wasWaitingBeforeRegister` will be false if this is the first time the updated service worker is waiting.
        // When `event.wasWaitingBeforeRegister` is true, a previously updated service worker is still waiting.
        // You may want to customize the UI prompt accordingly.
        if (confirm('Una nueva version de la aplicacion esta disponible, recarga para actualizar')) {
          wb.addEventListener('controlling', (_) => {
            window.location.reload();
          });

          // Send a message to the waiting service worker, instructing it to activate.
          wb.messageSkipWaiting();
        } else {
          console.log(
            'User rejected to reload the web app, keep using old version. New version will be automatically load when user open the app next time.'
          );
        }
      };

      wb.addEventListener('waiting', promptNewVersionAvailable);

      // ISSUE - this is not working as expected, why?
      // I could only make message event listenser work when I manually add this listenser into sw.js file
      wb.addEventListener('message', (event) => {
        console.log(`Event ${event.type} is triggered.`);
        console.log(event);
      });

      /*
      wb.addEventListener('redundant', event => {
        console.log(`Event ${event.type} is triggered.`)
        console.log(event)
      })
      wb.addEventListener('externalinstalled', event => {
        console.log(`Event ${event.type} is triggered.`)
        console.log(event)
      })
      wb.addEventListener('externalactivated', event => {
        console.log(`Event ${event.type} is triggered.`)
        console.log(event)
      })
      */

      // never forget to call register as auto register is turned off in next.config.js
      wb.register();
    }
  }, []);
  return (
    <>
      <DefaultSeo
        description='Pagina personal de Max Antony | Desarrollador de software'
        title='Max Antony | Desarrollador de soluciones informaticas'
        themeColor='#000000'
        additionalMetaTags={[
          {
            name: 'application-name',
            content: 'Max Antony',
          },
          {
            name: 'author',
            content: 'Max Antony Paucar Ramirez',
          },
          {
            name: 'keywords',
            content: 'Max Antony, Paucar Ramirez, Huancayo, Junin, Peru, Programacion, Desarrollador, Sistemas, Paginas web, Marketing',
          },
          {
            name: 'format-detection',
            content: 'telephone=no',
          },
          {
            name: 'mobile-web-app-capable',
            content: 'yes',
          },
          {
            name: 'viewport',
            content: 'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover',
          },
        ]}
        additionalLinkTags={[
          {
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            rel: '/shortcut icon',
            href: '/favicon.ico',
          },
          {
            rel: 'icon',
            type: 'image/jpg',
            sizes: '192x192',
            href: '/icons/manifest-icon-192.jpg',
          },
          {
            rel: 'icon',
            type: 'image/jpg',
            sizes: '512x512',
            href: '/icons/manifest-icon-512.jpg',
          },
        ]}
        openGraph={{
          type: 'website',
          title: 'Max Antony',
          description: 'Desarrollador de soluciones web',
          siteName: 'Max Antony',
          url: 'https://maxantony.com',
          images: [{ url: 'https://maxantony.com/icons/manifest-icon-512.jpg' }],
        }}
      />
      <GoogleAnalytics trackPageViews />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default MyApp;
