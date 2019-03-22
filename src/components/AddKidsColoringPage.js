import React from "react";

class AddLilliansColoringPage extends React.Component {
  imageRef = React.createRef();
  nameRef = React.createRef();

  createColoringPage = event => {
    // I stop
    event.preventDefault();
    const iColoredThis = {
      image: this.imageRef.current.value,
      name: this.nameRef.current.value
    };
    console.log(iColoredThis);
    this.props.addColoringPages(iColoredThis);
  };

  render() {
    return (
      <form className="coloringDrawing-edit" onSubmit={this.createColoringPage}>
        <input
          name="name"
          ref={this.nameRef}
          type="text"
          placeholder="Name of Your Kid"
        />
        <input
          name="image"
          ref={this.imageRef}
          type="text"
          placeholder="Email a Photo of Your Kids Color Drawing"
        />
        <button type="submit">+ Add Your Kids Coloring Drawing</button>
      </form>
    );
  }
}
export default AddLilliansColoringPage;

{
  /*

 imageRef = React.createRef();

    createColoringPage = event => {
    // I stop
    event.preventDefault();
    const coloring = {
      image: this.imageRef.current.value),
    }
    console.log(this.imageRef.current.value);
  };




  -----
  // then go to line 36

// 9.
  imageRef = React.createRef();

  // 6.
  createToy = event => {
    // 7 . stop the form from submitting
    event.preventDefault();
    // 7.2 console.log("Making A Fish ");
// 10. console.log(this.imageRef.current.value);
// 11.
    const toyAnimal = {
      // 13.

      image: this.imageRef.current.value

      // 14. into state into index
    };
    // 12.  console what?
    console.log(fish);
    // 21.
    // 22. console sdding s fish
    this.props.addToyAnimal(toyAnimal);
    //refresh the form
    event.currentTarget.reset();
  };
 // 2. w#13 7:11
      <form className="toyAnimal-edit"  onSubmit={this.createToy}>

      </form>
*/
}
