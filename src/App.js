import "./style.scss"
import Header from "./components/Header"
import About from "./components/About";
import Me from "./components/Me";

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Me/>
    </div>
  );
}

export default App;
