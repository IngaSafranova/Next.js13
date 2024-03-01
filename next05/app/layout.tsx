import './globals.css'
import Navbar from './components/Navbar'

export const metadata = {
  title: 'WikiRockets!',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className="bg-slate-800">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
