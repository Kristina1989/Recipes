import './App.css';
import {useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainContext from "./MainContext/MainContext";
import Toolbar from "./comps/Toolbar";
import CreateRecipePage from "./Pages/CreateRecipePage";
import AllRecipesPage from "./Pages/AllRecipesPage";
import SingleRecipePage from "./Pages/SingleRecipePage";
import FavoritesPage from "./Pages/FavoritesPage";

function App() {


    const [getPage, setPage] = useState("")
    const [getRecipe, setRecipe] = useState([])
    const [getFavorite, setFavorite] = useState([])
    const [getPhoto, setPhoto] = useState([])
    const [getIngredient, setIngredient] = useState([])
    const [getSteps, setSteps] = useState([])
    const [getReviews, setReviews] = useState ([])
    const [getRating, setRating] = useState ([])





    return (
    <div className="App">

        <MainContext.Provider value={{
            getRecipe, setRecipe,
            getPage, setPage,
            getFavorite, setFavorite,
            getPhoto, setPhoto,
            getIngredient, setIngredient,



        }}>
            <BrowserRouter>
                <Toolbar page={getPage} />
                <Routes>
                    <Route path="/" element={<CreateRecipePage/>}/>
                    <Route path="/recipes" element={<AllRecipesPage/>}/>

                    <Route path="/recipe/:title" element={<SingleRecipePage/>}/>
                    <Route path="/favorites" element={<FavoritesPage/>}/>

                </Routes>
            </BrowserRouter>

        </MainContext.Provider>


    </div>
  );
}

export default App;
