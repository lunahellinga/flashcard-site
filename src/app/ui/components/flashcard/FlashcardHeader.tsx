import Image from "next/image";
import {iconMap} from "@/app/ui/icons";

export const FlashcardHeader = ({category, number}: { category: string, number: number}) => {

    return (
        <div className="h-12 w-auto bg-gray-700 flex justify-center items-center relative rounded-t-md">
            <Image src={iconMap[category]} width={512} height={476} className="h-8 w-8 rounded-md absolute left-2 top-2" alt={category}></Image>
            <p className="capitalize m-0 text-white">{`${category} ${number}`}</p>
        </div>
    );
};
