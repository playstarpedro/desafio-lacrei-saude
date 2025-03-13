'use client'

import GlobalStyle from "@/styles/GlobalStyle";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <GlobalStyle />
        {children}
      </body>
    </html>
  );
}
