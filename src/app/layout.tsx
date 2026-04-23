import "./globals.css";

<<<<<<< feature/TASKIFY2-47/dashboard-page
export function RootLayout({
=======
function RootLayout({
>>>>>>> dev
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
