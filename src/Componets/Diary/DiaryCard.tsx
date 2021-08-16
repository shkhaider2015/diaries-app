import { FC } from "react";
import { Card } from "react-bootstrap";
import { IEntry } from "../../State/Types";

type propType = {
    entry : IEntry
}

export const DiaryCard1: FC = () => {


    return <Card style={{ width: '18rem' }} >
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
        </Card.Body>
    </Card>
}

export const DiaryCard = ({entry}:propType) => {


    return <div style={{ width : '13rem', height : '10rem' }} className="shadow p-2 mt-3 rounded" >
        <div className="d-flex flex-direction-row justify-content-between border" >
            <p> {entry.title} </p> <p> {new Date(entry.date).getFullYear()} </p>
        </div>
        <p>
            {entry.desc}
        </p>
    </div>
}