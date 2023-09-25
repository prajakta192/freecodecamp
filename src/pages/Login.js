import React from 'react'

const Login = () => {
	return(
			<>
		<div className="loginWrapper">
		<div className='loginContainer'>
			<h4>Login</h4>
				<div>
					<form>
					<div className='form-contorl'>
						<label htmlFor='username'>Username</label>
						<input type='text' placeholder='username' id='username'/>
					</div>
					<div className='form-contorl'>
						<label htmlFor='password'>Password</label>
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