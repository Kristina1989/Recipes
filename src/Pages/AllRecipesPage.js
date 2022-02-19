import React, {useEffect, useContext} from 'react';
import MainContext from "../MainContext/MainContext";
import AllRecipesView from "../comps/AllRecipesView";
import Filter from "../comps/Filter";

const AllRecipesPage = () => {

    const {
        getRecipe, setPage,
        getTitleFilter,
        getIngredientFilter,
        getIngredientAmountFilter,
        getPreparationTimeFilter,
        getReviewsCountFilter,
        getAverageRatingFilter,


    } = useContext(MainContext)

    useEffect(() => {
        setPage('recipes')
    }, [])


    const filtered = getRecipe.filter(x => {
        if (getTitleFilter === "" && getIngredientFilter === ""
            && getIngredientAmountFilter === "" && getPreparationTimeFilter === ""
            && getReviewsCountFilter === "" && getAverageRatingFilter === "") {
            return x

        }
        if (getTitleFilter.length > 0 && getIngredientFilter === ""
            && getIngredientAmountFilter === "" && getPreparationTimeFilter === ""
            && getReviewsCountFilter === "" && getAverageRatingFilter === "") {
            return x.title === getTitleFilter
        }
        if (getTitleFilter=== "" && getIngredientFilter.length > 0
            && getIngredientAmountFilter === "" && getPreparationTimeFilter === ""
            && getReviewsCountFilter === "" && getAverageRatingFilter === "") {
            return x.ingredients.includes(getIngredientFilter)
        }
        if (getTitleFilter=== "" && getIngredientFilter === ""
            && getIngredientAmountFilter.length > 0 && getPreparationTimeFilter === ""
            && getReviewsCountFilter === "" && getAverageRatingFilter === "") {
            return x.ingredients.length === Number(getIngredientAmountFilter)

        }
        if (getTitleFilter=== "" && getIngredientFilter === ""
            && getIngredientAmountFilter === "" && getPreparationTimeFilter > 0
            && getReviewsCountFilter === "" && getAverageRatingFilter === "") {
            return Number(x.preparation) === Number(getPreparationTimeFilter)
        }
        if (getTitleFilter=== "" && getIngredientFilter === ""
            && getIngredientAmountFilter === "" && getPreparationTimeFilter === ""
            && getReviewsCountFilter > 0 && getAverageRatingFilter === "") {
            return x.reviews.length === Number(getReviewsCountFilter)
        }
        if (getTitleFilter=== "" && getIngredientFilter === ""
            && getIngredientAmountFilter === "" && getPreparationTimeFilter === ""
            && getReviewsCountFilter === "" && getAverageRatingFilter > 0) {
            return Number(x.avgRating) === Number(getAverageRatingFilter)
        }





    })




    return (
        <div className="d-flex wrap">
            <Filter/>
            {filtered.map((x, index) => <AllRecipesView index={index} recipe={x} key={index}/>)}
        </div>
    );
};

export default AllRecipesPage;