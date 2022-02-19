import {useContext, useRef} from 'react';
import {useNavigate} from "react-router-dom";
import MainContext from "../MainContext/MainContext";


const CreateRecipe = () => {

    const {
        getRecipe, setRecipe,

    } = useContext(MainContext)

    const nav = useNavigate()

    const PhotoRef = useRef()
    const TitleRef = useRef()
    const IngredientsRef = useRef()
    const PreparationRef = useRef()
    const StepsRef = useRef()


    const recipe = {
        title: "",
        ingredients: [],
        photo: [],
        preparation: "",
        steps: [],
        reviews: [],
        avgRating: null

    }


    function addRecipe() {
        if (TitleRef.current.value.length > 0
            && recipe.ingredients.length > 0
            && PhotoRef.current.value.includes("http")
            && recipe.photo.length > 0
            && PreparationRef.current.value.length > 0
            && recipe.steps.length > 0

        ) {

            recipe.title = TitleRef.current.value
            recipe.preparation = PreparationRef.current.value
            setRecipe([...getRecipe, recipe])
            nav("/recipes")

        }

    }


    function addMorePhoto() {
        recipe.photo.push(PhotoRef.current.value)

    }

    function addMoreIngredient() {
       recipe.ingredients.push(IngredientsRef.current.value)
    }

    function addMoreSteps() {
        recipe.steps.push(StepsRef.current.value)
    }



    return (
        <div className="d-flex a-center  j-center column">
            <div className="box d-flex j-center a-center column">
                <h2>CREATE RECIPE</h2>
                <input defaultValue="Plovas" ref={TitleRef} type="text" placeholder="Title"/>
                <div>
                    <input defaultValue="ryziai" ref={IngredientsRef} type="text" placeholder="Ingredients"/>
                    <button onClick={addMoreIngredient}>Add Ingredient</button>
                </div>
                <div>
                    <input defaultValue="https://www.lamaistas.lt/uploads/modules/recipes/thumb920x573/17350.jpg"
                           ref={PhotoRef} type="text" placeholder="Photo"/>
                    <button onClick={addMorePhoto}>Add Photo</button>
                </div>

                <input defaultValue="5" ref={PreparationRef} type="number" placeholder="Preparation Time"/>
                <div>
                    <input defaultValue="isvirti ryzius" ref={StepsRef} type="text" placeholder="Steps"/>
                    <button onClick={addMoreSteps}>Add Step</button>
                </div>


                <button onClick={addRecipe}>Add Recipe</button>
            </div>

        </div>
    );
};

export default CreateRecipe;