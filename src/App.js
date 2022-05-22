import "./App.css";
import { Nav, Sidebar } from "./component/component";
import { RouterWrapper } from "./router/router";

function App() {
  return (
    <div className="App flex flex-col h-screen text-neutral-200">
      <Nav />
      <main className="flex grow">
        <Sidebar />
        <RouterWrapper />
      </main>
    </div>
  );
}

export default App;
