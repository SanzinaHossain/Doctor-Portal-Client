import auth from '../../firebase.init';
import React from 'react'
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Loading from "../../Pages/Shared/Loading/Loading"
import { Link, useLocation, useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate=useNavigate();
  const location=useLocation();
  let from=location.state?.from?.pathname || "/";
  //Google Login
  const [
    signInWithGoogle, 
    guser, 
    gloading, 
    gerror] = useSignInWithGoogle(auth); 
    //email password Login
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data =>{ 
      console.log(data);
      signInWithEmailAndPassword(data.email,data.password)
    }
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);
    let signInError;

    if (gerror || error) {
      signInError=<p className='text-red-700 bold'>{error?.message || gerror?.message}</p>
    }

    if(loading || gloading)
    {
      return <Loading></Loading>
    }

    if (guser || user) {
      navigate(from,{replace:true});
    }
  return (
    <div class="flex justify-center items-center mt-7">
      <div class="card w-96 bg-base-100 shadow-2xl">
        <div class="card-body">
           <h2 class=" text-4xl text-center text-secondary">Please Login !!!</h2>
           <form onSubmit={handleSubmit(onSubmit)}>
             <div class="form-control w-full max-w-xs">
           <label class="label">
               <span class="label-text">Email</span>
           </label>
           <input 
               {...register("email",{
                  required:{
                     value:true,
                     message:"Email is required"
                    },
                  pattern:{
                     value:/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                     message:"Provide a Valid email"
                   }
                })}     
                type="email" 
                placeholder="Enter Email" 
                class="input input-bordered w-full max-w-xs border-secondary" />
              <label class="label">
              {errors.email?.type === 'required' && <span className="label-text-alt text-red-700">{errors.email.message}</span>}
              {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-700">{errors.email.message}</span>}
              </label>
          </div>
          <div className="form-control w-full max-w-xs">
             <label className="label">
              <span className="label-text">Password</span>
             </label>
            <input
            type="password"
            placeholder="Password"
          className="input input-bordered border-secondary w-full max-w-xs"
        {...register("password", {
          required: {
            value: true,
            message: 'Password is Required'
            },
             minLength: {
                  value: 6,
                  message: 'Must be 6 characters or longer'
           }
        })}
      />
      <label className="label">
      {errors.password?.type === 'required' && <span className="label-text-alt text-red-700 bold">{errors.password.message}</span>}
      {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-700 bold">{errors.password.message}</span>}
      </label>
      {signInError}
      <input value="Login"class="btn w-full max-w-xs text-white" type="submit"/>
      </div>
    </form>
    <p>New To Doctors Portal <Link class="text-secondary" to="/signup">Create New Account</Link></p>
    <div class="divider">OR</div>
    <button onClick={() =>signInWithGoogle()}class="btn btn-outline">Connect With Google</button>
  </div>
</div>
    </div>
  )
}

export default Login