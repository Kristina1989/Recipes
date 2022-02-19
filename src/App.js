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
    const [getTitleFilter, setTitleFilter] = useState("")
    const [getIngredientFilter, setIngredientFilter] = useState("")
    const [getIngredientAmountFilter, setIngredientAmountFilter] = useState("")
    const [getPreparationTimeFilter, setPreparationTimeFilter] = useState("")
    const [getReviewsCountFilter, setReviewsCountFilter] = useState("")
    const [getAverageRatingFilter, setAverageRatingFilter] = useState("")
    const [value, setValue] = useState(null);





    return (
    <div className="App">

        <MainContext.Provider value={{
            getRecipe, setRecipe,
            getPage, setPage,
            getFavorite, setFavorite,
            getTitleFilter, setTitleFilter,
            getIngredientFilter, setIngredientFilter,
            getIngredientAmountFilter, setIngredientAmountFilter,
            getPreparationTimeFilter, setPreparationTimeFilter,
            getReviewsCountFilter, setReviewsCountFilter,
            getAverageRatingFilter, setAverageRatingFilter,
            value, setValue

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
