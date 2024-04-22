import { TextField, Stack, Button } from '@mui/material'
import './App.css'
import { useState } from 'react'


function App() {

  const [principle,setPrinciple]=useState(0)
  const [rate,setRate]=useState(0)
  const [year,setYear]=useState(0)

  console.log(principle);

  const inputValidation=(tag)=>{
    console.log(tag);

  }


  const handleCalculate = (e) => {
    e.preventDefault()
    console.log("calculate button clicked");

  }


  return (
    <div style={{ minHeight: "100vh", width: "100%" }} className='d-flex justify-content-center align-items-center bg-dark'>
      <div style={{ width: '600px' }} className="bg-light p-5 rounded">
        <h3>Simple Interest Calculator</h3>
        <p>Calculate Your Simple Interest Easily</p>
        <div className='d-flex justify-content-center align-items-center bg-warning p-3 rounded shadow flex-column text-light'>
          <h1>₹ 1000</h1>
          <p className='fw-bolder'>Total Simple Interest</p>
        </div>
        <form className='mt-5'>
          <div className="mb-3">
            <TextField onChange={e=>inputValidation(e.target)} name='principle' className='w-100' id="principle" label="₹ Principle Amount" variant="outlined" />
          </div>
          <div className="mb-3">
            <TextField className='w-100' id="rate" label="Rate of Interest (p.a) %" variant="outlined" />
          </div>
          <div className="mb-3">
            <TextField className='w-100' id="year" label="Time Period (Yr)" variant="outlined" />
          </div>
          <Stack direction="row" spacing={2}>
            <Button type='submit' onClick={handleCalculate} style={{ width: '50%', background: 'black', height: '70px' }} variant="contained">Calculate</Button>
            <Button style={{ width: '50%', height: '70px' }} variant="outlined">RESET</Button>
          </Stack>
        </form>
      </div>
    </div>
  )
}

export default App
