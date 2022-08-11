import React, { useState} from 'react'
import { FormRow, Alert } from '../Component/userInfo/Index'
import { useAppContext } from '../context/appContext';

const initialState = {
    fullname : '',
    email: '',
    password: '',
    isMember: true
}


function Register() {
    const [values, setValues] = useState(initialState);

    const {isLoading, showAlert, displayAlert} = useAppContext();
    
    const toggleMember = () => {
        setValues({ ...values, isMember: !values.isMember})
    }

    const handleChange = (e) => {
        e.preventDefault();
        setValues({ ...values, [e.target.name]: e.target.values})
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const { fullname, email, password, isMember } = values;

        if(!email || !password || (!isMember && !fullname)) {
            displayAlert()
            return
        }
        console.log(values);

    }


  return (
    <div class="bg-grey-lighter min-h-screen flex flex-col">
    <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <form onSubmit={submitHandler}>
        <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 class="mb-8 text-3xl text-center">
                {values.isMember ? "Login": "Register"}
            </h1>
            {showAlert && <Alert />}
            {!values.isMember && (
                <FormRow 
                type="text" 
                name="fullname"
                values={values.fullname}
                handleChange={handleChange}
                />
             )}

          <FormRow 
            type="emaily" 
            name="email"
            values={values.email}
            handleChange={handleChange}
             />
             <FormRow 
            type="password" 
            name="password"
            values={values.password}
            handleChange={handleChange}
             />
          
            <div>

            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>
            </div>

            <div>
                {values.isMember ? 'Not a member yet' : 'Already a member'}
            <button 
            type="button" 
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={toggleMember}
            >
                {values.isMember ? 'Register' : 'Login'}
            </button>
            </div>
            
        </div>

        </form>

        <div class="text-grey-dark mt-6">
            Already have an account? 
            <a class="no-underline border-b border-blue text-blue" href="../login/">
                Log in
            </a>
        </div>
    </div>
</div>
  )
}

export default Register