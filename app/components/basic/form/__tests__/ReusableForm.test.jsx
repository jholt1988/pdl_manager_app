
// ReusableForm.test.jsx
import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { Button } from '@mui/material';
import ReusableForm from '../ReusableForm'; // Adjust the import path as needed
import * as Yup from 'yup';

// Mock TextInput and BasicButton components
jest.mock('../../input/TextInput', () => (props) => <input {...props} />);
jest.mock('../../button/BasicButton', () => (props) => <button {...props}>{props.children}</button>);

describe('ReusableForm', () => {
  const mockOnSubmit = jest.fn((values => console.log(values)));
  const user = userEvent.setup()
  const initialValues = {
    name: '',
    email: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required')
  });

  const fields = [
    { name: 'name', label: 'Name', type: 'text', id:'name' },
    { name: 'email', label: 'Email', type: 'email' ,id:'email'}
  ];

  beforeEach(() => {
 render(
      <ReusableForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={mockOnSubmit}
        fields={fields}
      />
    );
  })
  

  test('renders form fields correctly', () => {
    expect(screen.getByLabelText('Name',{selector:'input'})).toBeInTheDocument();
    expect(screen.getByLabelText('Email', {selector:'input'})).toBeInTheDocument();
  });

  test('shows validation errors on empty submit', async () => {
    fireEvent.click(screen.getByText('Submit'));

    expect(await screen.findByText('Name is required')).toBeInTheDocument();
    expect(await screen.findByText('Email is required')).toBeInTheDocument();
    expect(mockOnSubmit).not.toHaveBeenCalled();
  });

  test('submits the form with correct data', async   () => {
   await fireEvent.change(screen.getByRole('textbox', {name:'Name'}), { target: { value: 'John Doe' } });
    await fireEvent.change(screen.getByRole('textbox', {name:'Email'}), { target: { value: 'john@example.com' } });
    await user.click(screen.getByText('Submit'))
    
    
  
  
   await expect(mockOnSubmit).toHaveBeenCalledWith(
    
     { email: 'john@example.com', name:'John Doe'},
      expect.anything()
      
     
    );
   

})
})
