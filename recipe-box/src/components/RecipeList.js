import React from "react";
import RenderRecipe from "./RenderRecipe";

export default class RecipeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      ingredients: "",
      // myJson:JSON.parse(localStorage.recipeBook)
    };
    this.addElement = this.addElement.bind(this);
    console.log(localStorage.recipeBook);
  }
  // componentDidMount(){
  //   console.log(this.state.myJson);
  //   let myNewJson=this.state.myJson;
  //   for(let i=0;i<myNewJson.length;i++){
  //     myNewJson[i]._id=`${i}`;
  //   }
  //   this.setState({myJson:myNewJson});
  // }
  addElement(e) {
    e.preventDefault();
    this.setState({
      title: e.target.titleInput.value,
      ingredients: e.target.ingredientsInput.value
    });
<<<<<<< HEAD
    this.state.myJson.push({ title: e.target.titleInput.value, ingredients: e.target.ingredientsInput.value.split(" ") });
    localStorage.setItem("recipeBook", this.state.myJson);
=======
    console.log(this.state.title);
>>>>>>> parent of 728bee5... up
  }
  render() {
    return (
      <div>
        <RenderRecipe myJson={this.state.myJson} />
        <form onSubmit={this.addElement}>
          <h3>Title</h3>
          <input type="text" name="titleInput" />
          <h3>Ingredients</h3>
          <input type="text" name="ingredientsInput" />
          <input type="submit" value="Add Recipe" />
        </form>

      </div>
    );
  }
}
