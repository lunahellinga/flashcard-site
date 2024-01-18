import Image from 'next/image'
import {Flashcard} from "@/app/ui/components/flashcard/Flashcard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-500">
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <Flashcard category={'excel'} front={'Test front'} back={'Test back'}></Flashcard>
      </div>
    </main>
  )
}
