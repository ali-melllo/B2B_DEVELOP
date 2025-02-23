'use client'

import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./styles/globals.css";
import { store } from '../redux/store';
import { Provider } from 'react-redux'
import { Toaster } from "@/components/ui/sonner";
import FrequentlyAskedModal from "@/components/main/modals/frequently-asked-modal";
import { Header } from "@/components/header";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body
        className={`"overflow-x-hidden bg-background antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <TooltipProvider delayDuration={0}>
            <Toaster />
            <Provider store={store}>
              <Header />
              {children}
              <FrequentlyAskedModal />
            </Provider>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
