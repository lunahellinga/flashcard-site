import FlashcardLoader from "@/app/ui/components/flashcard/FlashcardLoader";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray-500">
      <div className="mb-32 grid text-center lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <FlashcardLoader></FlashcardLoader>
      </div>
    </main>
  )
}
