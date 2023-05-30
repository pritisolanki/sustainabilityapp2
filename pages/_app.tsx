import '../styles/globals.css'
import { AppProps } from 'next/app'
import RootLayout from './layout'
import KontentSmartLink from "@kontent-ai/smart-link";
import { useEffect } from 'react';

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(()=>{
    const kontentSmartLink = KontentSmartLink.initialize({
      defaultDataAttributes: {
        projectId: process.env.NEXT_PUBLIC_KONTENT_PROJECT_ID,
        languageCodename: "default",
      },
      queryParam: "preview-mode"
    });
        return () => {
      kontentSmartLink.destroy();
    };
  })
  return (
    <RootLayout>
      <div className="layout">
        <Component {...pageProps} />
      </div>
    </RootLayout>
  )
}