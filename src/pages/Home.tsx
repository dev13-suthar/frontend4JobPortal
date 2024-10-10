import { Button } from "@/components/ui/button";
import { InfiniteMovingCards } from "@/components/ui/ScrollingCard";
import { testimonials } from "@/constants";
import { useNavigate } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen"> {/* Updated layout for full screen */}
      <Navigationbar />
      
      {/* Main content will take all available space */}
      <div className="flex-grow p-5 pt-20 md:px-20 flex flex-col">
        <header className="flex flex-col items-center justify-center mt-6">
          <h1 className="text-2xl md:text-7xl font-bold dark:text-white text-center">
            Find the Job <br /> That suits your life
          </h1>
          <p className="max-w-4xl text-base text-justify md:text-xl mt-8 dark:text-neutral-200">
            Discover your next career opportunity with <span className="font-extrabold">JobSpot</span>.
            Whether you're searching for your dream job or looking to hire top talent, our platform connects job seekers with employers seamlessly. Create, find, and apply to jobs with ease, and take the next step in your career journey today.
          </p>
        </header>

        <div className="mt-44 flex justify-center items-center w-full gap-3">
          <InfiniteMovingCards items={testimonials} direction="left" speed="fast" />
        </div>
      </div>
      
      {/* Footer always stays at the bottom */}
      <div className="p-6 w-full bg-slate-900 flex  items-center justify-between">
      <footer className="bg-slate-900 text-white py-10">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-5">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">JobSpot</h2>
          <p className="text-sm">
            Connecting job seekers with employers across various industries. Find the job that suits your life.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-bold mb-4">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/jobs" className="hover:underline">Browse Jobs</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
            <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-blue-500">
              <i className="fab fa-facebook-f"></i> {/* Placeholder for a FontAwesome icon */}
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-600">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-500">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-bold mb-4">Contact Us</h3>
          <ul className="text-sm space-y-2">
            <li><i className="fas fa-map-marker-alt"></i> 123 Main St, Anytown, USA</li>
            <li><i className="fas fa-envelope"></i> support@jobspot.com</li>
            <li><i className="fas fa-phone-alt"></i> +1 234 567 890</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-700 mt-10 py-6 text-center">
        <p className="text-sm">&copy; 2024 JobSpot. All Rights Reserved.</p>
      </div>
    </footer>
      </div>
    </div>
  );
};

export default Home;

const Navigationbar = () => {
  const router = useNavigate();
  return (
    <div className="p-4 px-6 flex items-center justify-between bg-slate-900">
      <p className="text-3xl font-bold tracking-wider text-white">JobSpot</p>
      <Button className="rounded-xl" onClick={() => router("/signin")}>
        Join
      </Button>
    </div>
  );
};
