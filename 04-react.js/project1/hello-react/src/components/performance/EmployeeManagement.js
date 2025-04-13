import React from 'react'

export default function EmployeeManagement() {

    const employees = [
        { id: 101, name: 'Bala', salary: 1000 },
        { id: 102, name: 'Peter', salary: 2000 },
        { id: 103, name: 'Mohammed', salary: 3000 },
    ]


    return (
        <div>
            <h3>Employee Management System</h3>
            {
                employees.map((emp) => {
                    return <div>
                        {emp.id} {emp.name} {emp.salary}
                    </div>
                })
            }
        </div>
    )
}
