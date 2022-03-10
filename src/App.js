import logo from './logo.svg';
import './App.css';
import Hello from './component/Hello';
import Welcome from './component/Welcome';

function App() {
  return (
    <div className="App">
     
      {/* jsx에서는 함수를 만들어 import하여 태그처럼 쓴다. */}    
      <Hello age = {10} /> {/* props를 넘겨줌 */}
      <div className="box"> <h2>#8A2BE2</h2> </div>   

    </div>
  );
}

export default App;