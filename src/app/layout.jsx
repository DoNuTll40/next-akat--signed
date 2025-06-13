import "./globals.css";

export const metadata = {
  title: "ลงนามถวายพระพรชัยมงคล",
  description: "ลงนามถวายพระพรชัยมงคล",
  icons: {
    icon: '/wellwishes/image/moph-logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
