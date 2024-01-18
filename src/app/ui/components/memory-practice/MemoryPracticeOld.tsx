import {promises as fs} from 'fs';
import {GetStaticProps, GetStaticPropsResult} from "next";

interface Question {
    front: string;
    back: string;
}

export default async function MemoryPracticeOld() {


    return (
        <></>
    );
};

export async function getStaticProps(){
    const wordFile = await fs.readFile(process.cwd() + '/public/json/word.json', 'utf8');
    const wordQuestions: Question[] = await JSON.parse(wordFile);
    const excelFile = await fs.readFile(process.cwd() + '/public/json/excel.json', 'utf8');
    const excelQuestions: Question[] = JSON.parse(excelFile);
    const powerpointFile = await fs.readFile(process.cwd() + '/public/json/powerpoint.json', 'utf8');
    const powerpointQuestions: Question[] = JSON.parse(powerpointFile);

    const combined = [...wordQuestions, ...excelQuestions, ...powerpointQuestions];
    return {
        props: {
            combined,
        },
    }
}
