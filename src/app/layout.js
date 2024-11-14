"use client";
// app/layout.js
import { CacheProvider } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import createEmotionCache from "./createEmotionCache";
import theme from "./theme";
import "./globals.css"

// Create a client-side cache for Emotion
const clientSideEmotionCache = createEmotionCache();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <CacheProvider value={clientSideEmotionCache}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {children}
            </ThemeProvider>
          </CacheProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
