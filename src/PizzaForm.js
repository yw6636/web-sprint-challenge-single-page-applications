import React from 'react';
import { Link } from 'react-router-dom';


export default function PizzaForm(props){

const {values, submit, change, disabled, errors} = props

const onSubmit = event => {
    event.preventDefault();
    submit();
}

const onChange = event => {
    const { name, value, checked, type} = event.target
    const valueToUse = type === "checkbox" ? checked: value
    change(name, valueToUse);
}


return(
    <form className='form container' onSubmit={onSubmit} id="pizza-form">
    <div className="Pizza">
        <h1>Build your own pizza</h1>
        <div className="PizzaImage">
            <img className= "image" src ="https://res.cloudinary.com/teepublic/image/private/s--3-2YGZUs--/t_Resized%20Artwork/c_fit,g_north_west,h_1054,w_1054/co_ffffff,e_outline:53/co_ffffff,e_outline:inner_fill:53/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1576738483/production/designs/7267781_0.jpg" ></img>
        </div>
        <div className="name" >
            <label> Name :
                <input placeholder= "put your name" value={values.username} type="text" name="username" onChange={onChange} id="name-input"/>
            </label>
        </div>
        <div className="size">
            <h2 className="sizeH2">Build your own pizza</h2>
                <div className="sizeH3">
                    <h3>Choice of size</h3>
                    <h4>(required)</h4>
                </div>
            <label>
                <select name="size" value={values.size} onChange={onChange} id="size-dropdown">
                    <option value=''>--Select Size--</option>
                    <option value='S'>Small</option>
                    <option value='M'>Medium</option>
                    <option value='L'>Large</option>
                </select>
            </label>
        </div>
        <div className="sauce">
            <h3>Choice of sauce</h3>
            <h4>(required)</h4>
        </div>
        <div className="sauce-select">
            <label> Original Red
                <input type="radio" name="sauce" value="original red" onChange={onChange} checked={values.sauce === "original red"}/>   
                {/* checked={values.sauce==="original red" */}
            </label>
            <label> Garlic Ranch
                <input type="radio" name="sauce" value="garlic ranch" onChange={onChange} checked={values.sauce === "garlic ranch"}/>
            </label>
            <label> BBQ sauce
                <input type="radio" name="sauce" value="bbq sauce" onChange={onChange} checked={values.sauce === "bbq sauce"}/>
            </label>
            <label> Spinach Alfredo
                <input type="radio" name="sauce" value="spinach alfredo" onChange={onChange} checked={values.sauce === "spinach alfredo"}/>
            </label>
        </div>
        <div className="toppings">
            <h3>Add Toppings</h3>
            <h4>Choose up to 4</h4>
        </div>
        <div className="toppings-label">
            <label> Pepperoni
                <input type="checkbox" name="pepperoni" onChange={onChange} checked={values.pepperoni}/>
            </label>
            <label> Diced Tomatoes
                <input type="checkbox" name="dicedtomatoes" onChange={onChange} checked={values.dicedtomatoes}/>
            </label>
            <label> Sausage
                <input type="checkbox" name="sausage" onChange={onChange} checked={values.sausage}/>
            </label>
            <label> Black Olives
                <input type="checkbox" name="blackolives" onChange={onChange} checked={values.blackolives}/>
            </label>
        </div>
        <div className="special">
            <h3>Special Instructions</h3>
        </div>
        <div className="special-text">
            <label>
                <input placeholder= "Anything else you like to add?" value={values.specialins} type="text" name="specialins" onChange={onChange} id="special-text"/>
            </label>
        </div>
        <div className="button">
        <button disabled={disabled} id="order-button">Add to order</button>
        </div>
        <div className="errors">
            <div>{errors.username}</div>
            <div>{errors.size}</div>
            <div>{errors.specialins}</div>
            <div>{errors.sauce}</div>
        </div>
    </div>
    </form>
)
}