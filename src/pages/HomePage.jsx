// import Main from '../components/Main';
import PageNav from "../components/PageNav";
import { Link } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";

function HomePage() {
  return (
    <div className="flex h-full flex-col gap-12 bg-[--color-grey-0] px-[5.5rem] py-[4.5rem]">
      <PageNav />

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-12">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col text-[4rem] text-[--color-grey-900] sm:text-[5.5rem]">
              <h1 className="font-medium tracking-wide">Hi! I am</h1>
              <h1 className="font-semibold tracking-widest">Tobias</h1>
            </div>
            <div className="mb-10 flex flex-col text-[1.4rem] text-gray-900">
              <p>Software Engineer specialized in frontend development</p>
              <p>of mobile and web apps with over 3 years working experience</p>
            </div>

            <div className="mb-8 flex items-center gap-8 text-[1.6rem] font-semibold">
              <Link
                to="/contactme"
                className="bg-primary-900 px-10 py-[1.1rem] text-gray-100 transition-all duration-300 hover:bg-primary-800"
              >
                Hire Me
              </Link>
            </div>
            <div className="mt-4 items-center justify-between gap-12 space-y-5 rounded-xl bg-[--color-grey-900] px-8 py-6 text-gray-50 shadow-lg sm:flex">
              <div className="flex flex-col items-center bg-accent-400 px-4 py-4">
                <h2 className="text-[2rem] font-semibold">3+</h2>
                <p className="text-[1.1rem] font-semibold">Years Experience</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <IoLogoJavascript className="h-[2rem] w-[2rem] text-[--color-grey-0]" />
                <h2 className="text-[1.1rem] text-gray-800">Javascript</h2>
              </div>

              <div className="flex flex-col items-center gap-2">
                <FaReact className="h-[2rem] w-[2rem] text-[--color-grey-0]" />
                <h2 className="text-[1.1rem] text-gray-800">React js </h2>
              </div>
              <div className="flex flex-col items-center gap-2">
                <RiNextjsLine className="h-[2rem] w-[2rem] text-[--color-grey-0]" />
                <h2 className="text-[1.1rem] text-gray-800">Next js</h2>
              </div>
              <div className="flex flex-col items-center gap-2">
                <TbBrandReactNative className="h-[2rem] w-[2rem] text-[--color-grey-0]" />
                <h2 className="text-[1.1rem] text-gray-800">React Native</h2>
              </div>
              <div className="flex flex-col items-center gap-2">
                <RiTailwindCssFill className="h-[2rem] w-[2rem] text-[--color-grey-0]" />
                <h2 className="text-[1.1rem] text-gray-800">Tailwind</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2 flex-1 opacity-0 lg:opacity-100">
          <img src="/portjpg.png" className="mx-auto h-[330px] w-[300px]" />
        </div>
      </div>
      <div className="mt-20 flex w-full flex-col">
        <h2 className="mb-10 text-[2rem] font-semibold text-[--color-grey-900]">
          Latest Projects
        </h2>
        <div className="flex justify-between gap-12 max-md:flex-col">
          <div className="flex flex-col items-center gap-4 rounded-xl bg-primary-800 px-4 py-4">
            <img src="/wild1.jpg" className="h-[20rem] w-[35rem]" />
            <p className="rounded-full bg-gray-500 px-4 py-1 text-center text-[1.2rem] font-semibold tracking-wider">
              The Wild Oasis-- Admin
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 rounded-xl bg-accent-600 px-4 py-4">
            <img src="/wildweb1.png" className="h-[20rem] w-[40rem]" />
            <p className="rounded-full bg-gray-500 px-4 py-1 text-center text-[1.2rem] font-semibold tracking-wider">
              The Wild Oasis-- Client
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 rounded-xl bg-gray-800 px-4 py-4">
            <img src="/rating1.png" className="h-[20rem] w-[40rem]" />
            <p className="rounded-full bg-gray-500 px-4 py-1 text-center text-[1.2rem] font-semibold tracking-wider">
              iRating Web App
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
