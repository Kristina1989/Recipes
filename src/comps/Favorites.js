import {useContext} from 'react';
import MainContext from "../MainContext/MainContext";
import Rating from "@mui/material/Rating";

const Favorites = () => {

    const {getFavorite, setFavorite, setValue} = useContext(MainContext)

    function remove (x, index) {
        const newArr = getFavorite.filter((x, i) => i !== index)
        setFavorite([...newArr])
    }


    return (
        <div className="d-flex column ">

            {getFavorite.map((x, index) =>
                <div key={index} className="card d-flex space-btw a-center">
                    <div>
                        <h2>{x.title}</h2>
                        <div>
                            <Rating
                                readOnly
                                name="simple-controlled"
                                value={x.avgRating}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                            />
                        </div>
                        <img src={x.photo[0]} alt=""/>
                    </div>

                    <div>
                        <h3>Ingredients:</h3>
                        <ul>
                            {x.ingredients.map((x, i) => <li key={i}>{x}</li>)}
                        </ul>
                        <div>Preparation time: {x.preparation}</div>
                        <h3>Steps: </h3>
                        <ul>
                            {x.steps.map((x, i) => <li key={i}>{x}</li>)}
                        </ul>
                    </div>
                    <div>
                        <i onClick={() => remove(x, index)} className="fas fa-trash-alt icon m-10"></i>
                    </div>


                </div>)}


        </div>


    );
};

export default Favorites;