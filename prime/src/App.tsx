import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <div className="bg-slate-400 min-h-screen w-full text-white flex items-center justify-center">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
