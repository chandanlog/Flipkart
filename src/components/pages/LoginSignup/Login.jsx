import React from 'react'
import { Link } from "react-router-dom";
const Login = () => {

    return (
        <div className='col-4 login'>
            <form>
                <div class="form-outline mb-4">
                    <Link to="/"><i class="fa fa-xmark h3 text-black m-2 cross"></i></Link>
                    <input type="email" id="form2Example1" class="form-control" />
                    <label class="form-label" for="form2Example1">Email address</label>
                </div>
                <div class="form-outline mb-4">
                    <input type="password" id="form2Example2" class="form-control" />
                    <label class="form-label" for="form2Example2">Password</label>
                </div>
                <div class="row mb-4">
                    <div class="col d-flex justify-content-center">

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="form2Example31" />
                            <label class="form-check-label" for="form2Example31"> Remember me </label>
                        </div>
                    </div>
                    <div class="col">
                        <a href="#!">Forgot password?</a>
                    </div>
                </div>
                <button type="button" class="btn btn-primary btn-block mb-4">LOG IN</button>
                <div class="text-center">
                    <p>Not a member? <Link to="/register">
                       <span>Register</span>
                    </Link></p>
                    <i class="bi bi-x"></i>
                </div>
            </form>
        </div>
    )
}

export default Login;