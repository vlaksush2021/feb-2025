import React, { useEffect, useState } from 'react'

export default function Employee() {
 
    const [employees, setEmployees] = useState([]);
    const [error, setError] = useState(null);
  
    // Fetch employee data from the server API
    useEffect(() => {
      fetch('http://localhost:3000/employees')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch employees');
          }
          return response.json();
        })
        .then((data) => {
          setEmployees(data); // Set the employees state with the fetched data
        })
        .catch((err) => {
          setError(err.message); // Handle any errors that occur
        });
    }, []); // Empty array means it runs only once when the component is mounted
  
    return (
      <div>
        <h1>Employee List</h1>
        {error && <p>Error: {error}</p>}
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {employees.length > 0 ? (
              employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.salary}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No employees available.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );

}
