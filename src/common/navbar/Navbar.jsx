import React, { useState } from 'react';
import {
  FaSearch,
  FaPhoneAlt,
  FaBars,
  FaGlobe,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
  FaLaptopCode,
  FaChartBar,
  FaBrain,
  FaCogs,
  FaLayerGroup,
  FaDatabase,
  FaCodeBranch,
  FaRobot,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
  FaEnvelope
} from 'react-icons/fa';
import logo from '../../assets/logo/rmg-logo.png';


export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

  const toggleMobileDropdown = (dropdown) => {
    setOpenMobileDropdown(openMobileDropdown === dropdown ? null : dropdown);
  };

  const menuItemStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '4px 12px',
    gap: '10px',
    transition: 'all 0.3s ease',
  };

  const categoriesMenuItems = [
    { key: '1', label: <div style={menuItemStyle}><FaLaptopCode className="text-orange-500" />Data Science Course</div> },
    { key: '2', label: <div style={menuItemStyle}><FaChartBar className="text-orange-500" />Data Analytics Course</div> },
    { key: '3', label: <div style={menuItemStyle}><FaBrain className="text-orange-500" />Machine Learning</div> },
    { key: '4', label: <div style={menuItemStyle}><FaCogs className="text-orange-500" />AI & Deep Learning</div> },
    { key: '5', label: <div style={menuItemStyle}><FaLayerGroup className="text-orange-500" />Full Stack Development</div> },
    { key: '6', label: <div style={menuItemStyle}><FaDatabase className="text-orange-500" />Database Management</div> },
    { key: '7', label: <div style={menuItemStyle}><FaCodeBranch className="text-orange-500" />DevOps Training</div> },
    { key: '8', label: <div style={menuItemStyle}><FaRobot className="text-orange-500" />Automation Testing</div> },
  ];

  const aboutMenuItems = [
    { key: '1', label: 'Our Story' },
    { key: '2', label: 'Team' },
    { key: '3', label: 'Vision & Mission' },
    { key: '4', label: 'Our Payment Policy' },
    { key: '5', label: 'What we do' },
    { key: '6', label: 'Core Committee' },
  ];

  const servicesMenuItems = [
    { key: '1', label: 'Consulting' },
    { key: '2', label: 'Custom Orders' },
    { key: '3', label: '24/7 Support' },
  ];

  return (
    <>
      {/* Top Bar - Desktop */}
      <div className="w-full bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center gap-8">
              <img src={logo} className="h-10" alt="RMG Logo" />
              <div className="relative hidden lg:block w-[400px]">
                <input
                  type="text"
                  placeholder="Search for courses..."
                  className="w-full px-5 py-2 rounded-full border border-gray-200 focus:border-yellow-400 outline-none transition-all duration-300"
                  aria-label="Search courses"
                />
                <FaSearch className="absolute right-4 top-3 text-gray-400" aria-hidden="true" />
              </div>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="bg-yellow-100 p-2 rounded-full">
                  <FaPhoneAlt className="text-yellow-600" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">24/7 Support</p>
                  <p className="text-sm font-medium">+91-9870287980</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-yellow-100 p-2 rounded-full">
                  <FaEnvelope className="text-yellow-600" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Email Us</p>
                  <p className="text-sm font-medium">contact@refermegroup.com</p>
                </div>
              </div>
            </div>

            <button
              className="md:hidden text-gray-600 hover:text-yellow-600 transition-colors"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open menu"
            >
              <FaBars size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation - Desktop */}
      <div className="w-full bg-gradient-to-r from-yellow-50 to-yellow-100 border-y hidden md:block sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center gap-1">
              <div className="dropdown">
                <button
                  className="flex items-center gap-2 bg-white text-yellow-600 px-5 py-2 rounded-full font-medium hover:shadow-md transition-all duration-300"
                  aria-haspopup="true"
                >
                  <FaBars className="text-lg" />
                  <span>All Courses</span>
                  <FaChevronDown className="text-xs mt-0.5" />
                </button>
                <div className="dropdown-menu rounded-lg shadow-lg bg-white">
                  {categoriesMenuItems.map((item) => (
                    <a
                      key={item.key}
                      href="#"
                      className="dropdown-item hover:bg-yellow-50"
                      style={menuItemStyle}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              <nav className="flex ml-6 gap-1" role="navigation">
                <NavLink href="/" aria-label="Home">Home</NavLink>
                <div className="dropdown">
                  <NavLink href="/about" className="flex items-center gap-1" aria-haspopup="true">
                    About Us
                    <FaChevronDown className="text-xs mt-0.5" />
                  </NavLink>
                  <div className="dropdown-menu rounded-lg shadow-lg bg-white">
                    {aboutMenuItems.map((item) => (
                      <a
                        key={item.key}
                        href="#"
                        className="dropdown-item hover:bg-yellow-50"
                        style={menuItemStyle}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="dropdown">
                  <NavLink href="#" className="flex items-center gap-1" aria-haspopup="true">
                    Our Services
                    <FaChevronDown className="text-xs mt-0.5" />
                  </NavLink>
                  <div className="dropdown-menu rounded-lg shadow-lg bg-white">
                    {servicesMenuItems.map((item) => (
                      <a
                        key={item.key}
                        href="#"
                        className="dropdown-item hover:bg-yellow-50"
                        style={menuItemStyle}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
                <NavLink href="#" aria-label="Jobs">Jobs</NavLink>
                <NavLink href="#" aria-label="Our Blogs">Our Blogs</NavLink>
                <NavLink href="/career" aria-label="Careers">Careers</NavLink>
                <NavLink href="/contact" aria-label="Contact Us">Contact Us</NavLink>
              </nav>
            </div>

            <div className="flex items-center gap-2">
              <SocialIcon icon={<FaFacebook />} bg="bg-blue-600" aria-label="Facebook" />
              <SocialIcon icon={<FaInstagram />} bg="bg-gradient-to-tr from-pink-600 to-amber-500" aria-label="Instagram" />
              <SocialIcon icon={<FaLinkedin />} bg="bg-blue-700" aria-label="LinkedIn" />
              <SocialIcon icon={<FaTwitter />} bg="bg-sky-500" aria-label="Twitter" />
              <SocialIcon icon={<FaYoutube />} bg="bg-red-600" aria-label="YouTube" />
              <SocialIcon icon={<FaWhatsapp />} bg="bg-green-500" aria-label="WhatsApp" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex justify-between items-center p-5 border-b sticky top-0 bg-white z-10">
          <img src={logo} className="h-8" alt="RMG Logo" />
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-gray-500 hover:text-yellow-600 transition-colors"
            aria-label="Close menu"
          >
            <FaTimes size={20} />
          </button>
        </div>

        <div className="p-4 border-b">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for courses..."
              className="w-full px-4 py-2 pl-10 rounded-full border border-gray-200 focus:border-yellow-400 outline-none"
              aria-label="Search courses"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" aria-hidden="true" />
          </div>
        </div>

       

        <div className="overflow-y-scroll h-[calc(100%-100px)]">
          <nav className="flex flex-col py-2" role="navigation">
            <MobileNavLink href="/" aria-label="Home">Home</MobileNavLink>
            <div className="border-b border-gray-100">
              <button
                className="w-full flex justify-between items-center px-5 py-3 text-left hover:bg-yellow-50 transition-colors"
                onClick={() => toggleMobileDropdown('courses')}
                aria-expanded={openMobileDropdown === 'courses'}
                aria-controls="mobile-courses-menu"
              >
                <span className="font-medium">All Courses</span>
                {openMobileDropdown === 'courses' ? (
                  <FaChevronUp className="text-xs text-gray-500" aria-hidden="true" />
                ) : (
                  <FaChevronDown className="text-xs text-gray-500" aria-hidden="true" />
                )}
              </button>
              {openMobileDropdown === 'courses' && (
                <div id="mobile-courses-menu" className="ml-6 py-1 space-y-1">
                  {categoriesMenuItems.map((item) => (
                    <a
                      key={item.key}
                      href="#"
                      className="block px-3 py-2 text-sm rounded hover:bg-yellow-50 flex items-center gap-2 transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <div className="border-b border-gray-100">
              <button
                className="w-full flex justify-between items-center px-5 py-3 text-left hover:bg-yellow-50 transition-colors"
                onClick={() => toggleMobileDropdown('about')}
                aria-expanded={openMobileDropdown === 'about'}
                aria-controls="mobile-about-menu"
              >
                <span className="font-medium">About Us</span>
                {openMobileDropdown === 'about' ? (
                  <FaChevronUp className="text-xs text-gray-500" aria-hidden="true" />
                ) : (
                  <FaChevronDown className="text-xs text-gray-500" aria-hidden="true" />
                )}
              </button>
              {openMobileDropdown === 'about' && (
                <div id="mobile-about-menu" className="ml-6 py-1 space-y-1">
                  {aboutMenuItems.map((item) => (
                    <a
                      key={item.key}
                      href="#"
                      className="block px-3 py-2 text-sm rounded hover:bg-yellow-50 transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <div className="border-b border-gray-100">
              <button
                className="w-full flex justify-between items-center px-5 py-3 text-left hover:bg-yellow-50 transition-colors"
                onClick={() => toggleMobileDropdown('services')}
                aria-expanded={openMobileDropdown === 'services'}
                aria-controls="mobile-services-menu"
              >
                <span className="font-medium">Our Services</span>
                {openMobileDropdown === 'services' ? (
                  <FaChevronUp className="text-xs text-gray-500" aria-hidden="true" />
                ) : (
                  <FaChevronDown className="text-xs text-gray-500" aria-hidden="true" />
                )}
              </button>
              {openMobileDropdown === 'services' && (
                <div id="mobile-services-menu" className="ml-6 py-1 space-y-1">
                  {servicesMenuItems.map((item) => (
                    <a
                      key={item.key}
                      href="#"
                      className="block px-3 py-2 text-sm rounded hover:bg-yellow-50 transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <MobileNavLink href="#" aria-label="Jobs">Jobs</MobileNavLink>
            <MobileNavLink href="#" aria-label="Our Blogs">Our Blogs</MobileNavLink>
            <MobileNavLink href="#" aria-label="Careers">Careers</MobileNavLink>
            <MobileNavLink href="#" aria-label="Contact Us">Contact Us</MobileNavLink>
          </nav>
        </div>

        <div className="p-4 border-b space-y-1">
          <div className="flex items-center gap-3">
            <div className="bg-yellow-100 p-2 rounded-full">
              <FaPhoneAlt className="text-yellow-600 text-sm" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs text-gray-500">24/7 Support</p>
              <p className="text-sm font-medium">+91-9870287980</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-yellow-100 p-2 rounded-full">
              <FaEnvelope className="text-yellow-600 text-sm" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Email Us</p>
              <p className="text-sm font-medium">contact@refermegroup.com</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-50 border-t">
          <div className="flex justify-center gap-3">
            <SocialIcon icon={<FaFacebook />} bg="bg-blue-600" size="sm" aria-label="Facebook" />
            <SocialIcon icon={<FaInstagram />} bg="bg-gradient-to-tr from-pink-600 to-amber-500" size="sm" aria-label="Instagram" />
            <SocialIcon icon={<FaLinkedin />} bg="bg-blue-700" size="sm" aria-label="LinkedIn" />
            <SocialIcon icon={<FaTwitter />} bg="bg-sky-500" size="sm" aria-label="Twitter" />
            <SocialIcon icon={<FaYoutube />} bg="bg-red-600" size="sm" aria-label="YouTube" />
            <SocialIcon icon={<FaWhatsapp />} bg="bg-green-500" size="sm" aria-label="WhatsApp" />
          </div>
        </div>
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}

function NavLink({ href, children, className = '', ...props }) {
  return (
    <a
      href={href}
      className={`px-4 py-2 text-sm font-medium text-gray-700 hover:text-yellow-600 transition-colors ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}

function MobileNavLink({ href, children, ...props }) {
  return (
    <a
      href={href}
      className="px-5 py-3 border-b border-gray-100 font-medium hover:bg-yellow-50 transition-colors"
      {...props}
    >
      {children}
    </a>
  );
}

function SocialIcon({ icon, bg, size = 'md', ...props }) {
  const sizeClasses = size === 'sm' ? 'p-1.5 text-sm' : 'p-2 text-base';
  return (
    <div
      className={`${bg} ${sizeClasses} rounded-full text-white hover:opacity-90 transition-opacity`}
      {...props}
    >
      {icon}
    </div>
  );
}