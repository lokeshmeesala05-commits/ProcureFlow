import Button from "./components/ui/Button";

function App() {
  return (
    <div
      style={{
        padding: "50px",
        display: "flex",
        gap: "20px",
      }}
    >
      <Button>Primary</Button>

      <Button variant="success">
        Success
      </Button>

      <Button variant="warning">
        Warning
      </Button>

      <Button variant="danger">
        Delete
      </Button>
    </div>
  );
}

export default App;