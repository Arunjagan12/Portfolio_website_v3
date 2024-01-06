import React from 'react';

const Contact = () => {
  return (
    <section>
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md border  border-[#2A0E61] rounded-lg  z-50">
      <h2 className="text-[45px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-bold mt-[10px] text-center mb-[15px]">
          Contact Us
        </h2>
      
        
        <form action="#" className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-cyan-500"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="Enter your Mail ID"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-cyan-500"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-cyan-500"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows={6}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-2 border  border-[#2A0E61] w-full text-center text-white cursor-pointer rounded-lg"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;