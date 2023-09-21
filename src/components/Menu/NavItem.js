import { BrowserRouter } from "react-router-dom";
import { Home } from "./Home";
import { Trailers } from "./Trailers";
import { Media } from "./Media";
import { Introducation } from "./Introducation";
import { Ecosystem } from "./Ecosystem";
import { Hunting } from "./Hunting";
import { Reaserch } from "./Research";
import { Colarbo } from "./Colarbo";
import { Events } from "./Events";
import { Products } from "./Products";
import { Route, Routes } from "react-router-dom";

export function NavItem() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/trailers" element={<Trailers />}></Route>
          <Route path="/media" element={<Media />}></Route>
          <Route path="/introduce" element={<Introducation />}></Route>
          <Route path="/ecosystem" element={<Ecosystem />}></Route>
          <Route path="/hunting" element={<Hunting />}></Route>
          <Route path="/research" element={<Reaserch />}></Route>
          <Route path="/colarbo" element={<Colarbo />}></Route>
          <Route path="/events" element={<Events />}></Route>
          <Route path="/products" element={<Products />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
