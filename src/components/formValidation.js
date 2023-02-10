import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import "../App.css";
import { useForm } from "react-hook-form";


export default function FormValidation() {

const { register, handleSubmit, formState: { errors } } = useForm();

const onSubmit = (data) => {
    console.log(data);
}
    return (
        <div className='filter'>
            <h1>Form Validation</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Field className='spacing'>
                    <label className='coloring'>First Name</label>
                    <input placeholder='First Name' type="text"
                        {...register("firstName", { required: true, maxLength: 10 })} />
                        {errors.firstName && <p>Invalid First Name</p>}
                </Form.Field>
                
                <Form.Field className='spacing'>
                    <label className='coloring'>Last Name</label>
                    <input placeholder='Last Name' type="text" 
                        {...register("lastName", { required: true, maxLength: 10 })}/>
                         {errors.lastName && <p>Invalid last Name</p>}
                </Form.Field>
               
                <Form.Field className='spacing'>
                    <label className='coloring'>Email Id . </label>
                    <input placeholder='Email' type="email" 
                        {...register("email", { required: true,
                            pattern: /^((^<>()\[\]\\.,;:\s@"]+(\.^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            maxLength: 10 })}/>
                            {errors.email && <p>Invalid Email Id</p>}
                </Form.Field>
            
                <Form.Field className='spacing'>
                    <label className='coloring'>Password</label>
                    <input placeholder='Password' type="password" 
                        {...register("password", { required: true, maxLength: 10 })}/>
                        {errors.password && <p>Please check the Password</p>}
                </Form.Field>
                
                <p className="centering">
                    <Button type='Submit'>Submit</Button>
                </p>
            </Form>
        </div>
    )
}