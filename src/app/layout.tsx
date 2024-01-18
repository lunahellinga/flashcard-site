import type {Metadata} from 'next'
import {firaCode, openDyslexic} from './ui/fonts'
import './globals.css'

export const metadata: Metadata = {
    title: 'Flashcards DV',
    description: 'Flashcards voor het oefenen van Digitale Vaardigheden.',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={`${openDyslexic.className} antialiased`}>{children}</body>
        </html>
    )
}
