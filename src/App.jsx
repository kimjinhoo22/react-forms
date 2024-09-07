
import './App.css'
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" name="email" ref={register} />
        <input type="password" name="password" ref={register} />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default App
