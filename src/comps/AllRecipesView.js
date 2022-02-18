import {useContext} from 'react';
import MainContext from "../MainContext/MainContext";
import {useNavigate} from "react-router-dom"

const AllRecipesView = ({recipe}) => {

    const nav = useNavigate()

    const {getFavorite, setFavorite} = useContext(MainContext)

    function goToRecipe () {
        nav(`/recipe/${recipe.title}`)
    }

    function addToFavorites () {

        if (getFavorite.find(x=> x.title === recipe.title)){
            setFavorite([...getFavorite])
        }else {
            setFavorite([...getFavorite, recipe])
        }
    }



    return (
        <div className="d-flex">

            <div  className="card">
                <h3>{recipe.title}</h3>
                <img  onClick ={goToRecipe} src={recipe.photo} alt=""/>
                <div>Ingredients: {recipe.ingredients}</div>
                <div>Preparation time: {recipe.preparation} </div>
                <div>Steps: {recipe.steps}</div>
                <button onClick={addToFavorites}>Add To Favorites</button>
            </div>


        </div>
    );
};

export default AllRecipesView;