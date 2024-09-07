import { useState } from "react"


function SignupForm(){

  const [firstName, setFirstname]  = useState("")
  const [lastName, setLastname]  = useState("")

  const updatefirstName = (e) => {
    console.log("re-rendered!!")
    setFirstname(e.target.value)
  }
  const updateLastName = (e) => {
    console.log("re-rendered!!")
    setLastname(e.target.value)
  }
  const handleSubmit = (e) =>{
    console.log(firstName, lastName)
  }
  return (
    <div>
      <label htmlFor="firstname">First name</label>
      <input 
          type="text" 
          placeholder="username" 
          value={firstName} 
          onChange={updatefirstName} 
          id="firstname"/>
      <label htmlFor="lastname">Last name</label>
      <input 
          type="text" 
          placeholder="username" 
          value={lastName} 
          onChange={updateLastName} 
          id="lastname"/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default SignupForm