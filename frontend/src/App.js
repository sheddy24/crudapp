import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateFood from "./pages/CreateFood";
import Home from "./pages/Home";
import ShowFoods from "./pages/ShowFoods";
import EditFood from "./pages/EditFood";
import DeleteFood from "./pages/DeleteFood";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/foods/create" element={<CreateFood/>}/>
          <Route path="/foods/show/:id" element={<ShowFoods/>}/>
          <Route path="/foods/delete/:id" element={<DeleteFood/>}/>
          <Route path="/foods/edit/:id" element={<EditFood/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
