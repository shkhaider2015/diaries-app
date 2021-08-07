import { Routes, Route } from "react-router-dom";
import { Landing } from "./Landing";
import { LoginComp } from "./Login";
import { SignupComp } from "./Signup";

export const RouteComp = () => 
{
    return <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<SignupComp />} />
        <Route path="/login" element={<LoginComp />} />
    </Routes>
}