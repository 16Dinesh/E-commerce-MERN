import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

function OrderSuccess() {
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    const storedOrderId = sessionStorage.getItem("currentOrderId");
    if (storedOrderId) {
      setOrderId(JSON.parse(storedOrderId));
    }
  }, []);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-5 text-center">
      <CheckCircle size={80} className="text-green-600 mb-4" />

      <h1 className="text-3xl font-bold mb-2">Order Placed Successfully!</h1>

      <p className="text-lg text-gray-600 mb-6">
        {orderId
          ? `Your order ID is: ${orderId}`
          : "Your order has been placed."}
      </p>

      <div className="flex gap-4">
        <Link
          to="/shop/account"
          className="px-5 py-3 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          View Orders
        </Link>

        <Link
          to="/shop/home"
          className="px-5 py-3 bg-gray-200 rounded-md hover:bg-gray-300"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}

export default OrderSuccess;
