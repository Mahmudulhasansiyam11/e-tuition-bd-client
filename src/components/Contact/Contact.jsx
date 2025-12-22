import React from 'react';
import Container from '../Shared/Container';
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend } from 'react-icons/fi';

const Contact = () => {
  const contactDetails = [
    {
      id: 1,
      icon: <FiPhone className="text-blue-600" />,
      title: "Call Us",
      info: "+880 1234 567 890",
      subInfo: "Mon - Fri, 9am - 6pm",
    },
    {
      id: 2,
      icon: <FiMail className="text-blue-600" />,
      title: "Email Us",
      info: "support@tuitionlink.com",
      subInfo: "Online support 24/7",
    },
    {
      id: 3,
      icon: <FiMapPin className="text-blue-600" />,
      title: "Our Office",
      info: "Dhanmondi, Dhaka",
      subInfo: "Bangladesh",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Hero Header */}
      <div className="bg-[#0A1F4A] py-20 text-white text-center">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Have questions about finding a tutor or posting a tuition? 
            Our team is here to help you every step of the way.
          </p>
        </Container>
      </div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-[-60px]">
          {/* Contact Information Cards */}
          <div className="lg:col-span-1 space-y-6">
            {contactDetails.map((item) => (
              <div 
                key={item.id} 
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-5 hover:shadow-md transition-shadow"
              >
                <div className="bg-blue-50 p-4 rounded-2xl text-2xl">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-[#0A1F4A] text-lg">{item.title}</h3>
                  <p className="text-gray-900 font-medium mt-1">{item.info}</p>
                  <p className="text-gray-500 text-sm mt-1">{item.subInfo}</p>
                </div>
              </div>
            ))}
            
            {/* Working Hours Special Card */}
            <div className="bg-gradient-to-br from-[#0A1F4A] to-blue-900 p-8 rounded-3xl text-white shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <FiClock className="text-xl text-blue-300" />
                <h3 className="font-bold text-lg">Support Hours</h3>
              </div>
              <p className="text-blue-100 text-sm leading-relaxed">
                Our student and tutor support team is available for live chat 
                and calls during business hours. Emails are typically 
                answered within 24 hours.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-gray-100">
            <h2 className="text-3xl font-bold text-[#0A1F4A] mb-8">Send us a Message</h2>
            
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Subject</label>
                <select className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 outline-none transition-all appearance-none cursor-pointer">
                  <option>General Inquiry</option>
                  <option>Tutor Verification Help</option>
                  <option>Tuition Posting Issue</option>
                  <option>Payment/Subscription</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">How can we help?</label>
                <textarea 
                  rows="5" 
                  placeholder="Tell us more about your needs..." 
                  className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full md:w-auto px-10 py-4 bg-[#0A1F4A] text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/20 flex items-center justify-center gap-3 active:scale-95"
              >
                <FiSend /> Send Message
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;