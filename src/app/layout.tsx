import "./globals.css";

function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-background">
        {children}
        {modal}
      </body>
    </html>
  );
}

export default RootLayout;
