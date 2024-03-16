import { useState } from 'react';
import PropTypes from 'prop-types';

const Cook = ({ cooks }) => {
    const [thCount, setThCount] = useState(0);

    const incrementThCount = () => {
        setThCount(thCount + 1);
    };

    return (
        <span>
            <div className="max-w-[550px] border border-[#28282833] rounded-2xl p-10 my-8 lg:my-0">
                {/* cook area */}
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
                                <tbody key={idx} className="bg-pink-50" onClick={incrementThCount}>
                                    <tr>
                                        <th>{thCount + idx + 1}</th>
                                        <td>{cook.recipe_name}</td>
                                        <td>{cook.preparing_time}</td>
                                        <td>{cook.calories}</td>
                                        <td>
                                            <button className="py-2 px-4 back-original text-white rounded-full hover:text-[#ED0066] hover:bg-pink-100 hover:border-none">
                                                Preparing
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            ))}
                        </table>
                    </div>
                </div>

                {/* preparing area */}
                <div>
                    <h2 className="text-2xl original font-semibold text-center pb-4 mt-8">
                        Want to cook: 02
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
                            <tbody className="bg-pink-50">
                                <tr>
                                    <th>1</th>
                                    <td>Cy Ganderton</td>
                                    <td>Quality Control Specialist</td>
                                    <td>Blue</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* total area */}
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center mt-10">
                    <p className="font-medium text-[#282828CC]">Total Time = </p>
                    <p className="font-medium text-[#282828CC]">Total Calories = </p>
                </div>
            </div>
        </span>
    );
};

Cook.propTypes = {
    cooks: PropTypes.array
};

export default Cook;
