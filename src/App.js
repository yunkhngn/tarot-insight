import logo from "./logo.svg";
import "./App.css";
import { Tilt } from 'react-tilt';

function App() {
  return (
    <div className="App">
      <Tilt className="card" options={{ max: 30, perspective: 1000, scale: 1.1 }}>
        <div className="Tilt-inner">
          Tui chưa làm cái j đâu á trời
          <p>Nghịch API tại /api/</p>
        </div>
      </Tilt>
    </div>
  );
}

export default App;
