import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreator from "./Actions";

export const useAction = () =>
{
    const dispatch = useDispatch();
    const { Signup, Login } = bindActionCreators(actionCreator, dispatch);

    return {
        Signup,
        Login
    }
}