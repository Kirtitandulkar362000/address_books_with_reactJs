import React,{useState} from 'react'
import {  useNavigate } from 'react-router-dom';

const Create = () => {
    const [addresses, setAddresses] = useState([]);
    const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();
    const handleName = (event) => {
        setName(event.target.value);
      };
    
      const handleAge = (event) => {
        setAge(event.target.value);
      };
    
      const handleGender = (event) => {
        setGender(event.target.value);
      };
    
      const handleNumber = (event) => {
        setNumber(event.target.value);
      };
    
      const handleAddress = (event) => {
        setAddress(event.target.value);
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        
      };
      const AddAddressBook = () => {
        const url = 'http://127.0.0.1:3000/api/v1/addressbooks/create';
        fetch(url, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            address: {
              name,
              age,
              gender,
              address,
              contact_number: number,
            }
          })
        })
          .then(response => response.json())
          .then(() => {
            const data = {
              name,
              age,
              gender,
              address,
              contact_number: number
            };
            setAddresses([...addresses, data]);
            setName('');
            setAge('');
            setGender('');
            setNumber('');
            setAddress('');
            navigate('/');
            alert('data added successfully')
          })
          .catch(error => {
            console.log(error);
          });
      };

      
  return (
    <div className='container'>
        <div className='text-center mt-5 mb-5' id='title'>
            Add your details
        </div>
       <div className="row d-flex justify-content-center ">
      <div className="card" id='Card'>
        
        <form  onSubmit={handleSubmit}>
          <div className='mt-3'>
            <input type="text" placeholder='Enter your name' value={name} onChange={handleName} className='form-control rounded-0' />
          </div>
          <div className='mt-3'>
            <input type="number" placeholder='Enter your age' value={age} onChange={handleAge} className='form-control rounded-0' />
          </div>
          <div className='mt-3 d-flex justify-content-around'>
            <input type="radio" id="male" value="male" checked={gender === 'male'} onChange={handleGender} />
            <label htmlFor="male">Male</label>
            <input type="radio" id="female" value="female" checked={gender === 'female'} onChange={handleGender} />
            <label htmlFor="female">Female</label>
            <input type="radio" id="other" value="other" checked={gender === 'other'} onChange={handleGender} />
            <label htmlFor="other">Other</label></div>
          <div className='mt-3'>
            <input type="number" placeholder='Enter your number' value={number} onChange={handleNumber} className='form-control rounded-0' />
          </div>
          <div className='mt-3'>
            <input type="text" placeholder='Enter your address' value={address} onChange={handleAddress} className='form-control rounded-0' />
          </div>
          <div className='mt-3 text-center'>
            
            <button type='submit' className='btn btn-dark rounded-pill' onClick={AddAddressBook}>Add</button>
          </div>
        </form>
      </div>
      </div>
    </div>
  )
}

export default Create
