import "./RecentRequests.css";
import StatusBadge from "./StatusBadge";

const requests = [
  {
    id: "PR001",
    department: "CSE",
    vendor: "Dell",
    amount: "₹45,000",
    status: "Pending",
  },
  {
    id: "PR002",
    department: "ECE",
    vendor: "HP",
    amount: "₹18,500",
    status: "Approved",
  },
  {
    id: "PR003",
    department: "AIML",
    vendor: "Lenovo",
    amount: "₹82,000",
    status: "Rejected",
  },
];

function RecentRequests() {
  return (
    <div className="recent-card">

      <h2>Recent Purchase Requests</h2>
      <div className="table-wrapper">
      <table>

        <thead>
          <tr>
            <th>ID</th>
            <th>Department</th>
            <th>Vendor</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {requests.map((request) => (

            <tr key={request.id}>

              <td>{request.id}</td>

              <td>{request.department}</td>

              <td>{request.vendor}</td>

              <td>{request.amount}</td>

              <td>
                <StatusBadge status={request.status} />
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
    </div>
  );
}

export default RecentRequests;