"use client";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import github from "../assets/github.jpeg";
import React, { useEffect } from "react";
import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS styles

const locations = [
  {
    title: "Bengaluru",
    timings: "total users : 1203",
    address: "active users : 390",
  },
  {
    title: "Surat",
    timings: "total users : 1915",
    address: "active users : 983",
  },
  {
    title: "Jaipur",
    timings: "total users : 2179",
    address: "active users : 530",
  },
];

const users = [
  {
    name: "Hitesh Suthar",
    image:
      "https://res.cloudinary.com/dno70sflf/image/upload/v1725797995/Resume_Builder/photos/xltqwg7sj2cgnmx2dh2t.jpg",
    position: "Group Leader",
  },
  {
    name: "Kamlesh Suthar",
    image:
      "https://res.cloudinary.com/dno70sflf/image/upload/v1725798194/Resume_Builder/photos/s81w73ac0qgoejtye6uw.png",
    position: "Group Member",
  },
  {
    name: "Chandan Polai",
    image:
      "https://res.cloudinary.com/dno70sflf/image/upload/v1725797170/Resume_Builder/photos/v8uw9faq3ezl4hkfo0dt.png",
    position: "Group Member",
  },
  {
    name: "Vivek Paradva",
    image:
      "https://res.cloudinary.com/dno70sflf/image/upload/v1725797771/Resume_Builder/photos/tvkkuieqvbmqzmdoixud.png",
    position: "Group Member",
  },
];

