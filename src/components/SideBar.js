import {Link} from 'react-router-dom'
import {FaHouse} from 'react-icons/fa6'
import {BsFillPersonFill} from 'react-icons/bs'
import {SiGoogleanalytics} from 'react-icons/si'
import {TbDiscount2} from 'react-icons/tb'
import {BiBookContent} from 'react-icons/bi'
import {PiNotebookBold} from 'react-icons/pi'
const SideBar = () => {
	return(
			<>
			  <nav className='sideNav'>
			  	<ul className='sideMenu'>
			  		<li>
			  			<FaHouse/>
			  			<Link to='/home'>Home</Link>
			  		</li>
			  		<li>
			  			<PiNotebookBold/>
			  			<Link to='/home'>Orders</Link>
			  		</li>
			  		<li>
			  			<BiBookContent/>
			  			<Link to='/home'>Products</Link>
			  		</li>
			  		<li>
			  			<BsFillPersonFill/>
			  			<Link to='/home'>Customers</Link>
			  		</li>
			  		<li>
			  			<BiBookContent/>
			  			<Link to='/home'>Content</Link>
			  		</li>
			  		<li>
			  			<SiGoogleanalytics/>
			  			<Link to='/home'>Analytics</Link>
			  		</li>
			  		<li>
			  			<PiNotebookBold/>
			  			<Link to='/home'>Marketing</Link>
			  		</li>
			  		<li>
			  			<TbDiscount2/>
			  			<Link to='/home'>Discounts</Link>
			  		</li>
			  	</ul>
			  </nav>

			</>
		)
}

export default SideBar