import { Outlet } from "react-router-dom";
import NavBar from "../PublicLayout/NavBar";
import Footer from "../PublicLayout/Footer";
import ProductCards from "../../../Pages/Product/Home/ProductCards";

export default function PublicLayout() {
  return (
    <div>
      <NavBar />
      <main>
        <Outlet />
        <ProductCards />
      </main>
      <Footer />
    </div>
  );
}
