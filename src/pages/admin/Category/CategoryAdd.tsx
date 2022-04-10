import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type CategoryAddProps = {
    name: string
};
type TypeInputs ={
    name: string,
};

const CategoryAdd = (props: CategoryAddProps) => {
    const {register, handleSubmit, formState: {errors}} = useForm<TypeInputs>();
    const onSubmit: SubmitHandler<TypeInputs> = data => {
        console.log(data);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {props.name}
            <input type="text" placeholder=" Danh mục sản phảm" {...register('name')}/>
            <button>Thêm</button>
        </form>
        
    )
}
export default CategoryAdd;