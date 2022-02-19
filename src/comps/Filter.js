import {useContext, useRef} from 'react';
import MainContext from "../MainContext/MainContext";

const Filter = () => {

    const {
        setIngredientFilter,
        setIngredientAmountFilter,
        setPreparationTimeFilter,
        setReviewsCountFilter,
        setAverageRatingFilter,



    } = useContext(MainContext)



    const IngredientFilterRef = useRef()
    const IngredientAmountFilterRef = useRef()
    const PreparationTimeFilterRef = useRef()
    const ReviewsCountFilterRef = useRef()
    const AverageRatingFilterRef = useRef()

    function filter() {

        setIngredientFilter(IngredientFilterRef.current.value)
        setIngredientAmountFilter(IngredientAmountFilterRef.current.value)
        setPreparationTimeFilter(PreparationTimeFilterRef.current.value)
        setReviewsCountFilter(ReviewsCountFilterRef.current.value)
        setAverageRatingFilter(AverageRatingFilterRef.current.value)

        IngredientFilterRef.current.value  = ""
        IngredientAmountFilterRef.current.value  = ""
        PreparationTimeFilterRef.current.value  = ""
        ReviewsCountFilterRef.current.value  = ""
        AverageRatingFilterRef.current.value  = 0

    }


    function showAll() {

        setIngredientFilter("")
        setIngredientAmountFilter("")
        setPreparationTimeFilter("")
        setReviewsCountFilter("")
        setAverageRatingFilter("")
    }



    return (
        <div>

            <div>
                <input ref={IngredientFilterRef} placeholder="Ingredient filter" type="text"/>
                <input ref={IngredientAmountFilterRef} placeholder="Ingredient amount filter" type="number"/>
                <input ref={PreparationTimeFilterRef} placeholder="Preparation time filter" type="number"/>
                <input ref={ReviewsCountFilterRef} placeholder="Reviews Count filter" type="number"/>
                <input ref={AverageRatingFilterRef}  placeholder="Average Rating filter"  min="0" max="5" step="1" type="range"defaultValue={0}/>
            </div>
            <div>
                <button onClick={showAll}>Show all recipes</button>
                <button onClick={filter}>Filter</button>
            </div>

        </div>
    );
};

export default Filter;