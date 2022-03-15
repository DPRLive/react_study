import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function CreateDay()
{
    const days = useFetch("http://localhost:3001/days");
    const Navigate = useNavigate();

    function addDay()
    {
        fetch(`http://localhost:3001/days`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
                day : days.length + 1
            }),
        }).then(res=> {
            if (res.ok) {
                alert(`Day가 추가되었습니다.`);
                Navigate(`/`);
            }
        });
    }

    return (
        <div>
            <h3>현재 일수 : {days.length}일</h3>
            <button onClick = {addDay}>Day 추가</button>
        </div>
    )
}