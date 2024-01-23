// import {PrismaClient} from '@prisma/client'
// import type {NextApiRequest, NextApiResponse} from 'next'
//
// const prisma = new PrismaClient()
//
// type ResponseData = {
//     categories: { id: number, name: string }
//     cards: [{ id: number, category: number, question: string, answer: string }]
// }
// export default async function handler() {
//     const cardData = await prisma.flashcard.findMany({
//         include: {
//             category: true,
//         },
//     });
//     const categories = cardData.map(c => c.category.name)
//         .filter((value, index, array) => array.indexOf(value) === index)
//         .sort()
//         .flatMap(c => [{value: c.toLowerCase(), label: c}])
//     const cards = cardData.flatMap(c => [{id: c.id, category: c.categoryId, question: c.question, answer: c.answer}])
//
//
// };
//
