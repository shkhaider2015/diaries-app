import { FC, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { IStateType } from "../../State/Types"
// import { useAction } from "../../State/useActions";
import { DiaryCard } from "./DiaryCard";

export const AllDiaries: FC = () => {
    const diaries = useSelector((state: IStateType) => state.Diaries);
    // const [data , setData] = useState([]);
    // const { GetData } = useAction();

    // useEffect(
    //     () => {
    //         GetData();
    //     },[]
    // )

    if (diaries?.loading) {
        <div style={{ height: '90vh', display: 'grid', placeItems: 'center' }} >
            <h1>...Loading</h1>
        </div>
    }

    if (diaries?.error) {
        <div style={{ height: '90vh', display: 'grid', placeItems: 'center' }} >
            <h3>Oops</h3>
            <h6> {diaries.error} </h6>
        </div>
    }

    return <div style={{ height: '100vh' }} >
                {console.log("Diaries : ", diaries?.data)}
        <div className="col-10" >
            <div className="row" >
                {
                    diaries.data.diaries.map(
                        (object:any, index:number) => <div key={index} className="col-4" > <DiaryCard /> </div>
                    )
                }
                <h1>gggg</h1>
            </div>
        </div>
    </div>
}