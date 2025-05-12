import React from "react";

function KnowledgeFLOSection() {
  return (
    <div
      className="bg-contain  bg-repeat "
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(255, 245, 157, 0.6), rgba(255, 255, 255, 0.3)), url('/assets/bg-img/pen.jpg')",
      }}
    >
      {/* First Section: Image on Left, Text on Right */}
      <section className="bg-transparent py-4 md:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-0">
          {/* Left Side - Image with Overlay */}
          <div className="w-full md:w-1/2 relative">
            <div className="bg-blue-50 rounded-lg p-6 md:p-8 h-full flex flex-col justify-between">
              {/* Logo and Tagline */}
              <div className="mb-4">
                <h2 className="text-3xl font-bold text-blue-500">
                  KnowledgeFLO
                </h2>
                <p className="text-blue-600 text-sm mt-1">
                  Talent Management Just Got Smarter
                </p>
              </div>
              {/* Illustration Placeholder */}
              <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                <img
                  src="/assets/creatives/girl.jpg"
                  alt="KnowledgeFLO Illustration"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="w-full md:w-1/2 p-5 bg-red-300">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              KnowledgeFLO: Next-Gen LMS & Performance Management Solutions
            </h3>
            <p className="text-gray-600 mb-6">
              Build community around your learning content and discover a
              next-gen approach to feedback and continuous engagement. Find out
              now what the experts are saying about KnowledgeFLO.com
            </p>
            <a
              href="#learn-more"
              className="text-blue-600 font-semibold hover:underline transition-colors duration-200"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Second Section: Text on Left, Image on Right */}
      <section className="bg-transparent py-4 md:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-0">
          {/* Left Side - Text Content */}
          <div className="w-full md:w-1/2 bg-green-300">
            <div className="p-5">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                KnowledgeFLO: Next-Gen LMS & Performance Management Solutions
              </h3>
              <p className="text-gray-600 mb-6">
                Build community around your learning content and discover a
                next-gen approach to feedback and continuous engagement. Find
                out now what the experts are saying about KnowledgeFLO.com
              </p>
              <a
                href="#learn-more"
                className="text-blue-600 font-semibold hover:underline transition-colors duration-200"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Side - Image with Overlay */}
          <div className="w-full md:w-1/2 relative">
            <div className="bg-blue-100 rounded-lg p-6 md:p-8 h-full flex flex-col justify-between">
              {/* Logo and Tagline */}
              <div className="mb-4">
                <h2 className="text-3xl font-bold text-blue-800">
                  KnowledgeFLO
                </h2>
                <p className="text-blue-600 text-sm mt-1">
                  Talent Management Just Got Smarter
                </p>
              </div>
              {/* Illustration */}
              <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                <img
                  src="/assets/creatives/girl.jpg"
                  alt="KnowledgeFLO Illustration"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-transparent py-4 md:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-0">
          {/* Left Side - Image with Overlay */}
          <div className="w-full md:w-1/2 relative">
            <div className="bg-blue-50 rounded-lg p-6 md:p-8 h-full flex flex-col justify-between">
              {/* Logo and Tagline */}
              <div className="mb-4">
                <h2 className="text-3xl font-bold text-blue-500">
                  KnowledgeFLO
                </h2>
                <p className="text-blue-600 text-sm mt-1">
                  Talent Management Just Got Smarter
                </p>
              </div>
              {/* Illustration Placeholder */}
              <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                <img
                  src="/assets/creatives/girl.jpg"
                  alt="KnowledgeFLO Illustration"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="w-full md:w-1/2 p-5 bg-red-300">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              KnowledgeFLO: Next-Gen LMS & Performance Management Solutions
            </h3>
            <p className="text-gray-600 mb-6">
              Build community around your learning content and discover a
              next-gen approach to feedback and continuous engagement. Find out
              now what the experts are saying about KnowledgeFLO.com
            </p>
            <a
              href="#learn-more"
              className="text-blue-600 font-semibold hover:underline transition-colors duration-200"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default KnowledgeFLOSection;
