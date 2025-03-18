import React from 'react'
import { useForm } from 'react-hook-form'

function SignUpForm() {
 const { register, handleSubmit, formState :{ errors } }=   useForm();
    return (
        <form onSubmit={handleSubmit((data) => console.log(data))} style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                {...register('email', { required: "email is required", pattern: { value: /^[a-zA-Z0-9_]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "invalid email address" } })}/>
                {errors.email && <span className='text-danger'>{errors.email.message}</span>}
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" 
                {...register('password', { required: "password is required",pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@%$#*!&])[A-Za-z\d@%$#*!&]{8,}$/, message: "password must contain at least one letter and one number" } })}/>
                {errors.password && <span className='text-danger'>{errors.password.message}</span>}
                
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default SignUpForm