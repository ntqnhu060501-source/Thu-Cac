import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'THƯ CÁC',
  description: 'Nền tảng đọc truyện, nghe audio và giải trí trí tuệ.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className="antialiased">{children}</body>
    </html>
  )
}
