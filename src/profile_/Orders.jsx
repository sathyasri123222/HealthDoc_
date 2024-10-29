import { useEffect } from "react";
import PropTypes from "prop-types";

function Orders({booked_item}) {
  useEffect(() => {
    console.log(booked_item);
    console.log(booked_item.length);
  }, [booked_item]);

  return (
    <>
      <h1>Orders</h1>
    </>
  );
}

Orders.propTypes = {
  booked_item: PropTypes.array.isRequired, // Ensure booked_item is always an array
};

export default Orders;
