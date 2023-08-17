import './events.css';
 
// Example of a data array that
// you might receive from an API
const data = [
    { name: "2023-01-01", age: 19, gender: 10.00 },
    { name: "2023-01-01", age: 19, gender: 12.25 },
    { name: "2023-01-01", age: 25, gender: 13.60 },
]
 
function Events() {
    return (
        <div className="App">
            <table>
                <tr>
                    <th className="header">Date</th>
                    <th className="header">Cost</th>
                    <th className="header">Distance</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.name}</td>
                            <td>{val.age}</td>
                            <td>{val.gender}</td>
                        </tr>
                    )
                })}
                <tr>
                    <th className="total">Name</th>
                    <th className="total">Age</th>
                    <th className="total">Gender</th>
                </tr>
            </table>
        </div>
    );
}
 
export default Events;