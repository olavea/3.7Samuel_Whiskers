import React from "react";

class Fish extends React.Component {
  render() {
    return <li className="fish-menu">🐠</li>;
  }
}

export default Fish;

// nameRef = React.createRef();

// createKidsName = event => {
//   // 1.  stop the form from submitting
//   event.preventDefault();
//   const fish = {
//     name: this.nameRef.current.value,
//   };
//   this.props.addFish(fish);
//   // refresh the form
//   event.currentTarget.reset();
// };
