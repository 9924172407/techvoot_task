import { Toaster } from "react-hot-toast";
import Routing from "./routing";

function App() {
  return (
    <>
      <Routing />
      <Toaster position="top-right" />
    </>
  );
}

export default App;
