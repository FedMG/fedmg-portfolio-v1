import { useEffect, useState } from "react";
import { Header } from "./structure/Header.jsx";
import { Main } from "./structure/Main.jsx";
import { Loader } from "./items/Loader.jsx";

function App() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (isLoading) return <Loader />;

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}
export default App;
