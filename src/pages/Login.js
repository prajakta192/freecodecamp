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
						
						<input type='text' placeholder='username' id='username'/>
					</div>
					<div className='form-contorl'>
						
						<input type='password' placeholder='password' id='password'/>
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