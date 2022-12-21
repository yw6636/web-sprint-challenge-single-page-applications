import React from 'react';
import { Link } from 'react-router-dom';

export default function Home(){


return(
    <div className="H2">
        <img className= "image" src ="https://res.cloudinary.com/teepublic/image/private/s--3-2YGZUs--/t_Resized%20Artwork/c_fit,g_north_west,h_1054,w_1054/co_ffffff,e_outline:53/co_ffffff,e_outline:inner_fill:53/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1576738483/production/designs/7267781_0.jpg" ></img>
        <h2>Your favorite food, delivered while coding</h2>
        <div className="H2-nav">
          <Link to="/pizza" className="button" id="order-pizza">Pizza?</Link>
        </div>
        
    </div>
 )


}