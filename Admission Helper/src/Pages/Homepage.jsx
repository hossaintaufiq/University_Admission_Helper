// import React from "react";
import PropTypes from "prop-types";

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
              <th className="py-2 px-4">View Courses</th>
              <th className="py-2 px-4">View Tuition Fee</th>
            </tr>
          </thead>
          <tbody>
            {universities.map((uni, index) => (
              <tr key={index} className="border-t text-center">
                <td className="py-2 px-4">{uni.name}</td>
                <td className="py-2 px-4">{uni.session}</td>
                <td className="py-2 px-4">{uni.hscBatch}</td>
                <td className="py-2 px-4">{uni.examDate}</td>
                <td className="py-2 px-4"><a href={uni.coursesLink} className="text-blue-500 underline">View</a></td>
                <td className="py-2 px-4"><a href={uni.tuitionFeeLink} className="text-blue-500 underline">View</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-center mt-4 text-gray-700">
        অফলাইনে/অনলাইনে ব্যাচে ভর্তি হতে কল করুন: <strong>০১৩১৯৯৭৭৪৭৬</strong>
      </p>
    </div>
  );
};

AdmissionTable.propTypes = {
  universities: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      session: PropTypes.string.isRequired,
      hscBatch: PropTypes.string.isRequired,
      examDate: PropTypes.string.isRequired,
      coursesLink: PropTypes.string.isRequired,
      tuitionFeeLink: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const universitiesData = [
  { name: "BRAC University", session: "Summer 2025", hscBatch: "2022-2024", examDate: "March 15, 2025", coursesLink: "/details", tuitionFeeLink: "/details" },
  { name: "North South University", session: "Summer 2025", hscBatch: "2021-2024", examDate: "April 5, 2025", coursesLink: "/details", tuitionFeeLink: "/details" },
  { name: "East West University", session: "Summer 2025", hscBatch: "2020-2024", examDate: "March 25, 2025", coursesLink: "/details", tuitionFeeLink: "/details" },
  { name: "Independent University", session: "Summer 2025", hscBatch: "2021-2024", examDate: "April 10, 2025", coursesLink: "/details", tuitionFeeLink: "/details" },
  { name: "American Int’l University", session: "Summer 2025", hscBatch: "2022-2024", examDate: "March 20, 2025", coursesLink: "/details", tuitionFeeLink: "/details" },
  { name: "American Int’l University", session: "Summer 2025", hscBatch: "2022-2024", examDate: "March 20, 2025", coursesLink: "/details", tuitionFeeLink: "/details" },
  { name: "American Int’l University", session: "Summer 2025", hscBatch: "2022-2024", examDate: "March 20, 2025", coursesLink: "/details", tuitionFeeLink: "/details" },
  { name: "American Int’l University", session: "Summer 2025", hscBatch: "2022-2024", examDate: "March 20, 2025", coursesLink: "/details", tuitionFeeLink: "/details" },
  { name: "American Int’l University", session: "Summer 2025", hscBatch: "2022-2024", examDate: "March 20, 2025", coursesLink: "/details", tuitionFeeLink: "/details" },
  { name: "American Int’l University", session: "Summer 2025", hscBatch: "2022-2024", examDate: "March 20, 2025", coursesLink: "/details", tuitionFeeLink: "/details" },

  { name: "Ahsanullah University", session: "Fall 2024", hscBatch: "2022-2024", examDate: "August 12, 2024", coursesLink: "/details", tuitionFeeLink: "/details" }
];

const Homepage = () => {
  return (
    <div>
      <AdmissionTable universities={universitiesData} />
    </div>
  );
};

export default Homepage;
