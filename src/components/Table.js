import React from 'react'
import DataTable from 'react-data-table-component';
import {Button} from 'react-bootstrap'
import{Link} from 'react-router-dom'
import {data} from '../data.js'
import '../styles/orderdatatable.css'
const Table = () => {
	const columns = [
    {
        name: 'Order',
        selector: row => row.order,
        sortable: true,
    },
    {
        name: 'Date',
        selector: row => row.date,
        sortable: true,
    },
    {
    	name : 'Customer',
    	selector: row => row.customer,
    	sortable : true
    },
    {
    	name : 'Total',
    	selector : row => row.total,
    	sortable : true
    },
    {
    	name : 'Payment status',
    	selector : row => row.paymentstatus,
    	sortable : true
    },
    {
    	name : 'Fulfillment status',
    	selector : row => row.fulfilmentstatus,
    	sortable : true
    },
    {
    	name : 'Items',
    	selector : row => row.item,
    	sortable : true
    },
    {
    	name : 'Delivery method',
    	selector : row => row.deliverymethod,
    	sortable : true
    },

];
	return(
			<>
				<div className='tableContainer'>
					<div className='tableHead'>
						<h4>Orders: All Locations</h4>
						<div className='rightSec'>
                            <div className='buttons'>
    							<Button className='export-btn' size='sm'>Export</Button>
    							<Button className='create-order-btn' size='sm'>Create Order </Button>
                            </div>    
						</div>
					</div>
					<DataTable columns={columns} data={data} selectableRows/>
				</div>
                
			</>
		)
}

export default Table