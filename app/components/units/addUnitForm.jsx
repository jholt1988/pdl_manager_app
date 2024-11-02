import { forwardRef, useEffect, useRef, useState } from 'react';
import {useAppDispatch} from '../../../lib/hooks'
import { addUnit } from '../../../lib/features/units/unitsSlice'

const AddUnitForm = ({ propertyId, handleOpen}) => {
  
  const [open, setOpen] = useState(false)
  const [unitNumber, setUnitNumber] = useState('');
  const [sizeSqft, setSizeSqft] = useState('');
  const [rentAmount, setRentAmount] = useState('');
  const [status, setStatus] = useState('vacant');
  const [visibility, setVisibility] = useState('hidden')
  
  const dispatch = useAppDispatch();

  handleOpen()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newUnit = {
      property_id: propertyId,
      unit_number: parseInt(unitNumber),
      size_sqft: parseInt(sizeSqft),
      rent_amount: parseFloat(rentAmount),
      status: status,
    };

    // Dispatch the addUnit action
    dispatch(addUnit(newUnit));
    setUnitNumber('');
    setSizeSqft('');
    setRentAmount('');
    setStatus('vacant');
  };

  return (
    
    <form onSubmit={handleSubmit} target='_self' open={open} >
      <input
        type="text"
        placeholder="Unit Number"
        value={unitNumber}
        onChange={(e) => setUnitNumber(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Size (sqft)"
        value={sizeSqft}
        onChange={(e) => setSizeSqft(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Rent Amount"
        value={rentAmount}
        onChange={(e) => setRentAmount(e.target.value)}
        required
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="vacant">Vacant</option>
        <option value="occupied">Occupied</option>
      </select>
      <button type="submit">Add Unit</button>
    </form>
    
  );
}

export default AddUnitForm;
