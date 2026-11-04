import type { Metadata } from 'next'
import '../globals.css'

export const metadata: Metadata = {
  title: 'THƯ CÁC – Không gian văn hóa & giải trí',
  description: 'Nền tảng đọc truyện, nghe audio và rèn luyện trí tuệ',
  manifest: '/manifest.json',
  themeColor: '#B68A55',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#F5F1E7] text-[#26231E] font-['Plus_Jakarta_Sans',sans-serif] antialiased selection:bg-[#B68A55] selection:text-white min-h-screen pb-20">
        {children}
      </body>
    </html>
  )
}
