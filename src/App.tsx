import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { Profile, Search } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <div className="max-w-4xl mx-auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/watching" element={<h2>watching</h2>} />
          <Route path="/watched" element={<h2>watched</h2>} />
          <Route path="/towatch" element={<h2>towatch</h2>} />
          <Route path="/search/:title" element={<Search />} />
          <Route path="*" element={<h2>Not found!</h2>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
