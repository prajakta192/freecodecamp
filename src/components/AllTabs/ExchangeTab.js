import {RiArrowLeftLine} from 'react-icons/ri'
import '../../styles/orderdetails.css'
const ExchangeTab = () => {
	return(
			<>
				<div className='exchangeTab'>
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
											<h2>Exchange for order #orderID</h2>
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
								 		<h4>Product details</h4>
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
								 								<div className='reasonToReturn'>
									 								<div className='refundTobePrice'>
									 									<span>₹1,497.00</span>
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
								  
								 <div className='OrderDetailCard'>
								 	<div className='cardTitle'>
								 	<div className='orderStatus'>
								 		<h5>Reason for exchange</h5>
								 	</div>
								 	</div>
								 	<div className='orderBox'>
								 		<div className='insideOrderBox'>
								 			<div className='orderBoxDetails'>
								 					<div className='productOrderDetails'>
								 						<div className='productRow w-100'>
								 							<div className='reasonToReturn w-100'>
								 								<div>
								 									<label>
								 										<h4>Choose reason for exchange</h4>
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
							<div className='rightSection'>
								<div className='rightVerticalStack'>
										<div className='OrderDetailCard'>
											<div className='sectionHead'>
												<h4>Exchange product with</h4>
											</div>
											<div className='horizontalLine'>
												<hr className = 'new'/>
											</div>
											<div className='exchangeProduct'>
												<div className='sectionHead'>
													<h2>Exchange options</h2>
												</div>
										<div className='exchangeOptions'>
											<div className='w-100'>
												<label>Product</label>
												<div>
													<select>
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
											<div className='w-100'>
												<label>Options</label>
												<div>
													<select>
														  <optgroup label="Size">
														    <option>XS</option>
														    <option>SM</option>
														    <option>MD</option>
														    <option>LG</option>
														    <option>XL</option>
														  </optgroup>
														  <optgroup label="Color">
														    <option>Black</option>
														    <option>Blue</option>
														    <option>gray</option>
														  </optgroup>
													</select>
												</div>
											</div>
											<div className='w-100'>
												<label>Quantity</label>
												<div>
													<input type='number'/>
												</div>
											</div>
										</div>
											<div className='horizontalLine'>
												<hr className = 'new'/>
											</div>
											</div>
											<div className='statusBtn'>
												<button className='orderBtn'>Exchange</button>
											</div>
											<div className='refundNotification'>
												<input type='checkbox'/>
												<span>Send a <a href="/store/testnewshopify/email_templates/refund_notification/preview">notification</a> to the customer</span>
											</div>
										</div>
								</div>


							</div>
						</section>
					</div>
				</div>
				</div>
				</div>
			</>
		)
}

export default ExchangeTab