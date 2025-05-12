import React from "react";
import { useForm } from "react-hook-form";
import banner from "/assets/banners/bann2.jpg";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMobileAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Simulate form submission (e.g., send to API)
    console.log("Form Data:", data);
    alert("Thank you for your message! We will get back to you soon.");
  };

  return (
    <>
      <div>
        <img src={banner} alt="" className="w-full" />
      </div>
      <div className="min-h-screen bg-blue-50 py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
            Contact Us
          </h1>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We're here to help! Fill out the form below, reach us via our
            contact details, or visit us at our location.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-700 mb-6">
                Send Us a Message
              </h2>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
                noValidate
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className={`mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                    {...register("name", {
                      required: "Name is required",
                      minLength: {
                        value: 2,
                        message: "Name must be at least 2 characters",
                      },
                    })}
                    aria-invalid={errors.name ? "true" : "false"}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-sm text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={`mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Enter a valid email address",
                      },
                    })}
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className={`mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="+919876543210"
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^\+91[6-9][0-9]{9}$/,
                        message:
                          "Enter a valid Indian phone number (e.g., +919876543210)",
                      },
                    })}
                    aria-invalid={errors.phone ? "true" : "false"}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="mt-1 text-sm text-red-500">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className={`mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all ${
                      errors.subject ? "border-red-500" : "border-gray-300"
                    }`}
                    {...register("subject", {
                      required: "Subject is required",
                      minLength: {
                        value: 5,
                        message: "Subject must be at least 5 characters",
                      },
                    })}
                    aria-invalid={errors.subject ? "true" : "false"}
                    aria-describedby={
                      errors.subject ? "subject-error" : undefined
                    }
                  />
                  {errors.subject && (
                    <p id="subject-error" className="mt-1 text-sm text-red-500">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className={`mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    }`}
                    {...register("message", {
                      required: "Message is required",
                      minLength: {
                        value: 10,
                        message: "Message must be at least 10 characters",
                      },
                    })}
                    aria-invalid={errors.message ? "true" : "false"}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                  ></textarea>
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-sm text-red-500">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-yellow-600 text-white font-medium rounded-full hover:bg-yellow-700 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
                    aria-label="Submit contact form"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Details and Map */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-700 mb-6">
                  Get in Touch
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-yellow-100 p-2 rounded-full">
                      <FaEnvelope
                        className="text-yellow-600 text-sm"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Email Us</p>
                      <p className="text-sm font-medium">
                        <a
                          href="mailto:contact@refermegroup.com"
                          className="hover:text-yellow-600"
                        >
                          contact@refermegroup.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-yellow-100 p-2 rounded-full">
                      <FaPhoneAlt
                        className="text-yellow-600 text-sm"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Phone</p>
                      <p className="text-sm font-medium">
                        <a
                          href="tel:+91 76785 73511"
                          className="hover:text-yellow-600"
                        >
                          +91 76785 73511
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-yellow-100 p-2 rounded-full">
                      <FaMobileAlt
                        className="text-yellow-600 text-sm"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Mobile</p>
                      <p className="text-sm font-medium">
                        <a
                          href="tel:+91 76785 73511"
                          className="hover:text-yellow-600"
                        >
                          +91 76785 73511
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-yellow-100 p-2 rounded-full">
                      <FaMapMarkerAlt
                        className="text-yellow-600 text-sm"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Address</p>
                      <p className="text-sm font-medium">
                        B-225, Aditya Park Town, Ghaziabad (UP) 201002
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-700 mb-6">
                  Our Location
                </h2>
                <div className="w-full h-64 md:h-80">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.819440135093!2d77.2167213150828!3d28.632429982418885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001%2C%20India!5e0!3m2!1sen!2sin!4v1698765432109!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="ReferMeGroup Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
