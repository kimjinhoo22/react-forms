import React from "react";
import { useForm } from "react-hook-form";

export default function MyForm() {
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
  );
}