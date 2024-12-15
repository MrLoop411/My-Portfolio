import PageNav from "../components/PageNav";

function ProjectsPage() {
  return (
    <div className="flex h-full flex-col gap-12 bg-[--color-grey-0] px-[5.5rem] py-[4.5rem]">
      <PageNav />

      <div className="mb-12 mt-12 flex flex-col items-center gap-4 text-center">
        <h1 className="text-[2.5rem] font-semibold text-[--color-grey-900]">
          Here are my best Projects so far
        </h1>
        <p className="text-[1.4rem] text-[--color-grey-900]">Take a look !</p>
        {/* <p className="text-[1.4rem] text-gray-900">
          I am a Software Engineer from Nigeria ready to help you with web
          design, Web and Mobile App development
        </p>
        <p className="text-[1.6rem] font-semibold text-[--color-grey-900]">
          You will find here my best projects so far, take a look!
        </p> */}
      </div>

      <div className="mt-8 items-center justify-between space-y-10 md:flex md:space-x-10 md:space-y-0">
        {/* <li className="flex flex-col gap-4 rounded-xl bg-gray-200 px-6 py-6 text-[1.2rem] text-gray-800">
          <img src="/wildweb1.png" className="h-[100%] w-[100%]" />
          <p> WorldWise Customer Web App</p>
        </li> */}
        <div className="flex flex-col gap-8">
          <img src="/oas01.png" className="h-[20rem] w-[35rem]" />
          <div className="flex items-center justify-between">
            <p className="px-4 py-1 text-[1.2rem] font-semibold tracking-wider text-[--color-grey-900]">
              The Wild Oasis-- Admin
            </p>
            <button className="rounded-full bg-accent-500 px-6 py-2 text-[1.2rem] font-semibold text-[--color-grey-0] hover:bg-accent-400">
              View details
            </button>
          </div>
        </div>

        {/* <li className="flex flex-col gap-4 rounded-xl bg-gray-200 px-6 py-6 text-[1.2rem] text-gray-800">
          <img src="/oas01.png" className="h-[100%] w-[100%]" />
          <p> WorldWise Admin Web App</p>
        </li> */}
        <div className="flex flex-col gap-8">
          <img src="/wildweb1.png" className="h-[20rem] w-[35rem]" />
          <div className="flex items-center justify-between">
            <p className="px-4 py-1 text-[1.2rem] font-semibold tracking-wider text-[--color-grey-900]">
              The Wild Oasis-- Client
            </p>
            <button className="rounded-full bg-accent-500 px-6 py-2 text-[1.2rem] font-semibold text-[--color-grey-0] hover:bg-accent-400">
              View details
            </button>
          </div>
        </div>

        {/* <li className="flex flex-col gap-4 rounded-xl bg-gray-200 px-6 py-6 text-[1.2rem] text-gray-800">
          <img src="/rating1.png" className="h-[100%] w-[100%]" />
          <p>iRating Web App</p>
        </li> */}
        <div className="flex flex-col gap-8">
          <img src="/rating1.png" className="h-[20rem] w-[35rem]" />
          <div className="flex items-center justify-between">
            <p className="px-4 py-1 text-[1.2rem] font-semibold tracking-wider text-[--color-grey-900]">
              iRating Web App
            </p>
            <button className="rounded-full bg-accent-500 px-6 py-2 text-[1.2rem] font-semibold text-[--color-grey-0] hover:bg-accent-400">
              View details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
