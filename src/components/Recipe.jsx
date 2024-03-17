import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import Item from "./Item";


const Recipe = ({ handleAddToCooks }) => {

    const [menu, setMenu] = useState([])

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => setMenu(data))
    }, [])

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:w-2/3">
            {
                menu.map((item, idx) => <Item key={idx} item={item} handleAddToCooks={handleAddToCooks}></Item>)
            }
        </div>
    );
};


Recipe.propTypes = {
    handleAddToCooks: PropTypes.func.isRequired
}


export default Recipe;