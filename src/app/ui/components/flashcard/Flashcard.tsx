'use client'
import {FlashcardHeader} from "@/app/ui/components/flashcard/FlashcardHeader";
import {FlashcardFront} from "@/app/ui/components/flashcard/FlashcardFront";
import {FlashcardBack} from "@/app/ui/components/flashcard/FlashcardBack";
import {useState} from "react";

export const Flashcard = ({category, front, back}: { category: string, front: string, back: string }) => {
    const [answered, setAnswered] = useState(false)

    return (
        <div className="w-96 rounded-md border border-gray-500 bg-gray-300 shadow-lg">
            <FlashcardHeader category={category} number={1}></FlashcardHeader>
            <FlashcardFront text={front}></FlashcardFront>
            <FlashcardBack text={back}></FlashcardBack>
        </div>
    );
};
