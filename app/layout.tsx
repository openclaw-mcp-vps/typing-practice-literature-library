import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TypeLit — Practice Typing with Classic Literature',
  description: 'Improve your typing speed and accuracy by retyping classic novels and literature. Track WPM, accuracy, and reading comprehension in real-time.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c4fd0b8b-d4be-468d-869d-3090226bd2a2"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
