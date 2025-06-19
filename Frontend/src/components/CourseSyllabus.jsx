// import React from "react";
// import { FiChevronRight  } from "react-icons/fi";

// export default function ExamStrategyPage() {
//   return (
//     <>
//       <div className="bg-gradient-to-b from-[#3A0CA3] to-[#7209B7] text-white p-6 md:p-10">
//         {/* Header Section */}
//         <div className="text-center max-w-3xl mx-auto">
//           <div className="flex justify-center mb-4">
//             <div className="bg-white/10 p-4 rounded-full">
//               <span className="text-3xl">📖</span>
//             </div>
//           </div>
//           <h1 className="text-3xl md:text-5xl font-bold">
//             Master Your Exams with <span className="text-yellow-300">Proven Strategies</span>
//           </h1>
//           <p className="mt-4 text-lg md:text-xl text-white/80">
//             Transform your study approach with research-backed techniques that reduce stress,
//             boost retention, and maximize your academic performance across all subjects.
//           </p>
//           <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-white/80">
//             <span className="bg-white/10 px-4 py-2 rounded-full">⏱️ 8-12 min read</span>
//             <span className="bg-white/10 px-4 py-2 rounded-full">🎓 All academic levels</span>
//           </div>
//         </div>
//       </div>

//       <div className="mb-10">
//         {/* Content Section */}
//         <div className="mt-12 flex lg:flex-row gap-6 ml-32">
//           {/* Grade Selector */}
//           <div className="bg-white text-black rounded-xl shadow-md w-72 max-w-xs p-4">
//             <div className="font-semibold text-lg mb-4">📚 TNPSC</div>
//             {['6th', '7th', '8th', '9th', '10th', '11th', '12th'].map((grade) => (
//               <div
//                 key={grade}
//                 className="mb-2 cursor-pointer bg-blue-50 hover:bg-blue-200 rounded-lg px-3 py-2 transition"
//               >
//                 <span className="text-blue-600 font-semibold flex items-center justify-between">{grade} <FiChevronRight /></span>
//               </div>
//             ))}
//           </div>

//           {/* Subject List */}
//           <div className="bg-white text-black rounded-xl shadow-md w-full max-w-xl p-4">
//             <div className="font-semibold text-lg mb-4">📚 Subjects</div>
//             {[
//               "Tamil",
//               "English",
//               "Mathematics",
//               "Science",
//               "Social Science",
//               "Additional Theory",
//             ].map((subject) => (
//               <div
//                 key={subject}
//                 className="flex items-center justify-between mb-2 bg-blue-50 hover:bg-blue-100 px-4 py-3 rounded-lg cursor-pointer transition"
//               >
//                 <div className="flex items-center gap-3">
//                   <span>📘</span>
//                   <span className="font-medium text-blue-700">{subject}</span>
//                 </div>
//                 <span className="text-blue-500">➔</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }






import React, { useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function ExamStrategyPage() {
  const [selectedGrade, setSelectedGrade] = useState("6th");
  const navigate = useNavigate()

  const subjectsByGrade = {
    "6th": ["Tamil", "English", "Mathematics", "Science", "Social Science", "Additional Theory"],
    "7th": ["Tamil", "English", "Mathematics", "Science", "Social Science"],
    "8th": ["Tamil", "English", "Mathematics", "Science", "Computer Science"],
    "9th": ["Tamil", "English", "Mathematics", "Science", "Social Science"],
    "10th": ["Tamil", "English", "Mathematics", "Science", "Social Science"],
    "11th": ["Tamil", "English", "Mathematics", "Physics", "Chemistry", "Biology"],
    "12th": ["Tamil", "English", "Mathematics", "Physics", "Chemistry", "Computer Science"],
  };


  const handleCourseClick = () => {
    navigate(`/blogs/${subject}`)
  }

  return (
    <>
      <div className="bg-gradient-to-b from-[#3A0CA3] to-[#7209B7] text-white p-6 md:p-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex justify-center mb-4">
            <div className="bg-white/10 p-4 rounded-full">
              <span className="text-3xl">📖</span>
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold">
            Master Your Exams with <span className="text-yellow-300">Proven Strategies</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/80">
            Transform your study approach with research-backed techniques that reduce stress,
            boost retention, and maximize your academic performance across all subjects.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-white/80">
            <span className="bg-white/10 px-4 py-2 rounded-full">⏱️ 8-12 min read</span>
            <span className="bg-white/10 px-4 py-2 rounded-full">🎓 All academic levels</span>
          </div>
        </div>
      </div>

      <div className="mb-10">
        {/* Content Section */}
        <div className="mt-12 flex flex-col lg:flex-row gap-6 px-6 lg:px-32 justify-center">
          {/* Grade Selector */}
          <div className="bg-white text-black rounded-xl shadow-md w-full max-w-xs p-4">
            <div className="font-semibold text-lg mb-4">📚 TNPSC</div>
            {Object.keys(subjectsByGrade).map((grade) => (
              <div
                key={grade}
                onClick={() => setSelectedGrade(grade)}
                className={`mb-2 cursor-pointer rounded-lg px-3 py-2 transition flex items-center justify-between ${
                  selectedGrade === grade
                    ? "bg-blue-200 text-blue-800 font-semibold"
                    : "bg-blue-50 hover:bg-blue-100 text-blue-600"
                }`}
              >
                <span>{grade}</span>
                <FiChevronRight />
              </div>
            ))}
          </div>

          {/* Subject List */}
          <div className="bg-white text-black rounded-xl shadow-md w-full max-w-xl p-4">
            <div className="font-semibold text-lg mb-4">📚 Subjects for {selectedGrade}</div>
            {subjectsByGrade[selectedGrade].map((subject) => (
              <div
                key={subject}
                className="flex items-center justify-between mb-2 bg-blue-50 hover:bg-blue-100 px-4 py-3 rounded-lg cursor-pointer transition"
              >
                <div className="flex items-center gap-3">
                  <span>📘</span>
                  <span onClick={() => handleCourseClick(subject)} className="font-medium text-blue-700">{subject}</span>
                </div>
                <span className="text-blue-500">➔</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
