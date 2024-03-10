import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Review from "./components/Review";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Review />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
