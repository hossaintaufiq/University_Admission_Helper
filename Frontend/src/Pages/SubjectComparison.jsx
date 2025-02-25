import  { useState } from "react";
import universityData from "../Data/universityData.json";

const SubjectComparison = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredUniversities = universityData.filter((university) =>
    university.courses.some((course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="p-4">
      <div className="mb-4 text-center">
        <h2 className="text-xl font-semibold mb-2">Find Your Desired Subject</h2>
        <p className="text-gray-600">Search here for the subject you are looking for</p>
      </div>
      <input
        type="text"
        placeholder="Search for a subject..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 rounded w-full mb-4 focus:ring-2 focus:ring-blue-500"
      />
      
      {searchTerm && (
        <div className="text-center mb-4">
          <h3 className="text-lg font-semibold">Results for: {searchTerm}</h3>
        </div>
      )}
      
      {searchTerm && (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-2">University</th>
                <th className="border border-gray-300 p-2">Credits</th>
                <th className="border border-gray-300 p-2">Cost</th>
              </tr>
            </thead>
            <tbody>
              {filteredUniversities.map((university) => (
                university.courses
                  .filter((course) =>
                    course.name.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .map((course, index) => (
                    <tr key={index} className="border border-gray-300">
                      <td className="border border-gray-300 p-2">{university.name}</td>
                      <td className="border border-gray-300 p-2">{course.credits}</td>
                      <td className="border border-gray-300 p-2">{course.cost}</td>
                    </tr>
                  ))
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default SubjectComparison;
