import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { IStateType } from "../State/Types";
import { AllDiaries } from "./Diary/AllDiaries";
import { DiaryHome } from "./Diary/DiaryHome";
import { Landing } from "./Landing";
import { LoginComp } from "./Login";
import { SignupComp } from "./Signup";

export const RouteComp = () => 
{
    const user = useSelector((state:IStateType) => state.LoginReducer);

    return <Routes>
        <Route path="/" element={ user.data ? <Landing /> : <LoginComp /> } >
            <Route path="/" element={<AllDiaries />} />
        </Route>
        {/* <Route path="/home" element={ user.data ? <DiaryHome /> : <LoginComp /> } /> */}
        <Route path="/signup" element={<SignupComp />} />
        <Route path="/login" element={<LoginComp />} />
    </Routes>
}