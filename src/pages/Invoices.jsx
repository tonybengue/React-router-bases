import { Link } from "react-router-dom";
import { getInvoices } from "../datas";

export default function Invoices() {
  let invoices = getInvoices()
  
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Invoices</h2>
      {invoices.map((invoice) => (
        <Link
          style={{ display: "block", margin: "1rem 0" }}
          to={`/invoices/${invoice.number}`}
          key={invoice.number}
        >
          {invoice.name}
        </Link>
      ))}
    </main>
  );
}