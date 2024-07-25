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
    <form onSubmit={handleSubmit}  >
      <div className = "form-ele" >
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
      {/* <label className = "label" >
        Date of Joining:
        <input
          type="date"
          name="dateOfJoining"
          value={formData.dateOfJoining}
          onChange={handleChange}
          required
        />
      </label> */}
      {/* <label className = "label" >
        Address:
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </label> */}
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
      </div>

      <div>
      <button type="submit">Generate Payslip</button>
      </div>

      
    
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
