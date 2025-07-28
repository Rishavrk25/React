import React from 'react'
import { useForm } from "react-hook-form"
const App = () => {

  const {
    register, handleSubmit,
    watch,
    formState: { errors ,isSubmitting },
  } = useForm();

  async function onSubmit(data) {
      //  API call ko simulate krte h
      await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("submitting the form ", data);
  }




  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name: </label>
        <input className={errors.firstName ? 'border-2 border-red-700' : 'border'}
          {...register("firstName",
            {
              required: true,
              minLength: { value: 3, message: 'min Len atleast 3' },
              maxLength: { value: 6, message: 'max Len atmost 6' }
            })} />
        {errors.firstName && <p className='text-red-700'>{errors.firstName.message}</p>}

      </div>
      <br />
      <div>
        <label>Middle Name: </label>
        <input className={errors.middleName ? 'border-2 border-red-700' : 'border'}
        {...register("middleName")} />
      </div>
      <br />
      <div>
        <label>Last Name: </label>
        <input className={errors.lastName ? 'border-2 border-red-700' : 'border'}
        {...register("lastName", {
          pattern: {
            value: /^[A-Za-z]+$/i,
            message: "Last Name is not as per the rules"
          }
        })} />
        {errors.lastName && <p className='text-red-700'>{errors.lastName.message}</p>}
      </div>
      <input type="submit" disabled={isSubmitting} value={isSubmitting ? "Submitting":"Submit"}/>
    </form>
  )
}

export default App
