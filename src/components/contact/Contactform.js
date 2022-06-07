import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "../../App.css";

const schema = yup.object().shape({
    firstname: yup.string().required("Please enter your name").min(3, "Must be at least 3 character"),
    lastname: yup.string().required("Please enter your name").min(4, "Must be at least 4 character"),
    email: yup.string().required("Please enter an email address").email("Please enter a valid email address"),
    message: yup.string().required("Please enter your message").min(10, "The message must be at least 10 characters"),
});

function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    function onSubmit(data) {
        console.log(data);
    }

    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("first name")} />
            {errors.firstname && <span>{errors.firstname.message}</span>}

            <input {...register("last name")} />
            {errors.lastname && <span>{errors.lastname.message}</span>}

            <input {...register("email")} />
            {errors.email && <span>{errors.email.message}</span>}

            <textarea {...register("message")} />
            {errors.message && <span>{errors.message.message}</span>}


           


            <button>Send</button>
        </form>
    );
}

export default Form;