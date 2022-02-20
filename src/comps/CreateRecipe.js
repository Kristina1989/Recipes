import {useContext, useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";
import MainContext from "../MainContext/MainContext";


const CreateRecipe = () => {

    const [getIngredients, setIngredients] = useState([])
    const [getPhoto, setPhoto] = useState([])
    const [getStep, setStep] = useState([])


    const {
        getRecipe, setRecipe

    } = useContext(MainContext)

    const nav = useNavigate()

    const PhotoRef = useRef()
    const TitleRef = useRef()
    const IngredientsRef = useRef()
    const PreparationRef = useRef()
    const StepsRef = useRef()


    const recipe = {
        title: "",
        ingredients: getIngredients,
        photo: getPhoto,
        preparation: "",
        steps: getStep,
        reviews: [],
        avgRating: null

    }


    function addRecipe() {

        if (TitleRef.current.value !== ""
            && recipe.ingredients.length > 0
            && recipe.photo.length > 0
            && PreparationRef.current.value !== ""
            && recipe.steps.length > 0

        ) {

            recipe.title = TitleRef.current.value
            recipe.preparation = PreparationRef.current.value
            setRecipe([...getRecipe, recipe])
            nav("/recipes")

        }


    }


    function addMorePhoto() {
        if (PhotoRef.current.value.includes("http")) {
            setPhoto([...getPhoto, PhotoRef.current.value])
            // recipe.photo.push(PhotoRef.current.value)
            PhotoRef.current.value = ""
        }

    }

    function addMoreIngredient() {
        if (IngredientsRef.current.value !== "") {
            setIngredients([...getIngredients, IngredientsRef.current.value])
            // recipe.ingredients.push(IngredientsRef.current.value)
            IngredientsRef.current.value = ""

        }

    }

    function addMoreSteps() {
        if (StepsRef.current.value !== "") {
            setStep([...getStep, StepsRef.current.value])
            // recipe.steps.push(StepsRef.current.value)
            StepsRef.current.value = ""
        }
    }

    function removeIngredient (x, index) {
        const newArr = getIngredients.filter((x, i) => i !== index)
        setIngredients([...newArr])
    }

    function removePhoto (x, index) {
        const newArr = getPhoto.filter((x, i) => i !== index)
        setPhoto([...newArr])
    }

    function removeStep (x, index) {
        const newArr = getStep.filter((x, i) => i !== index)
        setStep([...newArr])
    }




        return (
            <div className="d-flex a-center  j-center column">
                <div className="box d-flex j-center a-center column">
                    <h2>CREATE RECIPE</h2>
                    <input defaultValue="" ref={TitleRef} type="text" placeholder="Title"/>

                    <div>
                        <input defaultValue="" ref={IngredientsRef} type="text" placeholder="Ingredients"/>
                        <button onClick={addMoreIngredient}>Add Ingredient</button>
                        <div className="d-flex j-center a-center">
                            {getIngredients.map((x, i) => <div className="colorWhite d-flex a-center border2" key={i}>
                                    <li>{x}</li>
                                    <i onClick={() => removeIngredient(x, i)} className="fas fa-trash-alt icon m-10"></i>
                                </div>
                            )}
                        </div>
                    </div>


                    <div>
                        <input defaultValue="" ref={PhotoRef} type="text" placeholder="Photo"/>
                        <button onClick={addMorePhoto}>Add Photo</button>
                        <div className="d-flex j-center a-center">
                            {getPhoto.map((x, i) => <div className="colorWhite d-flex a-center border2" key={i}>
                                <img className="w50" src={x} alt=""/>
                                    <i onClick={() => removePhoto(x, i)} className="fas fa-trash-alt icon m-10"></i>
                                </div>
                            )}
                        </div>
                    </div>

                    <input defaultValue="" ref={PreparationRef} type="number" placeholder="Preparation Time"/>
                    <div>
                        <input defaultValue="" ref={StepsRef} type="text" placeholder="Steps"/>
                        <button onClick={addMoreSteps}>Add Step</button>
                        <div className="d-flex j-center a-center">
                            {getStep.map((x, i) => <div key={i} className="colorWhite d-flex a-center border2">
                                <li>{x}</li>
                                <i onClick={() => removeStep(x, i)} className="fas fa-trash-alt icon m-10"></i>
                            </div>)}
                        </div>
                    </div>


                    <button onClick={addRecipe}>Add Recipe</button>
                </div>

            </div>
        );
    };

export default CreateRecipe;