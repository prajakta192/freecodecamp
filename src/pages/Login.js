import React from 'react'
import '../styles/login.css'

const Login = () => {
	return(
			<>
		<div className="loginWrapper">
		<div className='loginContainer'>
			<h4>Login</h4>
				<div>
					<form>
					<div className='form-contorl'>
						
						<input type='text' placeholder='order ID' id='orderid'/>
					</div>
					<div className='form-contorl'>
						
						<input type='email' placeholder='email ID' id='email'/>
					</div>
					<button>Login</button>
					</form>
				</div>
			</div>	
			</div>	
			</>
		)
}

export default Login