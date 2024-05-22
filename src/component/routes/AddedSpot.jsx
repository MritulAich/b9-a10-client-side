
const AddedSpot = () => {

    // const {} = spot;

    return (
        <div className="">
            <table className="table ">
                
                <thead>
                    <tr>
                        <th>Spot Name</th>
                        <th>Country</th>
                        <th>Average Cost</th>
                        <th>User Email</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr className="hover">
                        <th>1</th>
                        <td>Rony</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                    </tr>
                    {/* row 2 */}
                    <tr className="hover">
                        <th>2</th>
                        <td>S. Charan</td>
                        <td>Desktop Support Technician</td>
                        <td>Purple</td>
                    </tr>
                    {/* row 3 */}
                    <tr className="hover">
                        <th>3</th>
                        <td>Mishu</td>
                        <td>Tax Accountant</td>
                        <td>Red</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default AddedSpot;