import auth from '../../firebase.init';
import React from 'react'
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile} from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Loading from "../../Pages/Shared/Loading/Loading"
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../../Hooks/useToken';

const Signup = () => {
     const navigate=useNavigate();
    //email password Login
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async data => {
      await createUserWithEmailAndPassword(data.email, data.password);
      await updateProfile({ displayName: data.name });
  }
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth)
      const [
        signInWithGoogle, 
        guser, 
        gloading, 
        gerror] = useSignInWithGoogle(auth);
      //{sendEmailVerification: true});
      const [updateProfile, updating, upError] = useUpdateProfile(auth);
      const[token]=useToken(user ||guser);
    let signInError;

    if ( error || upError ||gerror) {
      signInError=<p className='text-red-700 bold'>{error?.message || upError?.message}</p>
    }

    if(loading || updating ||gloading)
    {
      return <Loading></Loading>
    }
    if(token)
    {
      navigate('/appoinment');
    }
  return (
    <div class="flex justify-center items-center mt-7">
      <div class="card w-96 bg-base-100 shadow-2xl">
        <div class="card-body">
           <h2 class=" text-4xl text-center text-secondary">Please SignUp !!!</h2>
           <form onSubmit={handleSubmit(onSubmit)}>
           <div class="form-control w-full max-w-xs">
           <label class="label">
               <span class="label-text">Your Name</span>
           </label>
           <input 
               {...register("name",{
                  required:{
                     value:true,
                     message:"Name is required"
                    }
                })}     
                type="text" 
                placeholder="Enter Your Name" 
                class="input input-bordered w-full max-w-xs border-secondary" />
              <label class="label">
              {errors.name?.type === 'required' && <span className="label-text-alt text-red-700">{errors.name.message}</span>}
              </label>
          </div>
             <div class="form-control w-full max-w-xs">
           <label class="label">
               <span class="label-text">Your Email</span>
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
              <span className="label-text">Your Password</span>
             </label>
            <input
            type="password"
            placeholder="Enter Password"
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
      <input value="SignUp"class="btn w-full max-w-xs text-white" type="submit"/>
      </div>
    </form>
    <p class="text-center">Already Have an Account? <Link class="text-secondary" to="/login">Login</Link></p>
    <div class="divider">OR</div>
    <button onClick={() =>signInWithGoogle()}class="btn btn-outline">Connect With Google</button>
  </div>
</div>
    </div>
  )
}

export default Signup