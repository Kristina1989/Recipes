import MainContext from "../MainContext/MainContext";
import {useContext} from 'react'
import CarouselComponent from "./Carouselle";



const SingleRecipeView = ({recipe}) => {



    const {getFavorite, setFavorite} = useContext(MainContext)



    function addToFavorites() {

        if (getFavorite.find(x => x.title === recipe.title)) {
            setFavorite([...getFavorite])
        } else {
            setFavorite([...getFavorite, recipe])
        }
    }



    return (
        <div className="d-flex">

            <div className="card">
                <h3>{recipe.title}</h3>
                <div className="d-flex a-center j-center">
                    <CarouselComponent recipe={recipe}/>
                </div>
                <div>Ingredients: {recipe.ingredients}</div>
                <div>Preparation time: {recipe.preparation}</div>
                <div>Steps: {recipe.steps}</div>
                <button onClick={addToFavorites}>Add To Favorites</button>
            </div>


        </div>
    );
};

export default SingleRecipeView;