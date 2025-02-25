
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import universityData from "../Data/universityData.json";

const AdmissionTable = ({ universities }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-center">Private University Admission Test</h2>
      <p className="text-center text-gray-600">
        পরবর্তী ভর্তি পরীক্ষায় যারা অংশগ্রহণ করতে পারবে
      </p>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg mt-4">
          <thead>
            <tr className="bg-purple-600 text-white">
              <th className="py-2 px-4">University</th>
              <th className="py-2 px-4">Session</th>
              <th className="py-2 px-4">HSC Batch</th>
              <th className="py-2 px-4">Upcoming Exam Date</th>
              <th className="py-2 px-4">Offered course & Cost</th>
            </tr>
          </thead>
          <tbody>
            {universities.map((uni, index) => (
              <tr key={index} className="border-t text-center">
                <td className="py-2 px-4">{uni.name}</td>
                <td className="py-2 px-4">{uni.session}</td>
                <td className="py-2 px-4">{uni.hscBatch}</td>
                <td className="py-2 px-4">{uni.examDate}</td>
                <td className="py-2 px-4">
                  <Link
                    to={`/details/${uni.id}`}
                    className="text-blue-500 underline hover:text-blue-700"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-center mt-4 text-gray-700">
        {/* অফলাইনে/অনলাইনে ব্যাচে ভর্তি হতে কল করুন: <strong>০১৩১৯৯৭৭৪৭৬</strong> */}
      </p>
    </div>
  );
};

AdmissionTable.propTypes = {
  universities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      session: PropTypes.string.isRequired,
      hscBatch: PropTypes.string.isRequired,
      examDate: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const AdmisionTest = () => {
  return (
    <div>
       <AdmissionTable universities={universityData} />
    </div>
  )
}

export default AdmisionTest
