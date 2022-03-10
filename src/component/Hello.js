import World from "./World"
import styles from "./Hello.module.css"

export default function Hello() {
    return <div>
        <h1>Hello</h1>

        <button onClick={() => {
            alert("코로나");
        }}>Show name</button>
        
        <div>
        <input onChange={(txt) => {
            console.log(txt.target.value);
            }
        } />
        </div>

        <div className={styles.box}>Hello</div>
        <World />
    </div> 
}