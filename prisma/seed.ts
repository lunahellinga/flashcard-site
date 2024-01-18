import {Prisma, PrismaClient} from '@prisma/client'
import wordJson from './json/word.json'
import excelJson from './json/excel.json'
import pptJson from './json/powerpoint.json'

const prisma = new PrismaClient()

async function main() {
    function loadJsonFlashcards(source: typeof wordJson, categoryId: number) {
        return source.map((q) => {
            const card: Prisma.FlashcardCreateManyInput = {
                categoryId: categoryId,
                question: q.question,
                answer: q.answer
            }
            return card;
        });
    }

    const globalUser = await prisma.user.upsert({
        where: {name: 'global'},
        update: {},
        create: {
            name: 'global',
            collections: {
                create: {
                    name: 'Digitale Vaardigheden',
                    categories: {
                        create: [
                            {name: 'Word'},
                            {name: 'Excel'},
                            {name: 'Powerpoint'}
                        ]
                    }
                }
            }
        }
    })

    const cardInput = [
        ...loadJsonFlashcards(wordJson, 1),
        ...loadJsonFlashcards(excelJson, 2),
        ...loadJsonFlashcards(pptJson, 3)];

    const cards = await prisma.flashcard.createMany({
        data: cardInput
    })

}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })