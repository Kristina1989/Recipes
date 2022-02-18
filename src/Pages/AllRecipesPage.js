import React, {useEffect, useContext} from 'react';
import MainContext from "../MainContext/MainContext";
import AllRecipesView from "../comps/AllRecipesView";

const AllRecipesPage = () => {

    const {getRecipe, setPage} = useContext(MainContext)

    useEffect(() => {
        setPage('recipes')
    }, [])


    return (
        <div className="d-flex wrap">
            {getRecipe.map((x,i) => <AllRecipesView recipe={x} key={i}/>)}
        </div>
    );
};

export default AllRecipesPage;