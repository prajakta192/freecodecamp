import React from 'react'
import {RiArrowLeftLine} from 'react-icons/ri'
import '../styles/orderdetails.css'

const OrderDetails = () => {
	return(
			<>
				<div className='orderWrapper'>
					<div className='orderContainer'>
						<div className='topSection'>
							<div className='order-header'>
								<div className='orderTitleWrapper'>
									<div className='OrderDetails'>
										<div className='goBackWrapper'>
											<RiArrowLeftLine/>
										</div>
										<h1 className='orderId'>#123</h1>
										<div className='paymentStatus'>
											<span><small className='filledDot'></small> paid</span>
										</div>
										<div className='fulfillStatus'>
											<span><small className='filledDot'></small>fulfilled</span>
										</div>
									</div>
								</div>
								<div className='rightActionWrapper'>
									<div className='refund'>
										<button>Refund</button>
									</div>
									<div className='edit'>
										<button>Edit</button>
									</div>
									<div className='moreAction'>
										<button>More actions</button>
									</div>
									<div className='nextPrev'>
										<button>next prev</button>
									</div>
								</div>

							</div>
						</div>

						<section>
							<div className='leftSection'>
								 <div className='OrderDetailCard'>
								 	<div className='cardTitle'>
								 	<div className='orderStatus'>
								 		<h2>fulfilled (1)</h2>
								 	</div>
								 		<div className='orderTitle'>
								 			<p>#123</p>
								 		</div>
								 	</div>
								 	<div className='orderBox'>
								 		<div className='insideOrderBox'>
								 			<div className='orderBoxDetails'>
								 				<div className='orderLocation'>
								 					<dl>
								 						<dt>
								 							<span>Location</span>
								 						</dt>
								 						<dd>
								 							<div>
								 								<p>Guru-krupa, Rajaramputi 5th later</p>
								 							</div>
								 						</dd>
								 					</dl>
								 				</div>
								 				<div className='orderStatus'>
								 					<dl>
								 						<dt>
								 							<span>fulfilled</span>
								 						</dt>
								 						<dd>
								 							<div>
								 								<p>23 June 2023</p>
								 							</div>
								 						</dd>
								 					</dl>
								 				</div>
								 				<div className='orderBoxId'>
								 					<dl>
								 						<dt>
								 							<span></span>
								 						</dt>
								 						<dd>
								 							<div>
								 								<p>1111</p>
								 							</div>
								 						</dd>
								 					</dl>
								 				</div>
								 			</div>
								 		</div>
								 	</div>
								 </div>
								 <div className='OrderDetailCard'>
								 	<div className='cardTitle'>
								 	<div className='orderStatus'>
								 		<h2>fulfilled (1)</h2>
								 	</div>
								 		<div className='orderTitle'>
								 			<p>#123</p>
								 		</div>
								 	</div>
								 	<div className='orderBox'>
								 		<div className='insideOrderBox'>
								 			<div className='orderBoxDetails'>
								 				<div className='orderLocation'>
								 					<dl>
								 						<dt>
								 							<span>Location</span>
								 						</dt>
								 						<dd>
								 							<div>
								 								<p>Guru-krupa, Rajaramputi 5th later</p>
								 							</div>
								 						</dd>
								 					</dl>
								 				</div>
								 				<div className='orderStatus'>
								 					<dl>
								 						<dt>
								 							<span>fulfilled</span>
								 						</dt>
								 						<dd>
								 							<div>
								 								<p>23 June 2023</p>
								 							</div>
								 						</dd>
								 					</dl>
								 				</div>
								 				<div className='orderBoxId'>
								 					<dl>
								 						<dt>
								 							<span></span>
								 						</dt>
								 						<dd>
								 							<div>
								 								<p>1111</p>
								 							</div>
								 						</dd>
								 					</dl>
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
												<h2>Notes</h2>
											</div>
											<div className='extraNote'>
												<p>No Notes from customers</p>
											</div>
										</div>
										<div className='OrderDetailCard'>
											<div className='sectionHead'>
												<h2>Customer</h2>
											</div>
											<div className='extraNote'>
												<p>No Notes from customers</p>
											</div>
										</div>
										<div className='OrderDetailCard'>
											<div className='sectionHead'>
												<h2>Conversion summary</h2>
											</div>
											<div className='extraNote'>
												<p>No Notes from customers</p>
											</div>
										</div>
								</div>
							</div>
						</section>
					</div>
				</div>
			</>
		)
}

export default OrderDetails