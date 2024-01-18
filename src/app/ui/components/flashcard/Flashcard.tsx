// 'use client'
import {FlashcardHeader} from "@/app/ui/components/flashcard/FlashcardHeader";
import {FlashcardFront} from "@/app/ui/components/flashcard/FlashcardFront";
import {FlashcardBack} from "@/app/ui/components/flashcard/FlashcardBack";

export const Flashcard = ({category, front, back, id}: {
    category: string,
    front: string,
    back: string,
    id: number
}) => {

    return (
        <div className="m-5">
            <div className="w-96 rounded-md border border-gray-500 bg-gray-300 shadow-lg">
                <FlashcardHeader category={category} number={id}></FlashcardHeader>
                <FlashcardFront text={front}></FlashcardFront>
                <FlashcardBack text={back}></FlashcardBack>
            </div>
        </div>
    );
};
