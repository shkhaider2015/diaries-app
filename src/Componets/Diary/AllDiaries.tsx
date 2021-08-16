import { FC, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { IEntry, IStateType } from "../../State/Types"
import { useAction } from "../../State/useActions";
import { DiaryCard } from "./DiaryCard";

export const AllDiaries: FC = () => {
    const diaries = useSelector((state: IStateType) => state.Diaries);
    const entries = useSelector((state:IStateType) => state.Entries);
    // const [data , setData] = useState([]);
    const { GetEntries } = useAction();

    useEffect(
        () => {
            GetEntries();
        },[]
    )

    if (entries?.loading) {
        <div style={{ height: '90vh', display: 'grid', placeItems: 'center' }} >
            <h1>...Loading</h1>
        </div>
    }

    if (entries?.error) {
        <div style={{ height: '90vh', display: 'grid', placeItems: 'center' }} >
            <h3>Oops</h3>
            <h6> {diaries.error} </h6>
        </div>
    }

    return <div style={{ height: '100vh' }} >
                {console.log("Entries : ", entries?.data)}
        <div className="col-10" >
            <div className="row" >
                {
                    entries?.data.entries.map(
                        (object:IEntry, index:number ) => <div key={index} className="col-4" > <DiaryCard entry={object} /> </div>
                    )
                }
                <h1>gggg</h1>
            </div>
        </div>
    </div>
}