import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import './styles/fonts.css'; // This line imports your fonts CSS
import './App.css'; // Import your main app styles


function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
