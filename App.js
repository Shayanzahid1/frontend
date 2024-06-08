import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({
    trans_date_trans_time: '',
    cc_num: '',
    merchant: '',
    category: '',
    amt: '',
    first: '',
    last: '',
    gender: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    lat: '',
    long: '',
    city_pop: '',
    job: '',
    dob: '',
    trans_num: '',
    unix_time: '',
    merch_lat: '',
    merch_long: '',
    is_fraud: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/predict', formData);
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Transaction Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Transaction Date and Time:</label>
          <input type="text" name="trans_date_trans_time" value={formData.trans_date_trans_time} onChange={handleChange} />
        </div>
        <div>
          <label>Credit Card Number:</label>
          <input type="text" name="cc_num" value={formData.cc_num} onChange={handleChange} />
        </div>
        <div>
          <label>Merchant:</label>
          <input type="text" name="merchant" value={formData.merchant} onChange={handleChange} />
        </div>
        <div>
          <label>Category:</label>
          <input type="text" name="category" value={formData.category} onChange={handleChange} />
        </div>
        <div>
          <label>Amount:</label>
          <input type="number" step="0.01" name="amt" value={formData.amt} onChange={handleChange} />
        </div>
        <div>
          <label>First Name:</label>
          <input type="text" name="first" value={formData.first} onChange={handleChange} />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" name="last" value={formData.last} onChange={handleChange} />
        </div>
        <div>
          <label>Gender:</label>
          <input type="text" name="gender" value={formData.gender} onChange={handleChange} />
        </div>
        <div>
          <label>Street:</label>
          <input type="text" name="street" value={formData.street} onChange={handleChange} />
        </div>
        <div>
          <label>City:</label>
          <input type="text" name="city" value={formData.city} onChange={handleChange} />
        </div>
        <div>
          <label>State:</label>
          <input type="text" name="state" value={formData.state} onChange={handleChange} />
        </div>
        <div>
          <label>Zip Code:</label>
          <input type="number" name="zip" value={formData.zip} onChange={handleChange} />
        </div>
        <div>
          <label>Latitude:</label>
          <input type="number" step="0.0001" name="lat" value={formData.lat} onChange={handleChange} />
        </div>
        <div>
          <label>Longitude:</label>
          <input type="number" step="0.0001" name="long" value={formData.long} onChange={handleChange} />
        </div>
        <div>
          <label>City Population:</label>
          <input type="number" name="city_pop" value={formData.city_pop} onChange={handleChange} />
        </div>
        <div>
          <label>Job:</label>
          <input type="text" name="job" value={formData.job} onChange={handleChange} />
        </div>
        <div>
          <label>Date of Birth:</label>
          <input type="text" name="dob" value={formData.dob} onChange={handleChange} />
        </div>
        <div>
          <label>Transaction Number:</label>
          <input type="text" name="trans_num" value={formData.trans_num} onChange={handleChange} />
        </div>
        <div>
          <label>Unix Time:</label>
          <input type="number" name="unix_time" value={formData.unix_time} onChange={handleChange} />
        </div>
        <div>
          <label>Merchant Latitude:</label>
          <input type="number" step="0.0001" name="merch_lat" value={formData.merch_lat} onChange={handleChange} />
        </div>
        <div>
          <label>Merchant Longitude:</label>
          <input type="number" step="0.0001" name="merch_long" value={formData.merch_long} onChange={handleChange} />
        </div>
        <div>
          <label>Is Fraud:</label>
          <input type="number" name="is_fraud" value={formData.is_fraud} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

