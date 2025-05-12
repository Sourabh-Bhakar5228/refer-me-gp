import React, { useState } from "react";
import { motion } from "framer-motion";

const CourseGallerySection = () => {
  const [activeCategory, setActiveCategory] = useState("All Courses");

  const categories = [
    "All Courses",
    "Agile Management",
    "Project Management",
    "Data Science",
    "Cloud Computing",
    "Web Development",
    "DevOps",
    "IT Security",
  ];

  const courses = [
    {
      category: "Agile Management",
      title: "Certified ScrumMaster (CSM)®",
      type: "Live Class / Classroom",
      duration: "16 Hrs",
      enrolled: "146,489 Enrolled",
      price: "₹ 15,999",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      recommended: true,
      trending: false,
      mostPurchased: true,
      topRanked: false,
    },
    {
      category: "Project Management",
      title: "CSPO® Certification",
      type: "Live Class / Classroom",
      duration: "16 Hrs",
      enrolled: "20,004 Enrolled",
      price: "₹ 15,489",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      recommended: true,
      trending: true,
      mostPurchased: false,
      topRanked: false,
    },
    {
      category: "Project Management",
      title: "PMP® Certification",
      type: "Live Class / Self-Paced",
      duration: "35 Hrs",
      enrolled: "135,183 Enrolled",
      price: "₹ 10,999",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      recommended: true,
      trending: false,
      mostPurchased: true,
      topRanked: true,
    },
    {
      category: "Data Science",
      title: "Data Science with Python",
      type: "Live Class / Self-Paced",
      duration: "40 Hrs",
      enrolled: "89,234 Enrolled",
      price: "₹ 12,999",
      image:
        "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      recommended: false,
      trending: true,
      mostPurchased: false,
      topRanked: false,
    },
    {
      category: "Cloud Computing",
      title: "AWS Solutions Architect",
      type: "Live Class / Classroom",
      duration: "24 Hrs",
      enrolled: "56,789 Enrolled",
      price: "₹ 14,999",
      image:
        "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      recommended: false,
      trending: false,
      mostPurchased: false,
      topRanked: true,
    },
    {
      category: "Project Management",
      title: "PMP® Certification",
      type: "Live Class / Self-Paced",
      duration: "35 Hrs",
      enrolled: "135,183 Enrolled",
      price: "₹ 10,999",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      recommended: true,
      trending: true,
      mostPurchased: false,
      topRanked: false,
    },
    {
      category: "Project Management",
      title: "PMP® Certification",
      type: "Live Class / Self-Paced",
      duration: "35 Hrs",
      enrolled: "135,183 Enrolled",
      price: "₹ 10,999",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      recommended: true,
      trending: false,
      mostPurchased: true,
      topRanked: false,
    },
    {
      category: "Project Management",
      title: "PMP® Certification",
      type: "Live Class / Self-Paced",
      duration: "35 Hrs",
      enrolled: "135,183 Enrolled",
      price: "₹ 10,999",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      recommended: true,
      trending: false,
      mostPurchased: false,
      topRanked: true,
    },
  ];

  const filteredCourses = courses.filter((course) =>
    activeCategory === "All Courses" ? true : course.category === activeCategory
  );

  return (
    <div className="py-10 px-4 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-800 opacity-20 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-800 opacity-20 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center mb-6 relative z-10"
      >
        <h2 className="text-sm font-semibold text-indigo-500 uppercase tracking-widest mb-2">
          FIND THE COURSE RIGHT FOR YOUR GOALS
        </h2>
        <h3 className="text-5xl font-extrabold text-gray-900 tracking-tight">
          Explore Over{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            400+ Courses
          </span>
        </h3>
      </motion.div>

      {/* Category Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="flex flex-wrap justify-center gap-3 mb-12 relative z-10"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-500 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-xl ${
              activeCategory === category
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                : "bg-white/70 text-gray-800 hover:bg-white/90"
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Course Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-full mx-auto relative z-10"
      >
        {filteredCourses.map((course, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
            className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:-translate-y-2 transition-all duration-500 border border-transparent bg-gradient-to-r from-indigo-100/30 via-purple-100/30 to-pink-100/30"
          >
            {/* Badges */}
            <div className="absolute top-2 left-2 flex flex-wrap gap-2 z-20">
              {course.recommended && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg border border-white/20"
                >
                  Recommended
                </motion.div>
              )}
              {course.trending && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg border border-white/20"
                >
                  Trending
                </motion.div>
              )}
              {course.mostPurchased && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg border border-white/20"
                >
                  Most Purchased
                </motion.div>
              )}
              {course.topRanked && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  className="bg-gradient-to-r from-purple-500 to-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg border border-white/20"
                >
                  Top Ranked
                </motion.div>
              )}
            </div>

            {/* Course Image */}
            <div className="relative group">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-90"></div>
              <div className="absolute bottom-4 left-4 text-white text-sm font-medium z-10">
                {course.type}
              </div>
            </div>

            {/* Course Details */}
            <div className="p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">
                {course.title}
              </h4>
              <div className="flex items-center space-x-5 mb-4">
                <div className="flex items-center text-gray-600">
                  <svg
                    className="w-5 h-5 mr-2 text-indigo-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-sm font-medium">{course.duration}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <svg
                    className="w-5 h-5 mr-2 text-indigo-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="text-sm font-medium">{course.enrolled}</span>
                </div>
              </div>
              <p className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-5">
                {course.price}
              </p>
              <div className="flex space-x-4">
                <button className="flex-1 bg-white border border-gray-200 text-gray-800 py-2.5 rounded-xl hover:bg-gray-50 hover:shadow-md transition-all duration-300 font-medium">
                  View Certification
                </button>
                <button className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2.5 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center font-medium shadow-lg">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Curriculum
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CourseGallerySection;
