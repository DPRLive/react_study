import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch"

export default function CreateWord() {
    const days = useFetch("http://localhost:3001/days");
    const Navigate = useNavigate();

    function onSubmit(e)
    {
        // 새로고침 막기
        e.preventDefault();

        fetch(`http://localhost:3001/words`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
                day : Number(dayRef.current.value),
                eng : engRef.current.value,
                kor : korRef.current.value,
                isDone : false,
            }),
        }).then(res=> {
            if (res.ok) {
                alert(`${engRef.current.value} 단어가 생성되었습니다.`);
                Navigate(`/day/${dayRef.current.value}`);
            }
        });
    }

    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);

    return (
        <form onSubmit = {onSubmit}> 
            <div className="input_area">
                <label>Eng</label>
                <input type="text" placeholder="computer" ref={engRef}></input>
            </div>
            <div className="input_area">
                <label>Kor</label>
                <input type="text" placeholder="컴퓨터" ref={korRef}></input>
            </div>
            <div className="input_area">
                <label>Day</label>
                <select>
                    {days.map(day => (
                    <option key={day.id} ref={dayRef}>{day.day}</option>
                    ))};
                </select>
            </div>
            <button>저장</button>
        </form>
    )
}