import {
  FiFacebook,
  FiTwitter,
  FiLinkedin,
  FiInstagram,
  FiMapPin,
  FiMail,
  FiPhone,
} from "react-icons/fi";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import logo from "/assets/logo/rmg-logo.png";

const Footer = () => {
  const quickLinks = [
    "Home",
    "Our Story",
    "What we do",
    "Meet Our Team",
    "Payment Policy",
    "Jobs",
    "Career",
    "Contact Us",
  ];
  const courses = [
    "Data Science Course",
    "Cybersecurity Course",
    "Data Analytics Course",
    "AI and Machine Learning Course",
    "Cloud Computing Course",
    "Blockchain Course",
    "Cloud Computing Course",
    "Blockchain Course",
  ];

  const resources = [
    "Course Info",
    "Tutorials",
    "Interview Questions",
    "Practice Tests",
    "Master Classes",
    "Blogs",
  ];

  const offerings = [
    "Live virtual (online)",
    "Classroom",
    "Agile Services",
    "Refer & Earn",
    "Corporate Training",
    "School Training",
    "Industrial Training",
    "IT Training",
  ];

  const topCategories = [
    "Technology",
    "Business",
    "Marketing",
    "Design",
    "Data Science",
    "Cybersecurity",
    "AI & Machine Learning",
    "Cloud ",
  ];

  const partners = [
    "Become an instructor",
    "Hire from Us",
    " Become a Training Partner",
    "Affiliates",
  ];
  const certifications = [
    "PRINCE2 Certification",
    "DevOps Foundation Certification",
    "Data Science with Python Certification",
    "Full-Stack Development Bootcamp",
    "Front-End Development Bootcamp",
    "Python Certification Training",
  ];

  const supportLegal = [
    "Privacy Policy",
    "Terms & Conditions",
    "Refund Policy",
    "Cookies Policy",
    "FAQs",
    "Sitemap",
  ];

  const renderList = (items) =>
    items.map((item, idx) => (
      <li key={idx}>
        <a
          href="#"
          className="group flex items-center gap-2 text-gray-200 hover:text-white transition duration-300 transform hover:translate-x-2"
        >
          <HiOutlineChevronDoubleRight className="text-indigo-400 group-hover:text-white" />
          {item}
        </a>
      </li>
    ));

  return (
    <>
      {/* Decorative Footer Image */}
      <img
        src="/assets/banners/footer.png"
        alt="Footer Banner"
        className="w-full"
        style={{ clipPath: "polygon(0 0, 100% 20%, 100% 100%, 0% 100%)" }}
      />

      <footer className="bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-gray-200">
        {/* ===== First Footer Section ===== */}
        <div className="max-w-full mx-auto px-12 py-12 grid grid-cols-1 md:grid-cols-6 gap-4">
          {/* Logo & Description */}
          <div>
            <div className="mb-4">
              <img src={logo} className="w-36" alt="Logo" />
            </div>
            <p className="text-sm leading-relaxed text-gray-300">
              We are dedicated to facilitating career advancement and fostering
              professional development. With a wealth of resources and
              initiatives, we strive to empower individuals at every stage of
              their journey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-xl">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">{renderList(quickLinks)}</ul>
          </div>

          {/* Courses / Offerings */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-xl">Offerings</h3>
            <ul className="space-y-2 text-sm">{renderList(offerings)}</ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-xl">Resources</h3>
            <ul className="space-y-2 text-sm">{renderList(resources)}</ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-xl">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <FiMapPin className="text-indigo-400 mt-1" />
                <span>
                  Refer Me Group
                  <br />
                  B-225, Aditya Park Town,
                  <br />
                  Ghaziabad (UP) 201002
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="text-indigo-400" />
                <a
                  href="mailto:contact@refermegroup.com"
                  className="hover:text-white"
                >
                  contact@refermegroup.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="text-indigo-400" />
                <a href="tel:+917678573511" className="hover:text-white">
                  +91 76785 73511
                </a>
              </li>
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-xl">
              Partner with Us
            </h3>
            <ul className="space-y-2 text-sm">{renderList(partners)}</ul>
          </div>
        </div>

        {/* ===== Second Footer Section (Extended / Duplicated) ===== */}
        <div className="max-w-full mx-auto px-12 pb-12 grid grid-cols-1 md:grid-cols-6 gap-4">
          {/* Quick Links (Repeated) */}
          <div className="md:col-span-1">
            <h3 className="text-white font-semibold mb-4 text-xl">Support</h3>
            <ul className="space-y-2 text-sm">{renderList(supportLegal)}</ul>
          </div>

          {/* Offerings Repeated */}
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-4 text-xl">
              Top Categories
            </h3>
            <div className="flex space-x-16">
              <ul className="space-y-2 text-sm">{renderList(topCategories)}</ul>
              <ul className="space-y-2 text-sm">{renderList(topCategories)}</ul>
            </div>
          </div>

          {/* Resources Repeated */}
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-4 text-xl">
              Top Courses
            </h3>
            <div className="flex space-x-8">
              <ul className="space-y-2 text-sm">{renderList(courses)}</ul>
              <ul className="space-y-2 text-sm">{renderList(courses)}</ul>
            </div>
          </div>

          {/* Quick Links (Repeated) */}
          <div className="md:col-span-1">
            <h3 className="text-white font-semibold mb-4 text-xl">
              Certifications
            </h3>
            <ul className="space-y-2 text-sm">{renderList(certifications)}</ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-indigo-700 py-4 text-center text-sm text-gray-400 flex justify-between flex-wrap gap-2 px-4">
          <div>
            <p>© All Copyrights Reserved by Refer Me Group</p>
          </div>
          <div>
            <p>
              © 2024 Designed & Developed By{" "}
              <a
                href="https://www.jaikviktechnology.com"
                className="text-indigo-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Jaikvik Technology India Pvt Ltd
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
