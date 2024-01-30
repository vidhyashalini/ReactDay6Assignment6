import React from 'react';

function EmployeeTable() {
  // a. Create an array of employee objects
  const employees = [
    { id: 1, name: 'Ashika', position: 'Software Engineer', salary: 90000 },
    { id: 2, name: 'Arvind', position: 'Cybersecurity Manager', salary: 70000 },
    { id: 3, name: 'Rithi', position: 'Product Manager', salary: 80000 },
    // Add more employee objects as needed
  ];

  // c. Object iteration technique to generate rows and cells
  const renderTableRows = () => {
    return employees.map((employee) => {
      return (
        <tr key={employee.id}>
          {Object.entries(employee).map(([key, value]) => (
            <td key={key}>{value}</td>
          ))}
        </tr>
      );
    });
  };

  // b. Display the data in table format
  return (
    <div>
      <h2>Employee Table</h2>
      <table border="1">
        <thead>
          <tr>
            {Object.keys(employees[0]).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;