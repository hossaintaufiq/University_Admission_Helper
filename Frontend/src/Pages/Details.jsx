
// import { useParams } from "react-router-dom";
// import universityData from "../Data/universityData.json";

// const Details = () => {
//   const { universityId } = useParams();
//   const university = universityData.find((uni) => uni.id === parseInt(universityId));

//   if (!university) {
//     return <p className="text-center text-red-500">University not found</p>;
//   }

//   return (
//     <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
//       <div className="flex items-center space-x-4">
//         <img src={university.logo} alt={university.name} className="w-20 h-20 object-contain" />
//         <div>
//           <h2 className="text-2xl font-bold">{university.name}</h2>
//           <p className="text-gray-600">Established: {university.establishment}</p>
//           <p className="text-gray-600">IEB Certified: {university.iebCertified ? "Yes" : "No"}</p>
//         </div>
//       </div>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white shadow-md rounded-lg">
//           <thead>
//             <tr className="bg-purple-600 text-white">
//               <th className="py-2 px-4">Offering Courses</th>
//               <th className="py-2 px-4">Cost</th>
//               <th className="py-2 px-4">Credit Count</th>
//             </tr>
//           </thead>
//           <tbody>
//             {university.courses.map((course, index) => (
//               <tr key={index} className="border-t text-center">
//                 <td className="py-2 px-4">{course.name}</td>
//                 <td className="py-2 px-4">{course.cost}</td>
//                 <td className="py-2 px-4">{course.credits}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Details


// 
import { useParams } from "react-router-dom";
import universityData from "../Data/universityData.json";

const Details = () => {
  const { universityId } = useParams();
  const university = universityData.find((uni) => uni.id === parseInt(universityId));

  if (!university) {
    return <p className="text-center text-red-500">University not found</p>;
  }

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex items-center space-x-4">
        <img src={university.logo} alt={university.name} className="w-20 h-20 object-contain" />
        <div>
          <h2 className="text-2xl font-bold">{university.name}</h2>
          <p className="text-gray-600">Established: {university.establishment}</p>
          <p className="text-gray-600">IEB Certified: {university.iebCertified ? "Yes" : "No"}</p>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-purple-600 text-white">
              <th className="py-2 px-4">Offering Courses</th>
              <th className="py-2 px-4">Cost</th>
              <th className="py-2 px-4">Credit Count</th>
            </tr>
          </thead>
          <tbody>
            {university.courses.map((course, index) => (
              <tr key={index} className="border-t text-center">
                <td className="py-2 px-4">{course.name}</td>
                <td className="py-2 px-4">{course.cost}</td>
                <td className="py-2 px-4">{course.credits}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Details;
