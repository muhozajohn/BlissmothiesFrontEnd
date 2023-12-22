// App.js
import { CartProvider } from "./components/Card/CartContext";
import Routers from "./routes/Routers";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <Routers />
    </CartProvider>
  );
}

export default App;
