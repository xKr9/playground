import Card from "./components/MultiComponentThing";
import PlaceholderImg from "@/assets/image.webp";

function App() {
  return (
    <main className="min-h-screen w-full flex justify-center items-center flex-col bg-blue-300 text-white">
      {/* <Card>
        <Card.Title title="Hello"></Card.Title>
        <Card.Body>
          <div className="flex justify-center">Some Random Content</div>
        </Card.Body>
        <Card.Footer description="Whats up"></Card.Footer>
      </Card> */}
      <img
        width={500}
        style={{
          backgroundImage: PlaceholderImg,
        }}
        height={500}
        // src="https://images.unsplash.com/photo-1525338078858-d762b5e32f2c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="ai"
      />
    </main>
  );
}

export default App;
