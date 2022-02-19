import {useContext} from 'react';
import MainContext from "../MainContext/MainContext";
import {useNavigate} from "react-router-dom"
import Rating from "@mui/material/Rating";

const AllRecipesView = ({recipe, index}) => {

    const nav = useNavigate()

    const {getFavorite, setFavorite, getRecipe, setRecipe, setValue} = useContext(MainContext)

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

    function deleteRecipe (recipe, index) {
        const newArr = getRecipe.filter((x, i) => i !== index)
        setRecipe([...newArr])
    }


    return (
        <div className="d-flex j-center">

            <div  className="card">
                <div className="d-flex column a-center">
                    <h3>{recipe.title}</h3>
                    <Rating
                        readOnly
                        name="simple-controlled"
                        value={recipe.avgRating}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    />
                </div>
                <img  onClick ={goToRecipe} src={recipe.photo[0]} alt=""/>
                <div>Ingredients: {recipe.ingredients.length}</div>
                <div>Preparation time: {recipe.preparation} min </div>
                <div>Steps: {recipe.steps.length}</div>
                <div>Reviews: {recipe.reviews.length} </div>
                <div>Rating: {recipe.avgRating}</div>
                <div className="d-flex column ">
                    <button onClick={()=>deleteRecipe(recipe, index)}>Delete Recipe</button>
                    {!getFavorite.includes(recipe) && <button onClick={addToFavorites}>Add To Favorites</button>}

                </div>

            </div>


        </div>
    );
};

export default AllRecipesView;