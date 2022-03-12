import dummy from "../db/data.json";
import { useParams } from "react-router-dom";
import Word from "./Word";

export default function Day() {

    const a = useParams().day;
    const wordList = dummy.words.filter(word => word.day === Number(a));

    return(
    <>
    <h2>DAY {a}</h2>
    <table>
        <tbody>
            {wordList.map(word => (
                <Word word={word} key = {word.id}/>
            ))}
        </tbody>
    </table>
    </>
    );
}