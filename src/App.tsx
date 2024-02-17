import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';
import ReusedCard from './components/ReusedCard';

function App() {
  return (
    <>
    <ReusedCard img = {<Card.Img variant="top" src="https://dummyimage.com/200x200/000/fff"/>}>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
    </ReusedCard>
    
    <ReusedCard>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
    </ReusedCard>
    </>
  )
}

export default App
