import React from 'react'
import DataTable from 'react-data-table-component';
import SideBar from '../components/SideBar'
import TabDetails from '../components/TabDetails'

const OrderDashboard = () => {
	
	return(
			<>
				<main className='mainWrapper'>
					<div className='sidebar'>
						<SideBar/>
					</div>
					<div className='tableWrapper'>
						<TabDetails/>
					</div>	
				</main>
			</>
		)
}

export default OrderDashboard