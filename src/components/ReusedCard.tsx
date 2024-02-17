import { Card,Button } from 'react-bootstrap';

type ReusedCardProps = {
    img?: JSX.Element,
    children: React.ReactNode
}
const ReusedCard = (props: ReusedCardProps) => {
    return (
    <Card>
        {props?.img}
        <Card.Body>
        {props.children}
        <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>
    )
}

export default ReusedCard