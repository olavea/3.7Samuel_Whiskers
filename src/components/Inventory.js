import React from "react";
import AddKidsToyAnimalForm from "./AddKidsToyAnimalForm";

class Inventory extends React.Component {
  render() {
    return (
      <div className="order-wrap">
        <h2>Inventory</h2>
        <AddKidsToyAnimalForm addColoringPage={this.props.addColoringPage} />
        <button onClick={this.props.loadSampleFishes}>
          Load Sample Fishes
        </button>
      </div>
    );
  }
}

export default Inventory;
