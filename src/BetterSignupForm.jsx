import { useState } from "react"


function BetterSignupForm(){

 const [formData,setFormData] = useState({firstName : "", lastName : "", password:""})

 const handleChange = (evt) =>{
  const changedField = evt.target.name
  const newValue = evt.target.value
  setFormData(currData => {
    // currData[changedField] = newValue
    // 이전 객체를 키값으로 접근하여 새로운 newValue를 할당
    //그리고 나서 바꾼 currdata를 다시 리턴으로 돌려줌   
    // return {...currData}
    // 두 방법 전부 가능 / 아래가 좀 더 고급 구문
    return {
      ...currData,
      [changedField] : newValue,
    }
  })
 }
 
  const handleSubmit = () =>{
    console.log(formData)
  }
  return (
    <div>
      <label htmlFor="firstname">First name</label>
      <input 
         //useState에서 설정한 객체의 키의 값으로 name을  똑같이 일치 시킬 것.
          name="firstName"
          type="text" 
          placeholder="firstname" 
          value={formData.firstName} 
          onChange={handleChange} 
          id="firstname"/>
      <label htmlFor="lastname">Last name</label>
      <input 
          name="lastName"
          type="text" 
          placeholder="lastname" 
          value={formData.lastName} 
          onChange={handleChange} 
          id="lastname"/>
      <label htmlFor="password">password</label>
      <input 
          name="password"
          type="password" 
          placeholder="password" 
          value={formData.password} 
          onChange={handleChange} 
          id="password"/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default BetterSignupForm