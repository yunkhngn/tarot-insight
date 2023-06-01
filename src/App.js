import logo from "./logo.svg";
import "./App.css";
import { Tilt } from 'react-tilt';

function App() {
  return (
    <div className="App">
      <Tilt className="card" options={{ max: 30, perspective: 1000, scale: 1.1 }}>
        <div className="Tilt-inner">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/RWS_Tarot_00_Fool.jpg/640px-RWS_Tarot_00_Fool.jpg"/>
        </div>
      </Tilt>
    </div>
  );
}

export default App;
