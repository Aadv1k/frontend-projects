import { Component } from "react";
import PricingToggle from "./components/PricingToggle.jsx";
import Card from "./components/Card.jsx";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = { toggled: false };
    this.data = [
      {
        type: "basic",
        pricing: {
          annually: 19.99,
          monthly: 199.99,
        },
        features: ["500 GB Storage", "2 Users Allowed", "Send up to 3 GB"],
      },

      {
        type: "professional",
        pricing: {
          annually: 24.99,
          monthly: 249.99,
        },
        features: ["1 TB Storage", "5 Users Allowed", "Send up to 10 GB"],
      },

      {
        type: "master",
        pricing: {
          annually: 39.99,
          monthly: 399.99,
        },
        features: ["2 TB Storage", "10 Users Allowed", "Send up to 20 GB"],
      },
    ];
  }

  setToggledState() {
    if (this.state.toggled) {
      this.setState({ toggled: false });
      return;
    }
    this.setState({ toggled: true });
  }

  render() {
    return (
      <>
        <section className="head flex flex-col mb-16">
          <h1 className="text-3xl text-livid-300 mb-4">Our Pricing</h1>

          <div className="flex items-center gap-2">
            <span className="text-sm text-livid-200">Annually</span>

            <PricingToggle
              setToggledState={this.setToggledState.bind(this)}
              toggled={this.state.toggled}
            />
            <span className="text-sm text-livid-200">Monthly</span>
          </div>
        </section>
        <section className="w-full flex flex-col gap-4 sm:(flex-row max-w-screen-lg justify-center)">
          {this.data.map((plan) => {
            return (
              <Card
                planType={plan.type}
                planCost={
                  !this.state.toggled
                    ? plan.pricing.annually
                    : plan.pricing.monthly
                }
                planFeatures={plan.features}
                planMax={plan.type === "professional" ? true : false}
              />
            );
          })}
        </section>
      </>
    );
  }
}
