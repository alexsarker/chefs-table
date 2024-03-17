import { useState } from 'react';
import PropTypes from 'prop-types';

const Cook = ({ cooks, setCooks }) => {
    const [preparingItems, setPreparingItems] = useState([]);
    const [totalTime, setTotalTime] = useState(0);
    const [totalCalories, setTotalCalories] = useState(0);

    const handleToPass = (idx) => {
        const itemToPrepare = cooks[idx];

        setPreparingItems([...preparingItems, itemToPrepare]);

        const timeNumber = parseInt(itemToPrepare.preparing_time);
        setTotalTime(prevTotal => prevTotal + timeNumber);

        const calorieNumber = parseInt(itemToPrepare.calories);
        setTotalCalories(prevTotal => prevTotal + calorieNumber);

        const updatedCooks = cooks.filter((_, index) => index !== idx);
        setCooks(updatedCooks);
    };


    return (
        <span>
            <div className="max-w-[550px] border border-[#28282833] rounded-2xl p-10 my-8 lg:my-0">
                <div>
                    <h2 className="text-2xl original font-semibold text-center pb-4">
                        Want to cook: {cooks.length}
                    </h2>
                    <hr className="pb-6" />
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead className="text-base font-medium text-[#878787]">
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Calories</th>
                                    <th></th>
                                </tr>
                            </thead>
                            {cooks.map((cook, idx) => (
                                <tbody key={idx} className="bg-pink-50">
                                    <tr>
                                        <th>{idx + 1}</th>
                                        <td>{cook.recipe_name}</td>
                                        <td>{cook.preparing_time}</td>
                                        <td>{cook.calories}</td>
                                        <td>
                                            <button onClick={() => handleToPass(idx)} className="py-2 px-4 back-original text-white rounded-full hover:text-[#ED0066] hover:bg-pink-100 hover:border-none">
                                                Preparing
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            ))}
                        </table>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl original font-semibold text-center pb-4 mt-8">
                        Currently cooking: {preparingItems.length}
                    </h2>
                    <hr className="pb-6" />
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead className="text-base font-medium text-[#878787]">
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Calories</th>
                                    <th></th>
                                </tr>
                            </thead>
                            {preparingItems.map((cook, idx) => (
                                <tbody key={idx} className="bg-pink-50">
                                    <tr>
                                        <th>{idx + 1}</th>
                                        <td>{cook.recipe_name}</td>
                                        <td>{cook.preparing_time}</td>
                                        <td>{cook.calories}</td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            ))}
                        </table>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 items-center mt-10">
                    <p className="font-medium text-[#282828CC]">Total Time = {totalTime} mins</p>
                    <p className="font-medium text-[#282828CC]">Total Calories = {totalCalories} cals</p>
                </div>
            </div>
        </span>
    );
};

Cook.propTypes = {
    cooks: PropTypes.array,
    setCooks: PropTypes.func
};

export default Cook;
