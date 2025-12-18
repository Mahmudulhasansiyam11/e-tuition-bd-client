import { useSearchParams, useNavigate, Link } from "react-router";
import { useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const PaymentSuccess = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const applicationId = params.get("applicationId");

  useEffect(() => {
    if (applicationId) {
      axios
        .put(
          `${import.meta.env.VITE_API_URL}/applications/status/${applicationId}`,
          { status: "Approved" }
        )
        .then(() => {
          toast.success("Tutor approved successfully");
          navigate("/dashboard/applied-tutors");
        });
    }
  }, [applicationId]);

  return (
    <h2 className="text-center text-2xl mt-20">
      Payment Successful ✅
      <div>
        <Link to='/' className="btn mt-10">Back to Home</Link>
      </div>
    </h2>
    
  );
};

export default PaymentSuccess;
