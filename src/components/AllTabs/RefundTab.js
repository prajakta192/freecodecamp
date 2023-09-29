import {RiArrowLeftLine} from 'react-icons/ri'
const RefundTab = () => {
	return(
			<>
				<div className='refundTab'>
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
											<h2>Refund for order #orderID</h2>
										</div>
										
									</div>
								</div>
							</div>
						</div>
						<section>
							<div className='leftSection'>
								 <div className='OrderDetailCard'>
								 	<div className='cardTitle'>
								 	<div className='orderStatus'>
								 		<h2>fulfilled</h2>
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
								 		<h5>Reason for refund</h5>
								 	</div>
								 	</div>
								 	<div className='orderBox'>
								 		<div className='insideOrderBox'>
								 			<div className='orderBoxDetails'>
								 				
								 					<div className='productOrderDetails'>
								 						<div className='productRow w-100'>
								 							<div className='reasonToRefund w-100'>
								 								<div>
								 									<label>
								 										<h4>Reason for refund</h4>
								 									</label>
								 								</div>
								 								<div>	
								 									<input type='text' className='w-100'/>
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
											<div>
												<div className='orderStatusDetails'>
													<span>No items selected.</span>
												</div>
											</div>	
											<div className='horizontalLine'>
												<hr className = 'new'/>
											</div>

											<div className='statusBtn'>
											<div className='refundAmount'>
												<div className='sectionHead'>
													<h2>Refund amount</h2>
												</div>
											<div>
												<label>Manual</label>
												<div>
													<input type='text' placeholder='₹ 0.00'/>
												</div>
												<div className='availableRefund'>
													<span style={{color:'#616161'}}>₹1,684.13 available for refund</span>
												</div>
											</div>
											<div className='horizontalLine'>
												<hr className = 'new'/>
											</div>
											</div>
												<button className='orderBtn'>Refund ₹ 0.00</button>
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
			</>
				</div>
			</>
		)
}
export default RefundTab