import React from 'react'
import DataTable from 'react-data-table-component';
import SideBar from '../components/SideBar'
import Table from '../components/Table'

const OrderDashboard = () => {
	
	return(
			<>
				<div className='orderWrapper'>
					<div className='sidebar'>
						<SideBar/>
					</div>
					<div className='tableWrapper'>
						<Table/>
					</div>	
				</div>
			</>
		)
}

export default OrderDashboard