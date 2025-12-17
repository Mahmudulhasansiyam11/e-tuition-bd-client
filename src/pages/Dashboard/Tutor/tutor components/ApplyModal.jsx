import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "../../../../hooks/useAuth";

const ApplyModal = ({ tuition, closeModal }) => {
  const { user } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const application = {
      tuitionId: tuition._id,
      studentEmail: tuition.studentEmail,
      tutorName: user.displayName,
      tutorEmail: user.email,
      qualifications: form.qualifications.value,
      experience: form.experience.value,
      expectedSalary: form.salary.value,
      status: "Pending",
      appliedAt: new Date(),
    };

    const res = await axios.post(
      `${import.meta.env.VITE_API_URL}/applications`,
      application
    );

    if (res.data.insertedId) {
      Swal.fire("Success!", "Application submitted!", "success");
      closeModal();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl w-96"
      >
        <h2 className="text-xl font-bold mb-4">Apply for Tuition</h2>

        {/* Read-only */}
        <input value={user.displayName} readOnly className="input mb-2" />
        <input value={user.email} readOnly className="input mb-2" />

        <input
          name="subject"
          placeholder="subject"
          required
          className="input mb-2"
        />

        <input
          name="qualifications"
          placeholder="Qualifications"
          required
          className="input mb-2"
        />

        <input
          name="experience"
          placeholder="Experience"
          required
          className="input mb-2"
        />

        <input
          name="salary"
          type="number"
          placeholder="Expected Salary"
          required
          className="input mb-4"
        />

        <div className="flex justify-end gap-2">
          <button type="button" onClick={closeModal}>
            Cancel
          </button>
          <button className="bg-[#0A3AFF] text-white px-4 py-2 rounded">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplyModal;
