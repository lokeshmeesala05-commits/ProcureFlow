import "./Login.css";

import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import FeatureItem from "../../components/ui/FeatureItem";

function Login() {
  return (
    <div className="login-page">

      <div className="login-left">

        <h1>⬢ ProcureFlow</h1>

        <h2>
          Smart Procurement &
          <br />
          Resource Management
        </h2>

        <p>
          Simplify procurement, inventory and maintenance
          with one centralized platform.
        </p>

        <div className="features">

          <FeatureItem text="Purchase Request Workflow" />

          <FeatureItem text="Vendor Management" />

          <FeatureItem text="Inventory Tracking" />

          <FeatureItem text="Maintenance Management" />

        </div>

      </div>

      <div className="login-right">

        <Card>

          <h2>Welcome Back 👋</h2>

          <p>
            Sign in to continue
          </p>

          <div className="login-form">

            <Input
              label="Email"
              placeholder="Enter your email"
            />

            <Input
              label="Password"
              type="password"
              placeholder="Enter password"
            />

            <Button>
              Login
            </Button>

          </div>

        </Card>

      </div>

    </div>
  );
}

export default Login;