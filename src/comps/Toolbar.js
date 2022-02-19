
import {useNavigate} from "react-router-dom";
import {useContext} from 'react';
import MainContext from "../MainContext/MainContext";


const Toolbar = () => {

    const {
        setIngredientFilter,
        setIngredientAmountFilter,
        setPreparationTimeFilter,
        setReviewsCountFilter,
        setAverageRatingFilter,


    } = useContext(MainContext)




    const nav = useNavigate()

    function goToAllRecipes () {
        setIngredientFilter("")
        setIngredientAmountFilter("")
        setPreparationTimeFilter("")
        setReviewsCountFilter("")
        setAverageRatingFilter(0)
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