import LoadingScreen from '@/components/layout/LoadingScreen';
import WebVitals from '@/components/layout/WebVitals';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
  preload: true
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
  preload: true
});

export const metadata = {
  metadataBase: new URL('https://www.seasides.net'),
  title: {
    default: "Seasides - India's Most Loved FREE Cybersecurity Conference",
    template: '%s | Seasides 2026'
  },
  description:
    "Join India's premier FREE cybersecurity conference. 3 days of learning, workshops, networking & community at International Centre Goa. Feb 19-21, 2026.",
  keywords: [
    'cybersecurity conference',
    'free conference India',
    'cybersecurity workshops',
    'Goa tech event',
    'security training',
    'ethical hacking',
    'cybersecurity community',
    'tech conference 2026',
    'Seasides Goa',
    'Nullcon',
    'InfoSec'
  ],
  authors: [{ name: 'Seasides Team' }],
  creator: 'Seasides Social Welfare Foundation',
  publisher: 'Seasides',
  category: 'Technology',
  classification: 'Conference',

  // OpenGraph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.seasides.net',
    siteName: 'Seasides 2026',
    title: "Seasides - India's Most Loved FREE Cybersecurity Conference",
    description:
      "Join India's premier FREE cybersecurity conference. 3 days of learning, workshops, networking & community at International Centre Goa. Feb 19-21, 2026.",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Seasides 2026 Cybersecurity Conference'
      }
    ]
  },

  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: "Seasides - India's Most Loved FREE Cybersecurity Conference",
    description:
      "Join India's premier FREE cybersecurity conference. 3 days of learning, workshops, networking & community.",
    images: ['/twitter-image.jpg'],
    creator: '@SeasidesInfo',
    site: '@SeasidesInfo'
  },

  // Icons
  icons: {
    icon: [
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon.ico' }
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [
      {
        rel: 'mask-icon',
        url: '/favicon/safari-pinned-tab.svg',
        color: '#0066cc'
      }
    ]
  },

  manifest: '/favicon/site.webmanifest',

  // Additional metadata
  alternates: {
    canonical: 'https://www.seasides.net'
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },

  verification: {
    // Add your verification codes here
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },

  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'format-detection': 'telephone=no'
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0066cc'
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Seasides',
    url: 'https://www.seasides.net',
    logo: 'https://www.seasides.net/logo.png',
    sameAs: [
      'https://twitter.com/SeasidesInfo',
      'https://www.linkedin.com/company/seasides-info/',
      'https://www.instagram.com/seasides_info/',
      'https://www.youtube.com/@SeasidesInfo'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'info@seasides.net'
    },
    event: {
      '@type': 'Event',
      name: 'Seasides 2026',
      startDate: '2026-02-19',
      endDate: '2026-02-21',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      eventStatus: 'https://schema.org/EventScheduled',
      location: {
        '@type': 'Place',
        name: 'International Centre Goa',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Goa',
          addressCountry: 'IN'
        }
      },
      description: "India's Most Loved FREE Cybersecurity Conference",
      organizer: {
        '@type': 'Organization',
        name: 'Seasides Social Welfare Foundation',
        url: 'https://www.seasides.net'
      }
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased transition-colors duration-300`}>
        <ThemeProvider>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
          <LoadingScreen />
          <WebVitals />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
