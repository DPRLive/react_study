import World from "./World"
import styles from "./Hello.module.css"
import { useState } from "react"
import UserName from "./UserName";

export default function Hello(props) {
    const [name, setName] = useState("코로나");
    const [age, setAge] = useState(props.age);

    return <div>
 
        <h1>React Study</h1>
        
        <div className={styles.box}>purple</div>

        <button onClick={() => {
            alert("alert");
        }}>Show name</button>

        <div>
        <input onChange={(txt) => {
            console.log(txt.target.value);
            }
        } />
        </div>

        <div>
            <h2 id = "name"> {name} : {age} </h2>
        <button onClick={
            () => {
                setName(name === "코로나" ? "확진" : "코로나");
                setAge(age + 1);
            }
        }> 
        ㅋㅋ
        </button>
        {/* 여기서의 name은 state, username에선 props */}
        <UserName name = {name}/>
        </div>

    </div> 
}