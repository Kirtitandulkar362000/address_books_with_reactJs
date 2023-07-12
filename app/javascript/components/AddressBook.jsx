import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AddressBook = () => {
  const [addresses, setAddresses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const url = 'http://127.0.0.1:3000/api/v1/addressbooks/index';
    fetch(url)
      .then(response => response.json())
      .then(data => setAddresses(data))
      .catch(error => console.log(error));
  }, []);

  


  const handleDeleteContact = async (id) => {
    try {
      await fetch(`http://127.0.0.1:3000/api/v1/destroy/${id}`, { method: 'DELETE' });
      setAddresses(addresses.filter(address => address.id !== id));
    }
    catch (error) {
      console.error(error);
    }

  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredAddresses = addresses.filter((address) =>
  address.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  address.gender.toLowerCase() === searchTerm.toLowerCase()  ||
  address.age.toString().includes(searchTerm)
);

  return (
    <div className='container '>
      <div  className=' row mt-5 mb-5 text-center'>
      <h1>Address Book</h1>
      </div>
      
     <div className="d-flex">
     <Link to='/create'>
        <button className='btn btn-dark rounded-pill'>create</button>
     </Link>
          <input
            type="text"
            className="form-control search-task rounded-0 border-0  "
            placeholder="Search tasks here..."
            value={searchTerm}
            onChange={handleSearch}
            id="searchInput"
          />
        </div>

<table className='table mt-4'>
  <thead>
    <tr>
    <th>Name</th>
    <th>Age</th>
    <th>Gender</th>
    <th>Contect Number</th>
    <th>Address</th>
    <th></th>
    </tr>
  </thead>
  <tbody>
      {filteredAddresses.map((address, index) => (
        <tr key={index}>
          
          <td> {address.name}</td>
          <td>{address.age}</td>
          <td>{address.gender}</td>
          <td>{address.contact_number}</td>
          <td> {address.address}</td>
          <td><button onClick={() => { handleDeleteContact(address.id) }} className='btn btn-outline-danger'>X</button></td>
          </tr>
       
      ))}
      </tbody>
      </table>
    </div>
  );
};

export default AddressBook;