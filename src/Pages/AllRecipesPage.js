import React, {useEffect, useContext} from 'react';
import MainContext from "../MainContext/MainContext";
import AllRecipesView from "../comps/AllRecipesView";
import Filter from "../comps/Filter";

const AllRecipesPage = () => {

    const {
        getRecipe, setPage,
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

            // be filtro

            if (getIngredientFilter === ""
                && getIngredientAmountFilter === ""
                && getPreparationTimeFilter === ""
                && getReviewsCountFilter === ""
                && Number(getAverageRatingFilter) === 0) {
                return x

            }

            // vienas filtras

            if (getIngredientFilter.length > 0
                && getIngredientAmountFilter === ""
                && getPreparationTimeFilter === ""
                && getReviewsCountFilter === ""
                && Number(getAverageRatingFilter) === 0) {
                return x.ingredients.includes(getIngredientFilter)
            }
            if (getIngredientFilter === ""
                && getIngredientAmountFilter.length > 0
                && getPreparationTimeFilter === ""
                && getReviewsCountFilter === ""
                && Number(getAverageRatingFilter) === 0) {
                return x.ingredients.length === Number(getIngredientAmountFilter)

            }
            if (getIngredientFilter === ""
                && getIngredientAmountFilter === ""
                && getPreparationTimeFilter > 0
                && getReviewsCountFilter === ""
                && Number(getAverageRatingFilter) === 0) {
                return Number(x.preparation) === Number(getPreparationTimeFilter)
            }
            if (getIngredientFilter === ""
                && getIngredientAmountFilter === ""
                && getPreparationTimeFilter === ""
                && getReviewsCountFilter > 0
                && Number(getAverageRatingFilter) === 0) {
                return x.reviews.length === Number(getReviewsCountFilter)
            }
            if (getIngredientFilter === ""
                && getIngredientAmountFilter === ""
                && getPreparationTimeFilter === ""
                && getReviewsCountFilter === ""
                && Number(getAverageRatingFilter) !== 0) {
                return Number(x.avgRating) === Number(getAverageRatingFilter)
            }

            //trys filtrai
            if (getIngredientFilter.length > 0
                && getIngredientAmountFilter.length > 0
                && getPreparationTimeFilter > 0
                && getReviewsCountFilter === ""
                && Number(getAverageRatingFilter) === 0) {
                return x.ingredients.includes(getIngredientFilter)
                    && x.ingredients.length === Number(getIngredientAmountFilter)
                    && Number(x.preparation) === Number(getPreparationTimeFilter)
            }
            if (getIngredientFilter === ""
                && getIngredientAmountFilter.length > 0
                && getPreparationTimeFilter > 0
                && getReviewsCountFilter > 0
                && Number(getAverageRatingFilter) === 0) {
                return x.ingredients.length === Number(getIngredientAmountFilter)
                    && Number(x.preparation) === Number(getPreparationTimeFilter)
                    && x.reviews.length === Number(getReviewsCountFilter)
            }
            if (getIngredientFilter === ""
                && getIngredientAmountFilter === ""
                && getPreparationTimeFilter > 0
                && getReviewsCountFilter > 0
                && Number(getAverageRatingFilter) !== 0) {
                return Number(x.preparation) === Number(getPreparationTimeFilter)
                    && x.reviews.length === Number(getReviewsCountFilter)
                    && Number(x.avgRating) === Number(getAverageRatingFilter)
            }
            if (getIngredientFilter.length > 0
                && getIngredientAmountFilter.length > 0
                && getPreparationTimeFilter === ""
                && getReviewsCountFilter > 0
                && Number(getAverageRatingFilter) === 0) {
                return x.ingredients.includes(getIngredientFilter)
                    && x.ingredients.length === Number(getIngredientAmountFilter)
                    && x.reviews.length === Number(getReviewsCountFilter)

            }
            if (getIngredientFilter.length > 0
                && getIngredientAmountFilter.length > 0
                && getPreparationTimeFilter === ""
                && getReviewsCountFilter === ""
                && Number(getAverageRatingFilter) !== 0) {
                return x.ingredients.includes(getIngredientFilter)
                    && x.ingredients.length === Number(getIngredientAmountFilter)
                    && Number(x.avgRating) === Number(getAverageRatingFilter)
            }
            if (getIngredientFilter.length > 0
                && getIngredientAmountFilter === ""
                && getPreparationTimeFilter > 0
                && getReviewsCountFilter > 0
                && Number(getAverageRatingFilter) === 0) {
                return x.ingredients.includes(getIngredientFilter)
                    && x.ingredients.length === Number(getIngredientAmountFilter)
                    && Number(x.preparation) === Number(getPreparationTimeFilter)
                    && x.reviews.length === Number(getReviewsCountFilter)
                    && Number(x.avgRating) === Number(getAverageRatingFilter)
            }
            if (getIngredientFilter.length > 0
                && getIngredientAmountFilter === ""
                && getPreparationTimeFilter > 0
                && getReviewsCountFilter === ""
                && Number(getAverageRatingFilter) !== 0) {
                return x.ingredients.includes(getIngredientFilter)
                    && x.ingredients.length === Number(getIngredientAmountFilter)
                    && Number(x.preparation) === Number(getPreparationTimeFilter)
                    && x.reviews.length === Number(getReviewsCountFilter)
                    && Number(x.avgRating) === Number(getAverageRatingFilter)
            }
            if (getIngredientFilter === ""
                && getIngredientAmountFilter.length > 0
                && getPreparationTimeFilter > 0
                && getReviewsCountFilter === ""
                && Number(getAverageRatingFilter) !== 0) {
                return x.ingredients.length === Number(getIngredientAmountFilter)
                    && Number(x.preparation) === Number(getPreparationTimeFilter)
                    && Number(x.avgRating) === Number(getAverageRatingFilter)
            }
            if (getIngredientFilter === ""
                && getIngredientAmountFilter.length > 0
                && getPreparationTimeFilter === ""
                && getReviewsCountFilter > 0
                && Number(getAverageRatingFilter) !== 0) {
                return x.ingredients.length === Number(getIngredientAmountFilter)
                    && x.reviews.length === Number(getReviewsCountFilter)
                    && Number(x.avgRating) === Number(getAverageRatingFilter)
            }
            if (getIngredientFilter.length > 0
                && getIngredientAmountFilter === ""
                && getPreparationTimeFilter === ""
                && getReviewsCountFilter > 0
                && Number(getAverageRatingFilter) !== 0) {
                return x.ingredients.includes(getIngredientFilter)
                    && x.reviews.length === Number(getReviewsCountFilter)
                    && Number(x.avgRating) === Number(getAverageRatingFilter)
            }


            // penki filtrai
            if (getIngredientFilter.length > 0
                && getIngredientAmountFilter.length > 0
                && getPreparationTimeFilter > 0
                && getReviewsCountFilter > 0
                && Number(getAverageRatingFilter) !== 0) {
                return x.ingredients.includes(getIngredientFilter)
                    && x.ingredients.length === Number(getIngredientAmountFilter)
                    && Number(x.preparation) === Number(getPreparationTimeFilter)
                    && x.reviews.length === Number(getReviewsCountFilter)
                    && Number(x.avgRating) === Number(getAverageRatingFilter)
            }

            // keturi filtrai
            if (getIngredientFilter === ""
                && getIngredientAmountFilter.length > 0
                && getPreparationTimeFilter > 0
                && getReviewsCountFilter > 0
                && Number(getAverageRatingFilter) !== 0) {
                return x.ingredients.length === Number(getIngredientAmountFilter)
                    && Number(x.preparation) === Number(getPreparationTimeFilter)
                    && x.reviews.length === Number(getReviewsCountFilter)
                    && Number(x.avgRating) === Number(getAverageRatingFilter)
            }

            if (getIngredientFilter.length > 0
                && getIngredientAmountFilter === ""
                && getPreparationTimeFilter > 0
                && getReviewsCountFilter > 0
                && Number(getAverageRatingFilter) !== 0) {
                return x.ingredients.length === Number(getIngredientAmountFilter)
                    && Number(x.preparation) === Number(getPreparationTimeFilter)
                    && x.reviews.length === Number(getReviewsCountFilter)
                    && Number(x.avgRating) === Number(getAverageRatingFilter)
            }
            if (getIngredientFilter.length > 0
                && getIngredientAmountFilter.length > 0
                && getPreparationTimeFilter === ""
                && getReviewsCountFilter > 0
                && Number(getAverageRatingFilter) !== 0) {
                return x.ingredients.includes(getIngredientFilter)
                    && x.ingredients.length === Number(getIngredientAmountFilter)
                    && x.reviews.length === Number(getReviewsCountFilter)
                    && Number(x.avgRating) === Number(getAverageRatingFilter)
            }
            if (getIngredientFilter.length > 0
                && getIngredientAmountFilter.length > 0
                && getPreparationTimeFilter > 0
                && getReviewsCountFilter === ""
                && Number(getAverageRatingFilter) !== 0) {
                return x.ingredients.includes(getIngredientFilter)
                    && x.ingredients.length === Number(getIngredientAmountFilter)
                    && Number(x.preparation) === Number(getPreparationTimeFilter)
                    && Number(x.avgRating) === Number(getAverageRatingFilter)
            }
            if (getIngredientFilter.length > 0
                && getIngredientAmountFilter.length > 0
                && getPreparationTimeFilter > 0
                && getReviewsCountFilter > 0
                && Number(getAverageRatingFilter) === 0) {
                return x.ingredients.includes(getIngredientFilter)
                    && x.ingredients.length === Number(getIngredientAmountFilter)
                    && Number(x.preparation) === Number(getPreparationTimeFilter)
                    && x.reviews.length === Number(getReviewsCountFilter)
            }

            // du filtrai

            if (getIngredientFilter.length > 0
                && getIngredientAmountFilter.length > 0
                && getPreparationTimeFilter === ""
                && getReviewsCountFilter === ""
                && Number(getAverageRatingFilter) === 0) {
                return x.ingredients.includes(getIngredientFilter)
                    && x.ingredients.length === Number(getIngredientAmountFilter)
            }

            if (getIngredientFilter.length > 0
                && getIngredientAmountFilter === ""
                && getPreparationTimeFilter > 0
                && getReviewsCountFilter === ""
                && Number(getAverageRatingFilter) === 0) {
                return x.ingredients.includes(getIngredientFilter)
                    && Number(x.preparation) === Number(getPreparationTimeFilter)

            }
            if (getIngredientFilter.length > 0
                && getIngredientAmountFilter === ""
                && getPreparationTimeFilter === ""
                && getReviewsCountFilter > 0
                && Number(getAverageRatingFilter) === 0) {
                return x.ingredients.includes(getIngredientFilter)
                    && x.reviews.length === Number(getReviewsCountFilter)

            }
            if (getIngredientFilter.length > 0
                && getIngredientAmountFilter === ""
                && getPreparationTimeFilter === ""
                && getReviewsCountFilter === ""
                && Number(getAverageRatingFilter) !== 0) {
                return x.ingredients.includes(getIngredientFilter)
                    && Number(x.avgRating) === Number(getAverageRatingFilter)
            }
            if (getIngredientFilter === ""
                && getIngredientAmountFilter.length > 0
                && getPreparationTimeFilter > 0
                && getReviewsCountFilter === ""
                && Number(getAverageRatingFilter) === 0) {
                return x.ingredients.length === Number(getIngredientAmountFilter)
                    && Number(x.preparation) === Number(getPreparationTimeFilter)

            }
            if (getIngredientFilter === ""
                && getIngredientAmountFilter === ""
                && getPreparationTimeFilter > 0
                && getReviewsCountFilter > 0
                && Number(getAverageRatingFilter) === 0) {
                return Number(x.preparation) === Number(getPreparationTimeFilter)
                    && x.reviews.length === Number(getReviewsCountFilter)

            }
            if (getIngredientFilter === ""
                && getIngredientAmountFilter === ""
                && getPreparationTimeFilter === ""
                && getReviewsCountFilter > 0
                && Number(getAverageRatingFilter) !== 0) {
                return x.reviews.length === Number(getReviewsCountFilter)
                    && Number(x.avgRating) === Number(getAverageRatingFilter)
            }
            if (getIngredientFilter === ""
                && getIngredientAmountFilter.length > 0
                && getPreparationTimeFilter === ""
                && getReviewsCountFilter > 0
                && Number(getAverageRatingFilter) === 0) {
                return x.ingredients.length === Number(getIngredientAmountFilter)
                    && x.reviews.length === Number(getReviewsCountFilter)

            }
            if (getIngredientFilter === ""
                && getIngredientAmountFilter.length > 0
                && getPreparationTimeFilter === ""
                && getReviewsCountFilter === ""
                && Number(getAverageRatingFilter) !== 0) {
                return x.ingredients.length === Number(getIngredientAmountFilter)
                    && Number(x.avgRating) === Number(getAverageRatingFilter)
            }
            if (getIngredientFilter === ""
                && getIngredientAmountFilter === ""
                && getPreparationTimeFilter > 0
                && getReviewsCountFilter === ""
                && Number(getAverageRatingFilter) !== 0) {
                return Number(x.preparation) === Number(getPreparationTimeFilter)
                    && Number(x.avgRating) === Number(getAverageRatingFilter)
            }


        }
    )


    return (
        <div className="d-flex wrap">
            <Filter/>
            {filtered.map((x, index) => <AllRecipesView index={index} recipe={x} key={index}/>)}
        </div>
    );
};

export default AllRecipesPage;