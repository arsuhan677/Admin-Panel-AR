import React from "react";
import { useNavigate } from "react-router";
import supabase from "../../Utils/SupaBase";

function SoftZino(props) {
  const navigate = useNavigate();
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      alert(error.message);
      return;
    }
    navigate("/admin-login");
    alert("Logout Success.");
  };
  return (
    <div className="items-center justify-center flex min-h-screen bg-amber-100 py-6">
      <div className="items-center justify-center">
        <button
        onClick={handleLogout}
        className="cursor-pointer bg-red-500 py-2 px-6 rounded-full text-white"
      >
        Logout
      </button>
      </div>
    </div>
  );
}

export default SoftZino;
