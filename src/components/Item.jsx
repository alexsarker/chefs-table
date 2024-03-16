import PropTypes from 'prop-types';
import { IoTimeOutline } from 'react-icons/io5';
import { GoFlame } from 'react-icons/go';

const Item = ({ item, handleAddToCooks }) => {
    const { recipe_name, recipe_image, short_description, ingredients, preparing_time, calories } = item;

    return (
        <div className="card w-96 bg-base-100 p-6 border border-[#28282833] rounded-2xl">
            <figure>
                <img src={recipe_image} className="rounded-xl" alt={recipe_name} />
            </figure>
            <div className="items-center">
                <h2 className="card-title pt-6">{recipe_name}</h2>
                <p className="text-[#878787] py-4">{short_description}</p>
                <hr className="pb-6" />
                <h3 className="text-lg font-medium">Ingredients: {ingredients.length}</h3>
                <ul className="text-[#878787] py-4">
                    {ingredients.map((ingredient, idx) => (
                        <li key={idx}>{ingredient}</li>
                    ))}
                </ul>
                <hr className="pb-6" />
                <div className="flex gap-4 items-center text-[#282828CC] pb-7">
                    <div className="flex gap-2 items-center">
                        <IoTimeOutline />
                        <p>{preparing_time}</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <GoFlame />
                        <p>{calories}</p>
                    </div>
                </div>
                <div className="card-actions">
                    <button onClick={() => handleAddToCooks(item)} className="btn back-original text-white rounded-full hover:text-[#ED0066] hover:bg-pink-100 hover:border-none">
                        Want to Cook
                    </button>
                </div>
            </div>
        </div>
    );
};

Item.propTypes = {
    item: PropTypes.object.isRequired,
    handleAddToCooks: PropTypes.func.isRequired
};

export default Item;
