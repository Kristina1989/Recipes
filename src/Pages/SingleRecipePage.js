import {useContext, useEffect} from 'react';
import SingleRecipeView from "../comps/SingleRecipeView";
import {useParams} from "react-router-dom";
import MainContext from "../MainContext/MainContext";


const SingleRecipePage = () => {

    const {getRecipe} = useContext(MainContext)

    const {title} = useParams()

    const recipe = getRecipe.find(x => x.title === title)




    return (
        <div>
            <SingleRecipeView recipe={recipe}/>
        </div>
    );
};

export default SingleRecipePage;