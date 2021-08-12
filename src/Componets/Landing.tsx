import { DiaryCard } from "./Diary/DiaryCard"

export const Landing = () => {
    
    return <div className="row" >
        {
            [0,1,2,3,4,5,6,7,8,9]
            .map(
                (object:number, index:number) => <div key={index} className="col-4" > <DiaryCard /> </div>
            )
        }
    </div>
}