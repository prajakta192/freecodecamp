import React from 'react'
import DataTable from 'react-data-table-component';
import SideBar from '../components/SideBar'
import OrderDetails from '../components/OrderDetails'

const OrderDashboard = () => {
	
	return(
			<>
				<main className='mainWrapper'>
					<div className='sidebar'>
						<SideBar/>
					</div>
					<div className='tableWrapper'>
						<OrderDetails/>
					</div>	
				</main>
			</>
		)
}

export default OrderDashboard