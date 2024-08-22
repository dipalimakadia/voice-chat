import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import Voice from "./components/Voice/Voice";



function App() {
  return (
    <div className="App bg-neutral-300">
      <Header />
      <main className="container-fluid mx-auto p-6">
        <Content />
        <Voice />
      </main>
    </div>
  );
}

export default App;
