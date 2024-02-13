import Card from "./components/MultiComponentThing";

function App() {
  return (
    <main className="min-h-screen w-full flex flex-col bg-blue-300 text-white">
      <Card>
        <Card.Title title="Hello"></Card.Title>
        <Card.Body>
          <div className="flex justify-center">Some Random Content</div>
        </Card.Body>
        <Card.Footer description="Whats up"></Card.Footer>
      </Card>
    </main>
  );
}

export default App;
