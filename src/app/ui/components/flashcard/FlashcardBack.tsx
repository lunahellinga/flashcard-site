'use client'

import {FlashcardText} from "@/app/ui/components/flashcard/FlashcardText";
import {useState} from "react";

export const FlashcardBack = ({text}: { text: string }) => {
    const [answered, setAnswered] = useState(false)

    function handleClick() {
        setAnswered(!answered)
    }

    return (
        <div className={`min-h-52 flex justify-center items-center rounded-b-md ${answered ? '' : 'blur'}`} onClick={handleClick}>
            <FlashcardText text={text}></FlashcardText>
        </div>
    );
};
