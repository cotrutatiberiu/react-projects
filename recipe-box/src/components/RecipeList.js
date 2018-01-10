import React from "react";
import RenderRecipe from "./RenderRecipe";

export default class RecipeList extends React.Component{
    render(){
        return(
            <div>
                <RenderRecipe/>
            <button type="button">Add Recipe</button>
            </div>
        )
    }
}