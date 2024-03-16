

const Cook = () => {
    return (
        <div className="w-[550px] border border-[#28282833] rounded-2xl p-8">
            {/* cook area */}
            <h2 className="text-2xl font-semibold text-center pb-4">Want to cook: 01</h2>
            <hr className="pb-6" />
            <div>
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
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>                            
                                <td><button className="py-2 px-4 back-original text-white rounded-full hover:text-[#ED0066] hover:bg-pink-100 hover:border-none">Preparing</button></td>                                
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* preparing area */}
            <h2 className="text-2xl font-semibold text-center pb-4 mt-8">Want to cook: 02</h2>
            <hr className="pb-6" />
            <div>
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
                        <tbody>
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
    );
};

export default Cook;