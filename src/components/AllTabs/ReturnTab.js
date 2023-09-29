import '../../styles/orderdetails.css'
import {RiArrowLeftLine} from 'react-icons/ri'
const ReturnTab = () => {
	return(
			<>
				<div className='returnTab'>
					  <div className='orderWrapper'>
					<div className='orderContainer'>
						<div className='topSection'>
							<div className='order-header'>
								<div className='orderTitleWrapper'>
									<div className='OrderDetails'>
										<div className='goBackWrapper'>
											<RiArrowLeftLine/>
										</div>
										<div className='orderStatus'>
											<h2>Return for order #orderID</h2>
										</div>
										
									</div>
								</div>
							</div>
						</div>

						<section>
							<div className='leftSection'>
								 <div className='OrderDetailCard'>
								 	<div className='cardTitle'>
								 	<div className=''>
								 		<h2 style={{fontSize:'0.8125rem'}}>Self-serve returns </h2>
								 	</div>
								 	</div>
								 	<div className='orderBox'>
								 		<div className='insideOrderBox'>
								 			<div className=''>
								 				<div className='selfServeReturn'>
								 					<p style={{fontSize:'.9rem'}}>
								 						Customers can now submit return requests from their accounts without having to email or call you. It streamlines your returns process and saves you time.
								 					</p>
								 				</div>
								 				<div className='selfReturnBtn'>
								 					<a href='/store/testnewshopify/settings/customer_accounts#returns'>
								 						<span>Go to self-serve returns</span>
								 					</a>
								 				</div>
								 			</div>
								 		</div>
								 	</div>
								 </div>
								 <div className='OrderDetailCard'>
								 	<div className='cardTitle'>
								 	<div className=''>
								 		<h4>Select return items</h4>
								 	</div>
								 	</div>
								 	<div className='returnAddress'>
								 			<h3>#123</h3>
								 	<div>
			 								<p>Guru-krupa, Rajaramputi 5th later</p>
			 						</div>
								 	</div>
								 	<div className='orderBox'>
								 		<div className='insideOrderBox'>
								 			<div className='orderBoxDetails'>
								 				<div className='orderLocation'>
								 					<div className='productOrderDetails'>
								 						<div className='productImg'>
								 							<span>
								 								<img src='https://cdn.shopify.com/s/files/1/0613/5969/products/SKU_Tee_croppings-27.jpg?v=1594365518'/>
								 							</span>
								 						</div>
								 						<div className='productDetails'>
								 							<div className='productRow'>
								 								<div className='productTitle'>
								 									<h3><span>01-THE MEN'S LONG SLEEVE TEE</span></h3>
								 									<span>L / Crocodile Green</span>
								 								</div>
								 								<div className='productQuantity text-end'>
								 									<input type='number' placeholder={1}/>
								 								</div>
								 							</div>
								 							<div className='productRow'>
								 								<div className='reasonToReturn w-100'>
								 								<div>
								 									<label>
								 										Select a return reason
								 									</label>
								 								</div>
								 								<div>	
								 									<select className='w-100'>
								 										<option value="UNKNOWN">Unknown</option>
								 										<option value="SIZE_TOO_SMALL">Size was too small</option>
								 										<option value="SIZE_TOO_LARGE">Size was too large</option>
								 										<option value="UNWANTED">Customer changed their mind</option>
								 										<option value="NOT_AS_DESCRIBED">Item not as described</option>
								 										<option value="WRONG_ITEM">Received the wrong item</option>
								 										<option value="DEFECTIVE">Damaged or defective</option>
								 										<option value="STYLE">Style</option>
								 										<option value="COLOR">Color</option>
								 										<option value="OTHER">Other</option>
								 									</select>
								 								</div>	
								 								</div>
								 							</div>
								 						</div>
								 					</div>
								 				</div>
								 			</div>
								 		</div>
								 	</div>
								 </div>
							</div>
							<div className='rightSection'>
								<div className='rightVerticalStack'>
										<div className='OrderDetailCard'>
											<div className='sectionHead'>
												<h2>Summary</h2>
											</div>
											<div className='orderStatusDetails'>
												<ul>
													<li>
														<span>Returning 1 item</span>
													</li>
													<li>
														<span>Reason: Unknown</span>
													</li>
												</ul>
											</div>
											<div className='statusBtn'>
												<button className='orderBtn'>Create return</button>
											</div>
										</div>
								</div>
							</div>
						</section>
					</div>
				</div>
				</div>
			</>
		)
}
export default ReturnTab