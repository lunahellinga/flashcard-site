'use client'

import Select, {SelectChangeEvent} from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import {Suspense, useState} from "react";
import {Flashcard} from "@/app/ui/components/flashcard/Flashcard";
import {Checkbox, FormControlLabel} from "@mui/material";
import {Unstable_NumberInput as NumberInput} from '@mui/base/Unstable_NumberInput';


interface FlashcardContainerProps {
    cards: { question: string; answer: string; id: number; category: string }[],
    categories: string[]
}

export const FlashcardContainer = ({cards, categories}: FlashcardContainerProps) => {
    const allCategoriesOption: string = "Alle categorieën"
    const [category, setCategory] = useState(allCategoriesOption);
    const [count, setCount] = useState(cards.length)
    const [randomized, setRandomized] = useState(false)
    const [filteredCards, setFilteredCards] = useState(cards)

    const handleCategoryChange = (event: SelectChangeEvent) => {
        setCategory(event.target.value as string);
    };

    const applyFilter = () => {
        setFilteredCards(cards
            .filter(c => c.category === category || category === allCategoriesOption)
            .toSorted(() => 0.5 - Math.random()).slice(0, count)
            .toSorted((c) => randomized ? 0.5 - Math.random() : c.id)
        )
    }

    return (
        <div>
            <div className={"w-screen h-fit p-2 flex flex-wrap justify-center items-center bg-gray-300"}>
                <div className={"w-screen flex m-2 mt-4 justify-center items-center "}>
                    <FormControl>
                        <InputLabel id="category-label">Categorie</InputLabel>
                        <Select
                            labelId="category-label"
                            id="category-select"
                            value={category}
                            label={category}
                            onChange={handleCategoryChange}
                            className={"me-2 w-44"}
                        >
                            {[...categories, allCategoriesOption].map(cat => <MenuItem key={cat}
                                                                                       value={cat}>{cat}</MenuItem>)}
                        </Select>
                    </FormControl>

                    <NumberInput className={"text-black m-2"}
                                 aria-label="Aantal vragen"
                                 placeholder="Type a number…"
                                 value={count}
                                 onChange={(event, val) => setCount(val == null ? 10 : val)}
                                 min={1}
                                 max={cards.length}
                    />

                    <FormControlLabel control={<Checkbox defaultChecked={randomized}
                                                         onChange={event => setRandomized(event.target.checked)}/>}
                                      label="Willekeurige volgorde"
                                      className={"text-black me-2"}/>
                </div>
                <div className={"m-2"}>
                    <Button variant="contained" onClick={applyFilter}>Toepassen</Button>
                </div>

            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <div className={"flex flex-wrap justify-center w-screen"}>
                    {filteredCards.map((card) => (
                        <Flashcard key={card.id} category={card.category} front={card.question} back={card.answer}
                                   id={card.id}></Flashcard>
                    ))}
                </div>
            </Suspense>
        </div>
    );
};