import React from "react";

const Steps = () => {
  return (
    <>
      <div 
        className="max-w-screen-2xl mx-auto container md:px-16 px-6 py-14"
        data-aos="fade-right"  
      >
        <div 
          className="text-center space-y-1 my-4"
          data-aos="fade-down"  
        >
          <h2 className="text-purple-700 font-bold md:text-3xl text-2xl">How It Works</h2>
          <p className="md:text-lg text-base font-semibold">
            Creating your website is quick and simple. Just follow these three
            easy steps!
          </p>
        </div>
        <div 
          className="mt-12 grid md:grid-cols-3 gap-12">
          <div 
            className="flex flex-col pt-8 pb-8 items-center rounded-2xl bg-white border border-purple-500 p-3 shadow-2xl shadow-purple-600"
            data-aos="fade-up"  
          >
            <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white text-2xl font-bold">1</span>
            </div>
            <div className="text-4xl text-purple-700 mb-6 shadow-xl shadow-purple-100">
              _______________
            </div>
            <h3 className="text-xl font-semibold mb-4">
              Choose a Template
            </h3>
            <p className="text-gray-600 text-center">
              Pick a template from our library that suits your needs. Whether
              it's a portfolio, business site, or landing page, we have options
              for every use case.
            </p>
          </div>
          <div 
            className="flex flex-col pt-8 pb-8 items-center rounded-2xl bg-white border border-purple-500 p-3 shadow-2xl shadow-purple-600"
            data-aos="fade-up"  
          >
            <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white text-2xl font-bold">2</span>
            </div>
            <div className="text-4xl text-purple-700 mb-6 shadow-xl shadow-purple-100">
              _______________
            </div>
            <h3 className="text-xl font-semibold mb-4">
              Customize Your Site
            </h3>
            <p className="text-gray-600 text-center">
              Easily edit text, images, and sections. See changes in real-time
              with an interactive preview.
            </p>
          </div>
          <div 
            className="flex flex-col pt-8 pb-8 items-center rounded-2xl bg-white border border-purple-500 p-3 shadow-2xl shadow-purple-600"
            data-aos="fade-up"  
          >
            <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white text-2xl font-bold">3</span>
            </div>
            <div className="text-4xl text-purple-700 mb-6 shadow-xl shadow-purple-100">
              _______________
            </div>
            <h3 className="text-xl font-semibold mb-4">
              Publish & Go Live
            </h3>
            <p className="text-gray-600 text-center">
              Once you’re satisfied with your site, publish it with one click.
              Your site will be live on your custom URL in no time!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Steps;
