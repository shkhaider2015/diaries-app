import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { IStateType } from "../State/Types";
import { useAction } from "../State/useActions";

export const Landing = () => {
    const user = useSelector((state: IStateType) => state.LoginReducer);
    const navigate = useNavigate();
    const { GetData } = useAction();
    const [userName, setUserName] = useState(null);
    const diaries = useSelector((state:IStateType) => state.Diaries);


    // useEffect(
    //     () => {
    //         const FETCH = async (x: any) => {
    //             const response = await axios.get(`/api/user/${x.user.username}/diaries`);
    //             const data = await response.data;

    //             console.log("Frontend user diaries : ", data)
    //         }
    //         FETCH(user.data)
    //         //eslint-disable-next-line
    //     }, []
    // )

    useEffect(
        () => {
            GetData()
        }, []
    )

    const waitComp = (loading:boolean=false, error:string='') => <div style={{ height : '90vh', display :'grid', placeItems : 'center' }} > { loading ? "...Loading" : error } </div>

    return <div className="row" >
        <div className="col-2 border" >
            {/* {
                diaries.loading
                ? waitComp(true)
                : null
            }
            {
                 diaries.error
                 ? waitComp(false,diaries.error)
                 : null
            } */}
            {
                diaries.data
                ? diaries.data.diaries ? diaries.data.diaries.map((item:any, index:number) => <div key={index} > <span> {item.title} </span> </div> ) : <span>No Diaries</span>
                : diaries.loading ? waitComp(true, '') : waitComp(false, 'Error Fetching data')
            }
            {
                [0, 1, 2, 3, 4]
                    .map(
                        (object: number, index: number) => <div key={index} > <span> Diary </span> </div>
                    )
            }
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