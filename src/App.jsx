import "./styles.css";
import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <h1>Hi React</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/invoices">Invoices</Link> | {" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      {/* Allow to keep menu */}
      <Outlet />
    </div>
  );
}
