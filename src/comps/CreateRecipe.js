import {useContext, useRef} from 'react';
import {useNavigate} from "react-router-dom";
import MainContext from "../MainContext/MainContext";


const CreateRecipe = () => {

    const {
        getRecipe, setRecipe,
        getPhoto, setPhoto,
        getIngredient, setIngredient
    } = useContext(MainContext)

    const nav = useNavigate()

    const PhotoRef = useRef()
    const TitleRef = useRef()
    const IngredientsRef = useRef()
    const PreparationRef = useRef()
    const StepsRef = useRef()


    function addRecipe() {

        if (TitleRef.current.value.length > 0
            && IngredientsRef.current.value.length > 0
            && PhotoRef.current.value.includes("http")
            && PreparationRef.current.value.length > 0
            && StepsRef.current.value.length > 0
        ) {
            const recipe = {
                title: TitleRef.current.value,
                ingredients: IngredientsRef.current.value,
                photo: PhotoRef.current.value,
                preparation: PreparationRef.current.value + " min",
                steps: [StepsRef.current.value]
            }

            setRecipe([...getRecipe, recipe])
            nav("/recipes")

        }

    }


    function addMorePhoto() {
        setPhoto([...getPhoto, PhotoRef.current.value])
        console.log(getPhoto)

    }

    function addMoreIngredient() {
       setIngredient([...getIngredient, IngredientsRef.current.value])

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
                    <input defaultValue="3" ref={StepsRef} type="number" placeholder="Steps"/>
                </div>


                <button onClick={addRecipe}>Add Recipe</button>
            </div>

        </div>
    );
};

export default CreateRecipe;