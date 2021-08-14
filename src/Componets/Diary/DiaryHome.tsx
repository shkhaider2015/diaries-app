import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { IStateType } from "../../State/Types";
import { AllDiaries } from "./../Diary/AllDiaries";
import { DiaryCard } from "./../Diary/DiaryCard"

export const DiaryHome = () => {
    const user = useSelector((state: IStateType) => state.LoginReducer);
    const navigate = useNavigate();
    const [userName, setUserName] = useState(null);


    useEffect(
        () => {
            const FETCH = async (x: any) => {
                const response = await axios.get(`/api/user/${x.user.username}/diaries`);
                const data = await response.data;

                console.log("Frontend user diaries : ", data)
            }
            FETCH(user.data)
            //eslint-disable-next-line
        }, []
    )

    return <div className="row" >
        <div className="col-2 border" >
            <div onClick={() => navigate("/home/kk")} >
                <span>Diary 1</span>
            </div>
            <div onClick={() => navigate("/home/jj")} >
                <span>Diary 2</span>
            </div>
        </div>
        {/* <div className="col-10" >
            <div className="row" >
                {
                    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
                        .map(
                            (object: number, index: number) => <div key={index} className="col-4" > <DiaryCard /> </div>
                        )
                }
            </div>
        </div> */}
        <div className="col-10">
            <Outlet />
        </div>
    </div>


}