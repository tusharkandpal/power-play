import "./App.css";
import { Nav, Sidebar, Toast } from "./component/component";
import { RouterWrapper } from "./router/router";

function App() {
  return (
    <div className="App flex flex-col relative h-full overflow-x-hidden text-neutral-200">
      <Nav />
      <main className="flex h-full overflow-y-auto">
        <Sidebar />
        <RouterWrapper />
      </main>
      <Toast />
    </div>
  );
}

export default App;
