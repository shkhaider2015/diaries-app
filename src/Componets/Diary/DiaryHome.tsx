import { FC } from "react";
import { useNavigate, Outlet } from "react-router-dom";

export const DiaryHome : FC = () =>
{
    const navigate = useNavigate();

    return <div>
        <button onClick={() => navigate("/")} > link2 </button>
        <button onClick={() => navigate("/pp")} > link3 </button>
        {/* <Outlet /> */}
    </div>
}