import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Dish } from "../pages/Dish";
import { Menu } from "../pages/Menu";
import { NewDish } from "../pages/NewDish";
import { UpdateDish } from "../pages/UpdateDish"

export function AdminRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dish/:id" element={<Dish />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/newdish" element={<NewDish />} />
            <Route path="/updatedish/:id" element={<UpdateDish />} />
        </Routes>
    )
}