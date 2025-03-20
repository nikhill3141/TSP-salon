import React from 'react';


function About() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">About Us</h2>
          <p className="text-lg text-gray-600">Discover our story and commitment to excellence</p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="w-full md:w-[40%] shadow-xl  ">
            <img
              src="https://images.pexels.com/photos/705255/pexels-photo-705255.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="TSP Salon Interior"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>
          
          <div className="w-full md:w-1/2 space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-primary">
              Welcome to TSP Salon & Spa
            </h3>
            <p className="text-gray-700">
              Established in 2010, TSP Salon & Spa has been a premier
              destination for beauty and relaxation in the heart of the city.
              Our founder, Emma Roberts, started with a vision to create a
              sanctuary where clients could escape the hustle and bustle of
              everyday life while receiving exceptional beauty services.
            </p>
            <p className="text-gray-700">
              What sets us apart is our team of highly skilled professionals
              who are passionate about their craft and committed to continuous
              education in the latest techniques and trends. We use only
              premium products that are kind to your hair, skin, and the
              environment.
            </p>
            <p className="text-gray-700">
              Our salon is designed to provide a luxurious yet welcoming
              atmosphere where every client feels valued and leaves feeling
              refreshed, confident, and beautiful.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default About;