import "./globals.css";
import { NextAuthProvider } from "./components/SessionProvider";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Moklet IT Fest 2023",
    template: "%s | Moklet IT Fest 2023",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/icon/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/icon/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/icon/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/icon/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/icon/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/icon/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/icon/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/icon/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icon/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/icon/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/icon/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icon/favicon-16x16.png"
        />
        <link rel="manifest" href="/icon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <script
          src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js"
          defer
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.OneSignalDeferred = window.OneSignalDeferred || [];
              OneSignalDeferred.push(function(OneSignal) {
                OneSignal.init({
                  appId: "ac0d3be0-6c4b-42cc-b821-7b2d90e8a078",
                  safari_web_id: "web.onesignal.auto.54eebb47-16d1-4f2f-8c9e-9bb7522bb051",
                  colors: { 
                    'circle.background': '#b10f00',
                    'circle.foreground': 'white',
                    'badge.background': '#b10f00',
                    'badge.foreground': 'white',
                    'badge.bordercolor': 'white',
                    'pulse.color': 'white',
                    'dialog.button.background.hovering': '#650800',
                    'dialog.button.background.active': '#650800',
                    'dialog.button.background': '#b10f00',
                    'dialog.button.foreground': 'white'
                  },
                  notifyButton: {
                    enable: true,
                    displayPredicate: function() {
                      return OneSignal.isPushNotificationsEnabled()
                          .then(function(isPushEnabled) {
                              return !isPushEnabled;
                          });
                    },
                  },
                });
              });`,
          }}
        ></script>
      </head>
      <body
        className={"max-w-screen-2xl overflow-x-hidden " + raleway.className}
      >
        <NextAuthProvider>
          <ToastContainer />
          <NextTopLoader color="#b52930" />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
