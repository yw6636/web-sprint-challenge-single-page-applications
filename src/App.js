import React, { useState, useEffect } from "react";
import { Route, Link } from 'react-router-dom';
import './App.css';
import PizzaForm from './PizzaForm';
import Home from './Home';
import Validation from './Validation';
import axios from "axios";
import schema from './formSchema';
import * as yup from 'yup';

const initialFormValues = {
  username: '',
  size: '',
  sauce: '',
  pepperoni: false,
  dicedtomatoes: false,
  sausage: false,
  blackolives: false,
  specialins: '',
}
const intialFormErrors = {
  size:'',
  sauce:'',
  speicalins: '',
}
const initialPizza = []
const initialDisabled = true

const App = () => {
  const [pizza, setPizza] = useState(initialPizza)
  const [formValues,setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(intialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

const getPizza = () => {  
// // axios get 
//   axios.get("https://reqres.in/api/orders")
//     .then(res=> {
//       setPizza(res.data);
//     })
//     .catch(err => console.error(err));
}

const postNewPizza = newPizza => {
  // axios post 
  axios.post("https://reqres.in/api/orders", newPizza)
    .then (res => {
      setPizza([ res.data, ...pizza]);
    })
    .catch(err=> console.error(err))
    .finally(() => setFormValues(initialFormValues))
}

const validate = (name, value) => {
  yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({...formErrors, [name]: ''}))
    .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
}

const inputChange = (name, value) => {
  validate(name, value);
  setFormValues({
    ...formValues,
    [name]: value
  })  
}

const formSubmit = () => {
  const newPizza = {
    username: formValues.username.trim(),
    size: formValues.size.trim(),
    sauce: formValues.sauce.trim(),
    specialins: formValues.specialins.trim(),
    toppings: ['pepperoni', 'dicedtomatoes','sausage','blackolives'].filter(topping => !!formValues[topping])
  }
  postNewPizza(newPizza);
}
  
  useEffect(()=> {
    getPizza()
  }, [])


  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <>
    <div className='App'>
      <nav>
        <h1 className="App-header">Lambda Eats</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/help">Help</Link>
        </div>
      </nav>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/pizza">
        <PizzaForm 
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          disabled={disabled}
          errors={formErrors}
        />
      </Route>
      <Route path="/validation">
        <Validation/>
      </Route>
      {
        pizza.map(pizza => {
          return(
            <Orders key={pizza.id} details={pizza}/>
          )
        })
      }

    </div>
    </>
  );
};
export default App;
