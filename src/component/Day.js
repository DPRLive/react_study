import dummy from "../db/data.json";
import { useParams } from "react-router-dom";

export default function Day() {

    const a = useParams().day;
    const wordList = dummy.words.filter(word => word.day === Number(a));

    return(
    <>
    <h2>DAY {a}</h2>
    <table>
        <tbody>
            {wordList.map(word => (
                <tr key={word.id}>
                    <td>{word.eng}</td>
                    <td>{word.kor}</td>
                </tr>
            ))}
        </tbody>
    </table>
    </>
    );
}