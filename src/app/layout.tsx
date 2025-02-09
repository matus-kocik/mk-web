import "./globals.css";

export const metadata = {
  title: "My Portfolio",
  description: "Personal portfolio of Matúš Kočik",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
