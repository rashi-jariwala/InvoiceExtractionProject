import AppRoutes from "../routes/AppRoutes";

function App() {
  return <AppRoutes />;
}

export default App;

/**
 * 
 * 
 * without dev tool use we can use this code and use this after console log checks
 * import { useSelector } from "react-redux";

function App() {
  const invoice = useSelector((state) => state.invoice);

  console.log(invoice);

  return <h1>Invoice Extraction System</h1>;
}

export default App;
 */