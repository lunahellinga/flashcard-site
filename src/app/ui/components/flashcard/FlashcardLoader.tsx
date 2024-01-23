import {PrismaClient} from "@prisma/client";
import {FlashcardContainer} from "@/app/ui/components/flashcard/FlashcardContainer";

const prisma = new PrismaClient()

export default async function FlashcardLoader() {
    const cardData = await prisma.flashcard.findMany({
        include: {
            category: true,
        },
    });
    const categories = cardData
        .map(c => c.category.name)
        .filter((value, index, array) => array.indexOf(value) === index)
        .sort()

    const cards = cardData
        .flatMap(c => [{id: c.id, category: c.category.name, question: c.question, answer: c.answer}])

    return (
        <>
            <FlashcardContainer cards={cards} categories={categories}></FlashcardContainer>
        </>
    );
}