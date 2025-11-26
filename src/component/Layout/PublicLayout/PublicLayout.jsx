import { Outlet } from "react-router-dom";
import NavBar from "../PublicLayout/NavBar";
import Footer from "../PublicLayout/Footer";
import ProductCards from "../../../Pages/Product/Home/ProductCards";
import { useEffect } from "react";
import supabase from "../../../Utils/SupaBase";
import { useNavigate } from "react-router";

export default function PublicLayout() {
  const navigate = useNavigate();
  useEffect(() => {
    const checkSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.log("error checking session", error);
        return;
      }
      if (data.session) {
        navigate("/");
        console.log("user sign in", data.session);
      }
    };
    checkSession();
  }, []);
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
