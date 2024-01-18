import {PrismaClient} from '@prisma/client'
import {Flashcard} from "@/app/ui/components/flashcard/Flashcard";
import {Suspense} from "react";

const prisma = new PrismaClient()

export default async function FlashcardLoader() {
    // Concept flow: teacher can create/edit card collections, upload CSV file with questions -> parsed to a struct -> stored in DB -> fetched with caching -> cards generated -> sent to user
    // Caching: https://nextjs.org/docs/app/building-your-application/caching#data-cache
    // Prisma: https://www.prisma.io/docs/getting-started/quickstart

    const cardData = await prisma.flashcard.findMany({
        include: {
            category: true,
        },
    });


    return (
        <div className={"flex flex-wrap justify-center w-screen"}>
            <Suspense fallback={<div>Loading...</div>}>
                {cardData.map((card) => (
                    <Flashcard key={card.id} category={card.category.name} front={card.question}
                               back={card.answer} id={card.id}></Flashcard>
                ))}
            </Suspense>
        </div>
    );
};

