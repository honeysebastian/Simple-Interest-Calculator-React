import { TextField, Stack, Button } from '@mui/material'
import './App.css'
import { useState } from 'react'


function App() {

  const [interest,setInterest]=useState(0)
  const [principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)
  const [isPrincipleInValid, setIsPrincipleInValid] = useState(false)
  const [isRateInValid, setIsRateInValid] = useState(false)
  const [isYearInValid, setIsYearInValid] = useState(false)


  const inputValidation = (tag) => {
    const { name, value } = tag
   
    console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
    if (!!value.match(/^\d*\.?\d+$/)) {
      // valid
      if (name == "principle") {
        setPrinciple(value)
        setIsPrincipleInValid(false)
      }
      else if (name == "rate") {
        setRate(value)
        setIsRateInValid(false)
      } else {
        setYear(value)
        setIsYearInValid(false)
      }

    } else {
      // invalid
      if (name == "principle") {
        setPrinciple(value)
        setIsPrincipleInValid(true)
      }
      else if (name == "rate") {
        setRate(value)
        setIsRateInValid(true)
      }
      else {
        setYear(value)
        setIsYearInValid(true)
      }
    }
  }


  const handleCalculate = (e) => {
    e.preventDefault()
    console.log("calculate button clicked");
    if (principle && rate && year) {
      setInterest((principle*rate*year)/100)
    } else {
      alert("Please fill the form completely!!")
    }
  }

  const handleReset=()=>{

  }

  return (
    <div style={{ minHeight: "100vh", width: "100%" }} className='d-flex justify-content-center align-items-center bg-dark'>
      <div style={{ width: '600px' }} className="bg-light p-5 rounded">
        <h3>Simple Interest Calculator</h3>
        <p>Calculate Your Simple Interest Easily</p>
        <div className='d-flex justify-content-center align-items-center bg-warning p-3 rounded shadow flex-column text-light'>
          <h1>₹ {interest}</h1>
          <p className='fw-bolder'>Total Simple Interest</p>
        </div>
        <form className='mt-5'>
          <div className="mb-3">
            <TextField onChange={e => inputValidation(e.target)} name='principle' className='w-100' id="principle" label="₹ Principle Amount" variant="outlined" />
          </div>
          {isPrincipleInValid && <div className="mb-3 text-danger">Invalid principle amount!!</div>}
          <div className="mb-3">
            <TextField onChange={e => inputValidation(e.target)} className='w-100' name='rate' id="rate" label="Rate of Interest (p.a) %" variant="outlined" />
          </div>
          {isRateInValid && <div className="mb-3 text-danger">Invalid rate!!</div>}

          <div className="mb-3">
            <TextField onChange={e => inputValidation(e.target)} className='w-100' name='year' id="year" label="Time Period (Yr)" variant="outlined" />
          </div>
          {isYearInValid && <div className="mb-3 text-danger">Invalid year!!</div>}

          <Stack direction="row" spacing={2}>
            <Button disabled={isPrincipleInValid || isRateInValid || isYearInValid} type='submit' onClick={handleCalculate} style={{ width: '50%', background: 'black', height: '70px' }} variant="contained">Calculate</Button>
            <Button onClick={handleReset} style={{ width: '50%', height: '70px' }} variant="outlined">RESET</Button>
          </Stack>
        </form>
      </div>
    </div>
  )
}

export default App
