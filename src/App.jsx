import Login from "./Pages/Login";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Items from "./Pages/Items";
import SingleItem from "./Pages/SingleItem";
import AddItem from "./Pages/AddItem";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Login />} />
        <Route path="/items" element={<Items />} />
        <Route path="/items/:id" element={<SingleItem />} />
        <Route path="/add" element={<AddItem />} />
      </Routes>
    </BrowserRouter>
    // <Login />;
  );
}

export default App;