function AboutPageOne() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Easing effect
      once: false, // Animation occurs only once
    });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div
        className="mx-auto max-w-7xl px-4"
        data-aos="fade-right"
      >
        {/* Hero Map */}
        <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
          <div className="max-w-max rounded-full border bg-gray-50 p-1 px-3">
            <p className="text-xs font-semibold leading-normal md:text-sm">
              Across the World
            </p>
          </div>
          <p
            className="text-3xl font-bold text-gray-900 md:text-5xl md:leading-10"
            data-aos="fade-down"
          >
            Made with love, right here in India
          </p>
          <p
            className="max-w-4xl text-base text-gray-600 md:text-xl"
            data-aos="fade-down"
          >
            Our users are from across the world, but here we have pinned three
            top cities, and from those cities, our most active users belong.
          </p>
        </div>

        {/* locations */}
        <div
          className="my-8 flex rounded-2xl pt-8 pb-8 border border-purple-300 shadow-xl bg-gradient-to-b from-purple-50 to-purple-200 flex-col gap-y-6 md:flex-row lg:justify-around"
          data-aos="fade-up"
        >
          {locations.map((location) => (
            <div
              key={location.title}
              className="flex flex-col space-y-3 md:w-2/4 lg:w-1/5"
              data-aos="fade-up"
            >
              <MapPin className="h-5 w-5" />
              <p className="w-full text-xl font-semibold text-gray-900">
                {location.title}
              </p>
              <p className="w-full text-base text-gray-700">{location.timings}</p>
              <p className="text-sm font-medium">{location.address}</p>
            </div>
          ))}
        </div>

        {/* greetings */}
        <div
          data-aos="fade-right"
        >
          <div className="mt-16 flex items-center" data-aos="fade-down">
            <div className="space-y-6 md:w-3/4">
              <div className="max-w-max rounded-full border bg-gray-50 p-1 px-3">
                <p className="text-xs font-semibold leading-normal md:text-sm">
                  Our Team &rarr;
                </p>
              </div>
              <p className="text-3xl font-bold text-gray-900 md:text-4xl">
                Meet our team
              </p>
              <p className="max-w-4xl text-base text-gray-700 md:text-xl">
                Our philosophy is simple — hire a team of diverse, passionate
                people and foster a culture that empowers you to do your best
                work.
              </p>
              <div></div>
            </div>
          </div>
        </div>

        {/* TEAM */}
        <div
          className="grid grid-cols-1 gap-4 gap-y-6 p-4 border border-purple-300 shadow-xl rounded-2xl bg-gradient-to-b from-purple-50 to-purple-200 border-gray-300 py-12 pb-20 md:grid-cols-2 lg:grid-cols-4"
        >
          {users.map((user) => (
            <div className="rounded-md border" data-aos="fade-up" key={user.name}>
              <img
                src={user.image}
                alt={user.name}
                className="h-[300px] duration-300 hover:shadow-purple-700 shadow-xl shadow-purple-400 hover:scale-[1.05] w-full rounded-lg object-cover"
              />
              <p className="mt-6 w-full px-2 text-xl font-semibold text-gray-900">
                {user.name}
              </p>
              <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500">
                {user.position}
              </p>
            </div>
          ))}
        </div>

        {/* Hiring Banner */}
        <div
          className="flex mt-40 flex-col items-center gap-x-4 border border-purple-300 shadow-xl rounded-2xl p-4 gap-y-4 bg-gradient-to-b from-purple-50 to-purple-200 py-16 md:flex-row"
          data-aos="fade-up"
        >
          <div
            className="space-y-6"
            data-aos="fade-right"
          >
            <div
              className="my-8 flex md:justify-normal justify-center">
              <Link
                to="./steps"
                className="relative group px-6 py-3 bg-purple-500 hover:bg-purple-700 text-white rounded-lg transition duration-300 flex items-center"
              >
                Join Our Team Now
                <LiaLongArrowAltRightSolid className="ml-1 hidden group-hover:block text-xl duration-300" />
              </Link>
            </div>
            <p className="text-3xl font-bold md:text-4xl">
              We&apos;re just getting started
            </p>
            <p className="text-base text-gray-600 md:text-lg">
              Our philosophy is simple — create a team of some interested,
              intelligent, passionate people and foster a culture that empowers
              you to do your best work.
            </p>
            <button
              onClick={() => navigate("/steps")}
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Join Now
            </button>
          </div>
          <div
            className="md:mt-o hover:shadow-purple-700 duration-300 shadow-xl shadow-purple-400 hover:scale-[0.5] mt-10 w-full"
            data-aos="fade-left"
          >
            <img
              src="https://images.unsplash.com/photo-1605165566807-508fb529cf3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
              alt="Getting Started"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Website Builder Section */}
        <div
          className="flex flex-col mt-[11%] md:flex-row items-center justify-center text-center md:text-left border border-purple-300 shadow-xl rounded-2xl p-6 gap-y-6 bg-gradient-to-b from-purple-50 to-purple-200 py-32 w-full max-w-7xl mx-auto"
          data-aos="fade-right"
        >
          <div className="space-y-6 max-w-4xl">
            <p className="text-3xl font-bold text-gray-900 md:text-4xl" data-aos="fade-down">Build Your Website Effortlessly</p>
            <p className="text-base text-gray-700 md:text-lg" data-aos="fade-down">
              Our website builder empowers you to create a professional website effortlessly. Choose from a diverse range of templates, customize every element, and make your brand stand out.
            </p>
            <p className="text-base text-gray-700 md:text-lg" data-aos="fade-down">
              Features include an intuitive drag-and-drop editor, responsive design templates, and full customization options. Modify colors, fonts, layouts, and add interactive elements without coding knowledge.
            </p>
            <p className="text-base text-gray-700 md:text-lg" data-aos="fade-up">
              Our platform allows you to create stunning websites using a variety of unique templates. Easily add, remove, and customize templates to fit your brand.
            </p>
            <p className="text-base text-gray-700 md:text-lg" data-aos="fade-up">
              Whether you're a beginner or a developer, our platform caters to all skill levels.
            </p>
          </div>
        </div>

        {/* Website Builder Section - Expanded */}
        <div
          className="flex flex-col mt-[11%] md:flex-row duration-[1000ms] items-center justify-center text-center md:text-left border border-purple-300 shadow-xl rounded-2xl p-6 gap-y-6 bg-gradient-to-b from-purple-50 to-purple-200 py-32 w-full max-w-7xl mx-auto"
          data-aos="fade-up"
        >
          <div className="space-y-6 max-w-4xl">
            <p data-aos="fade-right" className="text-3xl font-bold mt-[-10%] text-gray-900 md:text-4xl">Publish Your Website with Ease</p>
            <p data-aos="fade-right" className="text-base text-gray-700 md:text-lg">
              For developers, our GitHub integration allows seamless deployment, version control, and collaborative enhancements. Push updates with ease and maintain complete control over your project.
            </p>
            <p data-aos="fade-right" className="text-base text-gray-700 md:text-lg">
              Once ready, deploy your site directly to GitHub and go live instantly. Our platform ensures a smooth experience from development to deployment, making it ideal for businesses, portfolios, and startups.
            </p>
          </div>
          <div
            className="md:mt-0 hover:shadow-purple-700 duration-[1000ms] shadow-xl shadow-purple-400 hover:scale-[0.5] mt-10 w-full"
            data-aos="fade-left"
          >
            <img
              src={github}
              alt="Getting Started"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Create Website Banner */}
        <div
          className="flex flex-col mt-[11%] md:flex-row items-center justify-center text-center md:text-left border border-purple-300 shadow-xl rounded-2xl p-6 gap-y-6 bg-gradient-to-b from-purple-50 to-purple-200 py-32 w-full max-w-7xl mx-auto"
          data-aos="fade-right"
        >
          <div className="space-y-6 w-full px-4 md:w-2/3">
            <p className="text-3xl font-bold md:text-4xl" data-aos="fade-down">
              Don't wait any longer, create your website today!
            </p>
            <div className="flex justify-center md:justify-start" data-aos="fade-up">
              <button
                onClick={() => navigate("/steps")}
                type="button"
                className="relative group px-6 py-3 bg-purple-500 hover:bg-purple-700 text-white rounded-lg transition duration-300 flex items-center"
              >
                Create a Website
                <LiaLongArrowAltRightSolid className="ml-1 hidden group-hover:block text-xl duration-300" />
              </button>
            </div>
          </div>
        </div>

      </div>
      <hr className="mt-6" />
    </div>
  );
}

export default AboutPageOne;
