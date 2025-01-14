import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { signin} from '../api/Auth';
import { authenticate } from '../utils/LocalStorage';

type TypeInputs = {
    email: string,
    password: string
}

const Signin = () => {
    const { register, handleSubmit, formState: { errors }} = useForm<TypeInputs>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<TypeInputs> = async data => {
        const {data : user} = await signin(data);
        localStorage.setItem("user", JSON.stringify(user))
        authenticate(user, () => {
            navigate('/');
        })
    }
    return (
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm ml-[35%] mt-[5rem]">
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group mb-6">
            <label htmlFor="exampleInputEmail2" className="form-label inline-block mb-2 text-gray-700">Email address</label>
            <input type="email" className="form-control
            block
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
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter email"  {...register('email')}/>
            </div>
            <div className="form-group mb-6">
            <label htmlFor="exampleInputPassword2" className="form-label inline-block mb-2 text-gray-700">Password</label>
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
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword2" placeholder="Password" {...register('password')} />
            </div>
            <div className="flex justify-between items-center mb-6">
            <div className="form-group form-check">
                <input type="checkbox" className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" id="exampleCheck2" />
                <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck2">Remember me</label>
            </div>
            <a href="#!" className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Lấy lại mật khẩu</a>
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
        ease-in-out">Sign in</button>
            <p className="text-gray-800 mt-6 text-center">Bạn chưa có tài khoản<a href="/signup" className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Đăng ký tài khoản</a>
            </p>
        </form>
        </div>
    )
}

export default Signin