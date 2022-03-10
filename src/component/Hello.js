import World from "./World"
import styles from "./Hello.module.css"
import { useState } from "react"

export default function Hello() {
    const [name, setName] = useState("코로나");

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
            <h2 id = "name"> {name} </h2>
        <button onClick={
            () => {
                setName(name === "코로나" ? "확진" : "코로나");
            }
        }> 
        ㅋㅋ
        </button>

        </div>

    </div> 
}