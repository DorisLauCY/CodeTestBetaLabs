import React from 'react'
import Title from './Title'
import { Link } from 'react-router-dom';
export default function Register() {
  return (
    <div>
  
    <Title mainTitle="Register" />
    <div class="container py-5">
        <div id="reg-forms">
          <form action="/signup/" class="form-signup">
            <h1 class="h3 mb-3 font-weight-normal" style={{textAlign: 'center'}}>Register</h1>
              {/* <div class="social-login">
                  <button class="btn facebook-btn social-btn" type="button"><span><i class="fab fa-facebook-f"></i> Sign up with Facebook</span> </button>
              </div>
              <div class="social-login">
                  <button class="btn google-btn social-btn" type="button"><span><i class="fab fa-google-plus-g"></i> Sign up with Google+</span> </button>
              </div>
              
              <p style={{textAlign: 'center'}}>OR</p> */}

              <input type="text" id="user-name" class="form-control" placeholder="Full name" required="" autofocus="" />
              <input type="email" id="user-email" class="form-control" placeholder="Email address" required autofocus="" />
              <input type="phone" id="user-phone" class="form-control" placeholder="Phone" required autofocus="" />
              <input type="profile_picture" id="user-picture" class="form-control" placeholder="Profile Picture" required autofocus="" />
              <input type="company" id="user-company" class="form-control" placeholder="Company" required autofocus="" />
              <input type="password" id="user-pass" class="form-control" placeholder="Password" required autofocus="" />
              <input type="password" id="user-repeatpass" class="form-control" placeholder="Repeat Password" required autofocus="" />

              <button class="btn btn-primary btn-block" type="submit"><i class="fas fa-user-plus"></i> Sign Up</button>
              <a href="#" id="cancel_signup"><i class="fas fa-angle-left"></i> Back</a>
              <hr />
              {/* <!-- <p>Don't have an account!</p>  --> */}

              <Link to="/login" className='btn btn-primary btn-block text-white' id="btn-signup">  <i class="fas fa-user-plus"></i> Have Account ?</Link>
             
          </form>
          <br />
      
   </div>
   </div>
</div>
  )
}
