// import React, { useState } from 'react';

// // Employee component with React.memo
// const Employee = React.memo(({ name }) => {
//   console.log('Rendering Employee:', name);
//   return <div>{name}</div>;
// });

// const EmployeeManagementComponent = () => {
//   const [employees, setEmployees] = useState(["John", "Jane"]);
//   const [companyName, setCompanyName] = useState("ABC Corp");

//   return (
//     <div>
//       <h2>Employee Management (React.memo Example)</h2>
//       <h3>Company: {companyName}</h3>

//       {employees.map((emp, index) => (
//         <Employee key={index} name={emp} />
//       ))}

//       <button onClick={() => setCompanyName("XYZ Ltd")}>
//         Change Company Name
//       </button>
//     </div>
//   );
// };

// export default EmployeeManagementComponent;


// ////useCallback
// import React, { useState, useCallback } from 'react';

// // Add employee button with React.memo
// const AddEmployeeButton = React.memo(({ addEmployee }) => {
//   console.log('Rendering AddEmployeeButton');
//   return <button onClick={addEmployee}>Add Employee</button>;
// });

// const EmployeeManagementComponent = () => {
//   const [employees, setEmployees] = useState(["John", "Jane"]);
//   const [companyName, setCompanyName] = useState("ABC Corp");

//   // addEmployee function using useCallback
//   const addEmployee = useCallback(() => {
//     setEmployees(prev => [...prev, "New Employee"]);
//   }, []);

//   return (
//     <div>
//       <h2>Employee Management (useCallback Example)</h2>
//       <h3>Company: {companyName}</h3>

//       <AddEmployeeButton addEmployee={addEmployee} />

//       {employees.map((emp, index) => (
//         <div key={index}>{emp}</div>
//       ))}

//       <button onClick={() => setCompanyName("XYZ Ltd")}>
//         Change Company Name
//       </button>
//     </div>
//   );
// };

// export default EmployeeManagementComponent;


//useMemo
import React, { useState, useMemo } from 'react';

const EmployeeManagementComponent = () => {
  const [employees, setEmployees] = useState(["John", "Jane"]);
  const [companyName, setCompanyName] = useState("ABC Corp");

  // Memoize total employee count using useMemo
  const totalEmployees = useMemo(() => {
    console.log('Calculating total employees...');
    return employees.length;
  }, [employees]);

  const addEmployee = () => {
    // if(employees.length>5){
    //     return
    // }
    setEmployees(prev => [...prev, "New Employee"]);
  };

  return (
    <div>
      <h2>Employee Management (useMemo Example)</h2>
      <h3>Company: {companyName}</h3>

      <button onClick={addEmployee}>Add Employee</button>

      <h4>Total Employees: {totalEmployees}</h4>

      {employees.map((emp, index) => (
        <div key={index}>{emp}</div>
      ))}

      <button onClick={() => setCompanyName("XYZ Ltd")}>
        Change Company Name
      </button>
    </div>
  );
};

export default EmployeeManagementComponent;
