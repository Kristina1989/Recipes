import MainContext from "../MainContext/MainContext";
import {useContext, useRef} from 'react'
import CarouselComponent from "./Carouselle";
import Rating from '@mui/material/Rating';



const SingleRecipeView = ({recipe}) => {

    const {getFavorite, setFavorite, setRating, getRating, value, setValue} = useContext(MainContext)


    function addToFavorites() {

        if (getFavorite.find(x => x.title === recipe.title)) {
            setFavorite([...getFavorite])
        } else {
            setFavorite([...getFavorite, recipe])
        }
    }

    const commentRef = useRef()




    function submitComment() {
        if (value >= 1 && commentRef.current.value.length > 0) {
            recipe.reviews.push({rating: value, comment: commentRef.current.value})
            recipe.avgRating = Math.round(recipe.reviews.map(x=>x.rating).reduce((a,b) => (a+b)) / recipe.reviews.length)
            setValue(null)
        }

    }




    return (
        <div className="d-flex j-center">

            <div className="card d-flex a-center j-center">
                <div>
                    <h2>{recipe.title}</h2>
                    <Rating
                        name="simple-controlled"
                        value={recipe.avgRating} readOnly
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    />
                    <div className="d-flex column a-center j-center">
                        <CarouselComponent recipe={recipe}/>
                    </div>
                </div>
                <div>
                    <h3>Ingredients:</h3>
                    <ul>
                        {recipe.ingredients.map((x, i) => <li key={i}>{x}</li>)}
                    </ul>
                    <h5>Preparation time: {recipe.preparation} min</h5>
                    <h3>Steps:</h3>
                    <ul>
                        {recipe.steps.map((x, i) => <li key={i}>{x}</li>)}
                    </ul>
                </div>
                <div>
                    {!getFavorite.includes(recipe) && <button onClick={addToFavorites}>Add To Favorites</button>}
                    <h4>Please leave your rating..</h4>
                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    />
                    <div>
                        <input ref={commentRef} type="text" placeholder="Leave your comment here please..."/>
                    </div>
                    <button onClick={submitComment}>Submit</button>
                    {recipe.reviews.map((x, i) => <div key={i}>
                        <Rating name="read-only" value={x.rating} readOnly/>
                        <p>{x.comment}</p>
                    </div>)}
                </div>

            </div>


        </div>
    );
};

export default SingleRecipeView;