import type {Metadata} from 'next'
import {firaCode, openDyslexic} from './ui/fonts'
import './globals.css'
import {AppRouterCacheProvider} from "@mui/material-nextjs/v13-appRouter";

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
        <body className={`${openDyslexic.className} antialiased`}>
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider></body>
        </html>
    )
}
