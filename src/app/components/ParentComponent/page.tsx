// import React from 'react';
// import PayslipForm from '../PayslipForm/page';


// const ParentComponent = () => {
//   const handleFormSubmit = (formData: FormData) => {
//     console.log('Form data submitted:', formData);
//     // Perform further actions, such as sending the data to a server or generating a payslip
//   };

//   return (
//     <div>
//       <h1>Payslip Generator</h1>
//       <PayslipForm onSubmit={handleFormSubmit} />
//     </div>
//   );
// };

// export default ParentComponent;

// 'use client';
// import React from 'react';
// import { useState } from 'react';

// // Define the FormData interface
// interface FormData {
//   name: string;
//   position: string;
//   salary: string;
//   month: string;
// }

// // PayslipForm component
// const PayslipForm = ({ onSubmit }: { onSubmit: (formData: FormData) => void }) => {
//   const [formData, setFormData] = useState<FormData>({
//     name: '',
//     position: '',
//     salary: '',
//     month: '',
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     onSubmit(formData);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="name"
//         placeholder="Employee Name"
//         value={formData.name}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="text"
//         name="position"
//         placeholder="Position"
//         value={formData.position}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="number"
//         name="salary"
//         placeholder="Monthly Salary"
//         value={formData.salary}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="text"
//         name="month"
//         placeholder="Month"
//         value={formData.month}
//         onChange={handleChange}
//         required
//       />
//       <button type="submit">Generate Payslip</button>
//     </form>
//   );
// };

// // Parent component
// const ParentComponent =  () => {
//   const handleFormSubmit = (formData: FormData) => {
//     console.log('Form data submitted:', formData);

//   };

//   return (
//     <div>
//       <h1>Payslip Generator</h1>
//       <PayslipForm onSubmit={handleFormSubmit} />
//       <h1>Mahesh</h1>
//     </div>
//   );
// };

// export default ParentComponent;

// 'use client';
// import React, { useState } from 'react';
// import './page.css'

// // Define the FormData interface
// interface FormData {
//   name: string;
//   position: string;
//   salary: string;
//   month: string;
// }

// // PayslipForm component
// const PayslipForm = ({ onSubmit }: { onSubmit: (formData: FormData) => void }) => {
//   const [formData, setFormData] = useState<FormData>({
//     name: '',
//     position: '',
//     salary: '',
//     month: '',
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     onSubmit(formData);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="name"
//         placeholder="Employee Name"
//         value={formData.name}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="text"
//         name="position"
//         placeholder="Position"
//         value={formData.position}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="number"
//         name="salary"
//         placeholder="Monthly Salary"
//         value={formData.salary}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="text"
//         name="month"
//         placeholder="Month"
//         value={formData.month}
//         onChange={handleChange}
//         required
//       />
//       <button type="submit">Generate Payslip</button>
//     </form>
//   );
// };

// // Parent component
// const ParentComponent = () => {
//   const [submittedData, setSubmittedData] = useState<FormData[]>([]);

//   const handleFormSubmit = (formData: FormData) => {
//     setSubmittedData([...submittedData, formData]);
//   };

//   return (
//     <div>
//       <h1>Payslip Generator</h1>
//       <PayslipForm onSubmit={handleFormSubmit} />
//       <h2>Submitted Payslips</h2>
//       <ul>
//         {submittedData.map((data, index) => (
//           <li key={index}>
//             <strong>Name:</strong> {data.name}, <strong>Position:</strong> {data.position}, <strong>Salary:</strong> {data.salary}, <strong>Month:</strong> {data.month}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ParentComponent;

// 
'use client';
import React, { useState } from 'react';
import './page.css'

// Define the FormData interface
interface FormData {
  name: string;
  position: string;
  salary: string;
  month: string;
  department: string;
  dateOfJoining: string;
  address: string;
  employeeId: string;
  bankAccount: string;
  taxDeductions: string;
}

// PayslipForm component
const PayslipForm = ({ onSubmit }: { onSubmit: (formData: FormData) => void }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    position: '',
    salary: '',
    month: '',
    department: '',
    dateOfJoining: '',
    address: '',
    employeeId: '',
    bankAccount: '',
    taxDeductions: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className = "form-ele" >
      <label className = "label" >
        Employee Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label className = "label" >
        Position:
        <input
          type="text"
          name="position"
          value={formData.position}
          onChange={handleChange}
          required
        />
      </label>
      <label className = "label" >
        Monthly Salary:
        <input
          type="number"
          name="salary"
          value={formData.salary}
          onChange={handleChange}
          required
        />
      </label>
      <label className = "label" >
        Month:
        <input
          type="text"
          name="month"
          value={formData.month}
          onChange={handleChange}
          required
        />
      </label>
      <label className = "label" >
        Department:
        <input
          type="text"
          name="department"
          value={formData.department}
          onChange={handleChange}
          required
        />
      </label>
      <label className = "label" >
        Date of Joining:
        <input
          type="date"
          name="dateOfJoining"
          value={formData.dateOfJoining}
          onChange={handleChange}
          required
        />
      </label>
      <label className = "label" >
        Address:
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </label>
      <label className = "label" >
        Employee ID:
        <input
          type="text"
          name="employeeId"
          value={formData.employeeId}
          onChange={handleChange}
          required
        />
      </label>
      <label className = "label" >
        Bank Account:
        <input
          type="text"
          name="bankAccount"
          value={formData.bankAccount}
          onChange={handleChange}
          required
        />
      </label>
      <label className = "label" >
        Tax Deductions:
        <input
          type="text"
          name="taxDeductions"
          value={formData.taxDeductions}
          onChange={handleChange}
          required
        />
      </label>
      
      <button type="submit">Generate Payslip</button>
    
    </form>
  );
};

// Parent component
const ParentComponent = () => {
  const [submittedData, setSubmittedData] = useState<FormData[]>([]);

  const handleFormSubmit = (formData: FormData) => {
    setSubmittedData([...submittedData, formData]);
  };

  return (
    <div className="container">
      <h1 className="header">Payslip Generator</h1>
      <PayslipForm onSubmit={handleFormSubmit} />
      <div className="submitted-payslips">
        <h2 className="header">Submitted Payslips</h2>
        <ul>
          {submittedData.map((data, index) => (
            <li key={index}>
              <strong>Name:</strong> {data.name}, <strong>Position:</strong> {data.position}, <strong>Salary:</strong> {data.salary}, <strong>Month:</strong> {data.month}, <strong>Department:</strong> {data.department}, <strong>Date of Joining:</strong> {data.dateOfJoining}, <strong>Address:</strong> {data.address}, <strong>Employee ID:</strong> {data.employeeId}, <strong>Bank Account:</strong> {data.bankAccount}, <strong>Tax Deductions:</strong> {data.taxDeductions}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ParentComponent;
