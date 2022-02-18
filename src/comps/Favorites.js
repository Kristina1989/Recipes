import {useContext} from 'react';
import MainContext from "../MainContext/MainContext";

const Favorites = () => {

    const {getFavorite, setFavorite} = useContext(MainContext)

    function remove (x, index) {
        const newArr = getFavorite.filter((x, i) => i !== index)
        setFavorite([...newArr])
    }


    return (
        <div className="d-flex column ">

            {getFavorite.map((x, index) =>
                <div key={index} className="card column d-flex space-btw a-center">
                    <h3>{x.title}</h3>
                    <img src={x.photo} alt=""/>
                    <div>Ingredients: {x.ingredients}</div>
                    <div>Preparation time: {x.preparation}</div>
                    <div>Steps: {x.steps}</div>
                    <div>
                        <i onClick={() => remove(x, index)} className="fas fa-trash-alt icon m-10"></i>
                    </div>


                </div>)}


        </div>


    );
};

export default Favorites;