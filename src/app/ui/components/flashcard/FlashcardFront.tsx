import {FlashcardText} from "@/app/ui/components/flashcard/FlashcardText";

export const FlashcardFront = ({text}: { text: string }) => {
    return (
        <div className="h-28 border-b-4 border-b-gray-800 border-dashed">
            <FlashcardText text={text}></FlashcardText>
        </div>
    );
};
