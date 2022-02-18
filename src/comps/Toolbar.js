import React from "react";
import {useNavigate} from "react-router-dom";


const Toolbar = () => {



    const nav = useNavigate()

    function goToAllRecipes () {
        nav("/recipes")
    }

    function goToCreateRecipe () {
        nav("/")
    }

    function goToFavorites () {
        nav("/favorites")
    }

    return (
        <div className="toolbar d-flex space-btw">
            <button onClick={goToAllRecipes}>All Recipes</button>
            <button onClick={goToCreateRecipe}>Create Recipe</button>
            <div>
                <button onClick={goToFavorites}>Favorites</button>

            </div>


        </div>
    );
};

export default Toolbar;