import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Orders = () => {
  const [allOrder, setAllOrder] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/allOrder").then((res) => {
      setAllOrder(res.data);
    });
  }, []);
return (
  <>
    <h3 className="title">Positions ({allOrder.length})</h3>

    <div className="order-table">
      <table>
        <tr>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Mode</th>
        </tr>
        {allOrder.map((stock, index) => (
          <tr key={index}>
            <td>{stock.name}</td>
            <td>{stock.qty}</td>
            <td>{stock.price}</td>
            <td>BUY</td>
          </tr>
        ))}
      </table>
    </div>

    {/* // <div className="orders">
    //   <div className="no-orders">
    //     <p>You haven't placed any orders today</p>
    //     <Link to="/" className="btn">
    //       Get started
    //     </Link>
    //   </div>
    // </div> */}
  </>
);
};

export default Orders;
