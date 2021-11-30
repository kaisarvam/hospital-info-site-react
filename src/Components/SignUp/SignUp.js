import React from 'react';
import './SignUp.css';
import Bounce from 'react-reveal/Bounce';
import { NavLink ,useLocation ,useHistory} from 'react-router-dom';
import { useState ,useEffect} from 'react';
import useAllContext from '../../Hooks/useAllContext';

const SignUp = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
    const data = useAllContext();
    const {CreateUser,signUpError} = data[3];
    const [email,setEmail] = useState([]);
    const [passOne,setPassOne] = useState([]);
    const [passTwo,setPassTwo] = useState([]);
    const [nameOne,setNameOne] = useState([]);

    const handleEmail = (e)=>{
        e.preventDefault();
     setEmail(e.target.value);
      }

      const handleName = (e)=>{
        e.preventDefault();
     setNameOne(e.target.value);
     
      }

      const handlepassOne = (e)=>{
        e.preventDefault();
    setPassOne(e.target.value);
        
      }
      const handlepassTwo = (e)=>{
        e.preventDefault();
    setPassTwo(e.target.value);
        
      }

      const handleSubmit = (e,email,passOne,passTwo,nameOne)=>{
        e.preventDefault();
        if(passOne!==passTwo){
            alert("password do not match")
            return ;
        }else{
            
            CreateUser(email,passTwo,nameOne);
        }
      
      }

    return (
        <div>
            <div className="mt-5 pt-5 ">
       <h1><strong> <span className="text-warning">SignUp</span> page </strong></h1>
       <br/>   
       <div className="container w-50">
           <div>
             {signUpError}
             <br/>
             <br/>
             <Bounce right cascade>
               <form onSubmit={(e)=>{handleSubmit(e,email,passOne,passTwo,nameOne);}}> 
       <div className="input-group">

  <input type="text" onBlur={(e)=>{handleName(e);}} className="form-control  fw-bold text-dark" required placeholder="Your Name" aria-label="Username" aria-describedby="addon-wrapping"/>
        </div>
        <br/>
        <div className="input-group">

  <input type="email" onBlur={(e)=>{handleEmail(e);}} className="form-control  fw-bold text-dark" required placeholder="Your Email" aria-label="UserEmail" aria-describedby="addon-wrapping"/>
        </div>
        <br/>
        <div className="input-group">
  
  <input type="password" onBlur={(e)=>{handlepassOne(e);}} className="form-control  fw-bold text-dark" required placeholder="Password" aria-label="Username" aria-describedby="addon-wrapping"/>
        </div>
        <br/>
        <div className="input-group">
  
  <input type="password" onBlur={(e)=>{handlepassTwo(e);}} className="form-control  fw-bold text-dark" required placeholder="Re Enter Password" aria-label="Username" aria-describedby="addon-wrapping"/>
        </div>
<br/>
<button className=" btn btn-success w-75">SignUp</button> 
</form>
</Bounce>
<span>or use</span>
<br/>
<NavLink to="/forgotpass"> Forgot Password </NavLink>
 or 
<NavLink to="/login"> LogIn </NavLink>
       </div>
       </div>
      
   </div>
        </div>
    );
};

export default SignUp;