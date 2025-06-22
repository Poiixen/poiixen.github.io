import { Html, Head, Main, NextScript } from 'next/document';
import { JetBrains_Mono } from 'next/font/google';

// Applying the font globally
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetbrains-mono', // CSS variable for the font
});

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="My Portfolio" />
        <meta name="author" content="Jorge Garcia" />
        <title>Jorge Garcia</title>
        {/* You can add additional meta tags here */}
      </Head>
      <body className={jetbrainsMono.variable}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
