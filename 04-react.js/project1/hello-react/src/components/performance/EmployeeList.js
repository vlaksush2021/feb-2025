import React from "react";
const EmployeeList = ({ employees }) => {
    console.log("EmployeeList Rendered!");
    return (
        <div>
            {employees.map(emp => (
                <div key={emp.id}>
                    {emp.id} {emp.name} - ${emp.salary}
                </div>
            ))}
        </div>
    );
};
export default EmployeeList;

// export default React.memo(EmployeeList);
