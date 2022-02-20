import React, {useContext, useEffect} from 'react';
import CreateRecipe from "../comps/CreateRecipe";
import MainContext from "../MainContext/MainContext";

const CreateRecipePage = () => {

    const {setPage} = useContext(MainContext)

    useEffect(() => {
        setPage('/')
    }, [])



    return (
        <div>
            <CreateRecipe/>
        </div>
    );
};

export default CreateRecipePage;