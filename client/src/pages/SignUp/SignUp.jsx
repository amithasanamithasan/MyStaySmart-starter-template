import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'

import { imageUploadimgbb } from '../../API/utils';
import useAuth from"../../hooks/useAuth";
import { getToken, saveUser } from '../../API/auth';

import {toast} from 'react-hot-toast';
const SignUp = () => {
  const navigate = useNavigate()
  const { createUser, updateUserProfile, signInWithGoogle}=useAuth();

const handelsignup= async event=>{
  event.preventDefault();
 const form =event.target;
 const name= form.name.value;
 const email= form.email.value;
 const password =form.password.value;

 const image= form.image.files[0];
//  formData baniea image pathie te hobe 
try{
  // image upload
  const imageData =await imageUploadimgbb(image)
  // console.log(imageDtata);
  // user registration
  const result = await createUser(email,password)
console.log(result);
// save user name Profile photo
  await updateUserProfile(name, imageData?.data?.display_url)
// save user data in database
const dbResponse= await saveUser(result?.user)
console.log(dbResponse);

// get token
await getToken(result?.user?.email)
navigate('/');
toast.success('SignUp Successful')



}catch(err){
  console.log(err);
  toast.error(err?.message);
}

//  console.log(name,email,password,image);
}


  return (
    <div className='flex justify-center items-center min-h-screen bg-green-200'>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-black text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold text-white'>Sign Up</h1>
          <p className='text-sm text-white'>Welcome to StaySmart</p>
        </div>
        <form onSubmit={handelsignup}
          noValidate=''
          action=''
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm text-white'>
                Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Enter Your Name Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <label htmlFor='image' className='block mb-2 text-sm text-white'>
                Select Image:
              </label>
              <input className='border-x-2 border-y-2 border-cyan-300 p-2 rounded-md'
                required
                type='file'
                id='image'
                name='image'
                accept='image/*'
              />
            </div>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm text-white'>
                Email address
              </label>
              <input
                type='email'
                name='email'
                id='email'
                required
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <div className='flex justify-between'>
                <label htmlFor='password' className='text-sm mb-2 text-white'>
                  Password
                </label>
              </div>
              <input
                type='password'
                name='password'
                autoComplete='new-password'
                id='password'
                required
                placeholder='*******'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
              />
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='bg-rose-500 w-full rounded-md py-3 text-white'
            >
              Continue
            </button>
          </div>
        </form>
        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-sm dark:text-gray-400 text-white' >
            Signup with social accounts
          </p>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>
        <div className='flex justify-center items-center space-x-2 border m-3 p-2 border-blue-500 rounded-md cursor-pointer'>
          <FcGoogle size={32} />

          <p className='text-white '>Continue with Google</p>
        </div>
        <p className='px-6 text-center text-white  text-base'>
          Already have an account?{' '}
          <Link
            to='/login'
            className='hover:underline hover:text-rose-500 text-gray-600'
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

export default SignUp
