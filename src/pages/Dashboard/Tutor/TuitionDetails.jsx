import { useState } from "react";
import ApplyModal from "./ApplyModal";

const TuitionDetails = ({ tuition }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-[#0A3AFF] text-white px-6 py-2 rounded-lg"
      >
        Apply
      </button>

      {open && (
        <ApplyModal tuition={tuition} closeModal={() => setOpen(false)} />
      )}
    </>
  );
};

export default TuitionDetails;
