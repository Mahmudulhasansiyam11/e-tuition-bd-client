
import { useSearchParams, Link } from "react-router";
import { useEffect, useRef } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const PaymentSuccess = () => {
  const [params] = useSearchParams();
  // Using a ref to prevent double-execution in React Strict Mode
  const hasProcessed = useRef(false);

  const sessionId = params.get("session_id");
  const applicationId = params.get("applicationId");

  useEffect(() => {
    // Only run if we have the IDs and haven't already processed this session
    if (sessionId && !hasProcessed.current) {
      hasProcessed.current = true;

      const processPayment = async () => {
        try {

          const response = await axios.post(`${import.meta.env.VITE_API_URL}/payment-success`, {
            sessionId,
            applicationId
          });

          if (response.data) {
            toast.success("Payment verified and tutor approved!");
          }
        } catch (error) {
          console.error("Payment processing error:", error);
          toast.error("Failed to finalize payment. Please contact support.");
        }
      };

      processPayment();
    }
  }, [sessionId, applicationId]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h2 className="text-3xl font-bold text-green-600 mb-4">
          Payment Successful ✅
        </h2>
        <p className="text-gray-600 mb-6">
          Your payment has been processed and the tutor has been notified.
        </p>
        <Link to="/" className="btn btn-primary px-10">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;