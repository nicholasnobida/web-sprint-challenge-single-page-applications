import React, { useState, useEffect } from "react";
import formSchema from './FormSchema';
import * as Yup from 'yup';
import axios from "axios";
import styled from 'styled-components';

const OrderBackgroundImg = styled.div`
    background-image: url('https://images.unsplash.com/photo-1579299676326-e5d7b4c13e3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
    background-position: no-repeat;
    background-size: cover;
`;
const FormDiv = styled.form`
padding: 14% 0 16% 10%;
`;

const Order = props => {

    const [ errors, setErrors ] = useState({name:''})
    const [ validName, setValidName ] = useState({name:''})
    const [ submitForm, setSubmitForm ] = useState([])

    const nameData = event => {
        const name = event.target.name
        const value = event.target.value

            Yup
            .reach(formSchema, name)
            .validate(value)
            .then(valid =>{
                setErrors({
                    ...errors,
                    [name]: ''
                })
            })
            .catch(err => {
                setErrors({
                    [name]: err.errors[0]
                })
            })
            setValidName({
                ...validName, [name]: value
            })
    }

    const [ formData, setFormData ] = useState({
        size: '',
        instruct: ''
    })
    const inputData = event => {
        setFormData({
            ...formData, [event.target.name]: event.target.value,
        })
    }
    const [ checkboxData, setCheckboxData ] = useState({
        pepperoni: '',
        pineapple: '',
        chicken: '',
        xcheese: ''
    })
    const checkboxInput = event => {
        setCheckboxData({
            ...checkboxData, [event.target.name]: event.target.checked,
        })
    }
    useEffect(() => {
        formSchema.isValid(validName).then(valid => {
            setDisabled(!valid)
        })
    }, [validName])
    const submit = event => {
        event.preventDefault()
        console.log('submitted')
        axios.post('https://reqres.in/api/users', { validName, checkboxData, formData })
        .then(res => {
            setSubmitForm(res.data)
            console.log('success', res)
        })
        .catch(err => {
            console.log(err)
        })
    }
    const [ disabled, setDisabled ] = useState(false)
    
    return (
        <OrderBackgroundImg>
            <FormDiv onSubmit={submit}>
                <h1>Customize Your Pizza</h1><br />
                <label htmlFor='name'>Name:</label><br />
                <input name='name' type='text'placeholder='John Smith' onChange={nameData}/><br /><br />
                <label htmlFor='size'>Size:</label><br />
                <select id='size' name='size' onChange={inputData}>
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                    <option value='xl'>X-Large</option>
                </select><br /><br />
                <label htmlFor='toppings'>Toppings:</label><br />
                <input type='checkbox' id='toppings' name='pepperoni' onChange={checkboxInput}></input>
                <span>Pepperoni</span><br />
                <input type='checkbox' id='toppings' name='pineapple' onChange={checkboxInput}></input>
                <span>Pineapple</span><br />
                <input type='checkbox' id='toppings' name='chicken' onChange={checkboxInput}></input>
                <span>Chicken</span><br />
                <input type='checkbox' id='toppings' name='xcheese' onChange={checkboxInput}></input><span>Extra Cheese</span><br /><br />
                <label htmlFor='instruct'>Special Instructions:</label><br /> 
                <input name='instruct' type='text'placeholder='Any condiments?' onChange={inputData}/><br /><br />
                <button disabled={disabled}>Add to Order</button>
            </FormDiv>
        </OrderBackgroundImg>
    )
}

export default Order;