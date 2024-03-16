import { useEffect, useState } from "react";
import Item from "./Item";


const Recipe = () => {

    const [menu, setMenu] = useState([])

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => setMenu(data))
    }, [])

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:w-2/3">
            {
                menu.map((item, idx) => <Item key={idx} item={item}></Item>)
            }
        </div>
    );
};

export default Recipe;