"use client";
// app/layout.js
import { CacheProvider } from "@emotion/react";
import { CssBaseline, Grid2, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import createEmotionCache from "./createEmotionCache";
import "./globals.css";
import theme from "./theme";

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
              <Grid2
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <Grid2 sx={{ width: "100%", border: "2px solid red" }}>
                  Header
                </Grid2>
                <Grid2>{children}</Grid2>
                <Grid2 sx={{ width: "100%", border: "2px solid red" }}>
                  Footer
                </Grid2>
              </Grid2>
            </ThemeProvider>
          </CacheProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
