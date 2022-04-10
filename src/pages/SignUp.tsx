import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { signup } from '../api/Auth';

type TypeInputs = {
    username: string,
    email: string,
    password: string
}

const Signup = () => {
    const { register, handleSubmit, formState:{errors}} = useForm<TypeInputs>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<TypeInputs> = data => {
        signup(data);
        navigate("/signin");
    }
    return (
            <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group mb-6">
                <input type="username" className="form-control block
            w-full
            px-3
            py-1.=-098765432w1q zXSCDVFGHJKL;'
            6547\
            Ư\
            41
            
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            eae-in-out
            m-0s
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput125" placeholder="Username" {...register("username")}/>
                </div>
                <div className="form-group mb-6">
                <input type="email" className="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            eae-in-out
            m-0s
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput125" placeholder="Email address" {...register('email')}/>
                </div>
                <div className="form-group mb-6">
                <input type="password" className="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput126" placeholder="Password" {...register('password')}/>
                </div>
                <div className="form-group form-check text-center mb-6">
                <input type="checkbox" className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer" id="exampleCheck25" defaultChecked />
                <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck25">Subscribe to our newsletter</label>
                </div>
                <button type="submit" className="
            w-full
            px-6
            py-2.5
            bg-blue-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-blue-700 hover:shadow-lg
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out">Sign up</button>
            </form>
            </div>
    )
}

export default Signup