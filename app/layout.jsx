import "./globals.css";

export const metadata = {
  title: "Tobias E. — Software Engineer",
  description:
    "Software Engineer focused on building web and mobile systems, exploring cybersecurity, and mentoring aspiring developers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
