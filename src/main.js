import React, { useState, useEffect, useRef } from 'react';


function Main(){

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // fetch orders data from API or database
        setOrders([
                {
                  productName: 'Apple iPhone 13',
                  productNumber: 'IP13-01',
                  paymentStatus: 'Paid',
                  shipping: 'Shipped'
                },
                {
                  productName: 'Samsung 4K Smart TV',
                  productNumber: 'STV-02',
                  paymentStatus: 'Due',
                  shipping: 'Pending'
                },
                {
                  productName: 'Nike Air Max 270',
                  productNumber: 'NM270-03',
                  paymentStatus: 'Paid',
                  shipping: 'Delivered'
                },
                {
                  productName: 'Canon EOS 80D Camera',
                  productNumber: 'CE80D-04',
                  paymentStatus: 'Due',
                  shipping: 'Pending'
                },
                {
                  productName: 'HP Envy x360 Laptop',
                  productNumber: 'HPEL-05',
                  paymentStatus: 'Paid',
                  shipping: 'Shipped'
                },
                {
                  productName: 'Sony WH-1000XM4 Headphones',
                  productNumber: 'SWHM-06',
                  paymentStatus: 'Due',
                  shipping: 'Pending'
                },
                {
                  productName: 'LG 1.5 Ton Inverter AC',
                  productNumber: 'LGAC-07',
                  paymentStatus: 'Paid',
                  shipping: 'Delivered'
                }
        ]);
      }, []);

    return(

        <main>
            <h1>Dashboard</h1>

            <div className="date">
                <input type="date"/>
            </div>

            <div className="insights">
                <div className="sales">
                    <span className="material-symbols-sharp">analytics</span>
                    <div className="middle">
                        <div className="left">
                            <h3>Total Sales</h3>
                            <h1>$25,024</h1>
                        </div>
                        <div className="progress">
                            <svg><circle cx="38" cy="38" r="36"></circle></svg>
                            <div className="number">
                                <p>81%</p>
                            </div>
                        </div>
                    </div>
                    <small className="text-muted">Last 24 Hours</small>
                </div>

            {/* <!-- -----------------------END OF SALES---------------------- --> */}

                <div className="expenses">
                    <span className="material-symbols-sharp">bar_chart</span>
                    <div className="middle">
                        <div className="left">
                            <h3>Total Expenses</h3>
                            <h1>$14,161</h1>
                        </div>
                        <div className="progress">
                            <svg><circle cx="38" cy="38" r="36"></circle></svg>
                            <div className="number">
                                <p>62%</p>
                            </div>
                        </div>
                    </div>
                    <small className="text-muted">Last 24 Hours</small>
                </div>

            {/* <!-- -----------------------END OF EXPENSES---------------------- --> */}
            
                <div className="income">
                    <span className="material-symbols-sharp">stacked_line_chart</span>
                    <div className="middle">
                        <div className="left">
                            <h3>Total Sales</h3>
                            <h1>$10,865</h1>
                        </div>
                        <div className="progress">
                            <svg><circle cx="38" cy="38" r="36"></circle></svg>
                            <div className="number">
                                <p>44%</p>
                            </div>
                        </div>
                    </div>
                    <small className="text-muted">Last 24 Hours</small>
                </div>
            </div>

            <div className="recent-orders">
                <h2>Recent Order</h2>
                <table>
                    <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Product Number</th>
                        <th>Payment</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {orders.map((order, index) => (
                        <tr key={index}>
                        <td>{order.productName}</td>
                        <td>{order.productNumber}</td>
                        <td>{order.paymentStatus}</td>
                        <td className={order.shipping === 'Declined' ? 'danger' : order.shipping === 'Pending' ? 'warning' : 'primary'}>{order.shipping}</td>
                        <td className="primary">Details</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <a href="#">Show All</a>
            </div>
        </main>
    );
}

export default Main;