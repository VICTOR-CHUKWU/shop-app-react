import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../redux/actions/UserActions';

const Login = (props) => {
    const islogged =useSelector(state => state.UserReducer);
    const dispatch = useDispatch()
    console.log(islogged)

    //state for the input
    const [data, setData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState({})
     const newData = {...data};

     //handle input value
    const  handleInput = (e) => {
        newData[e.target.id] = e.target.value;
        setData(newData)
        console.log(newData)
    }
    //submit login form
     //to handle error
     const handleError = (data) =>{
        let error = {}
        if(!data.email){
            error.email = "email required"
        }else if (!/\S+@\S+\.\S+/.test(data.email)) {
            error.email = 'Email address is invalid';
          }
          if (!data.password) {
            error.password = 'Password is required';
          } else if (data.password.length < 6) {
            error.password = 'Password needs to be 6 characters or more';
          }
         
          return error;
    }
    //submit form
    const submitForm = async(e) =>{
        e.preventDefault();
        const error = handleError(data)
        setError(error)
        if (Object.keys(error).length !== 0){
            return;
        }
        const resp = await fetch('http://localhost:8080/api/users/login', {
            method: 'POST',
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                email: data.email,
                password: data.password, 
            })
        })
       
        setData({
            email: '',
            password: '',
        })
        // setSubmited(true)
        dispatch(login(()=>{
            props.history.push("/user/dashboard");
        }))
        
            return resp.json();
       
       
       
    };
    return (
        <section>
            <div className="container">
                <div className="row mt-5">
                   <div className="col-12 col-md-6 col-lg-6">
                       <h1 className="display__title text-success text-center">Login</h1>
                       <form className='mt-5 w-100'>
                       <div className="form-row my-4">
                            <div className="col-12">
                                <label htmlFor="email" className='label'>Email</label>
                                <input type="email" className="form-control w-100 input-border-bottom"  id='email' value={data.email} onChange={(e)=>handleInput(e)}/>
                                {error.email && <p className='text-danger'>{error.email}</p>}
                            </div>
                            <div className="col-12">
                                <label htmlFor="password" className='label'>Password</label>
                                <input type="password" className="form-control w-100 input-border-bottom"  id='password' value={data.password} onChange={(e)=>handleInput(e)}/>
                                {error.password && <p className='text-danger'>{error.password}</p>}
                            </div>
                        </div>
                        <div className="form-group mt-4 d-flex">
                            <div className="form-check col-6">
                                <input className="form-check-input btn-check-medium " type="checkbox" id="gridCheck" />
                                <label className="form-check-label ml-3 font-weight-bold" htmlFor="gridCheck">
                                   Remember Me
                                </label>
                            </div>
                            <div className="col-6">
                            <p className="text-success font-weight-bold">Forgot password?</p>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-success w-100 btn-large-font my-3"  onClick={(e)=> submitForm(e)}>Login</button>
                        <button type="submit" className="btn btn-blue w-100 btn-large-font">Login with facebook</button>
                       </form>
                   </div>
                   <div className="col-12 col-md-6 col-lg-6 pl-lg-5 pt-3 pt-md-0 pt-lg-0 register-login-page">
                       <h1 className="display__title text-center text-success">create your pablo account</h1>
                       <p className="text-dark my-4">
                       Create your Pablo customer account in just a few clicks! You can register either using your e-mail address or through your Facebook account.
                       </p>

                      <div className="buttons ">
                      <Link to='/customer/account/create' style={{textDecoration:"none"}}>
                      <button type="submit" className="btn btn-success w-100 btn-large-font my-3">Create Account Via Email</button>
                      </Link>
                        <button type="submit" className="btn btn-blue w-100 btn-large-font">Register with facebook</button>
                      </div>

                   </div>
                </div>
            </div>
        </section>
    )
}

export default Login
