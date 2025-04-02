import "./globals.css";
import Header from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>My App</title>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
