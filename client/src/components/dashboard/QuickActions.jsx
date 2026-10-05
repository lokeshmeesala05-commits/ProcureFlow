import "./QuickActions.css";

const actions = [
  {
    title: "New Request",
    description: "Create a procurement request",
    icon: "📝",
  },
  {
    title: "Add Product",
    description: "Register a new product",
    icon: "📦",
  },
  {
    title: "Add Vendor",
    description: "Register a new vendor",
    icon: "🏢",
  },
  {
    title: "View Reports",
    description: "View procurement reports",
    icon: "📊",
  },
];

function QuickActions() {
  return (
    <div className="quick-actions">

      <h2>Quick Actions</h2>

      <div className="action-grid">

        {actions.map((action) => (
          <div className="action-card" key={action.title}>

            <div className="action-icon">
              {action.icon}
            </div>

            <h3>{action.title}</h3>

            <p>{action.description}</p>

          </div>
        ))}

      </div>

    </div>
  );
}

export default QuickActions;