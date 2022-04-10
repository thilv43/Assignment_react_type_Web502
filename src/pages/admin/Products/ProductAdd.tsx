import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

type ProductAddProps = {
  name: string,
  onAdd: (product: typeInputs) => void
};

type typeInputs= {
  name: string,
  price: number
}

const ProductAdd = (props: ProductAddProps) => {
  const {register, handleSubmit, formState: {errors}} =  useForm<typeInputs>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<typeInputs> = data => {
    props.onAdd(data);
    navigate("/admin/products")
  }

  return (
    <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
    <form action=""onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group mb-6">
        <input type="text" className="form-control block
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
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput90" placeholder="Name" {...register('name', {required: true})} />
        </div>
        <div className="form-group mb-6">
        <input type="text" className="form-control block
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
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput90" placeholder="Giá sản phâm" {...register('price')} />
        </div>
        <div className="form-group form-check text-center mb-6">
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
    ease-in-out">Thêm</button>
    </form>
    </div>

  )
}

export default ProductAdd