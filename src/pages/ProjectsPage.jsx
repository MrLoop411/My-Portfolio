import PageNav from "../components/PageNav";

function ProjectsPage() {
  return (
    <div className="flex h-full flex-col gap-12">
      <PageNav />

      <div className="mb-12 mt-12 flex flex-col items-center gap-4 text-center">
        <h1 className="text-[3rem] font-semibold">Hello, I am Tobias!</h1>
        <p className="text-[1.4rem] text-gray-800">
          I am a Software Engineer from Nigeria ready to help you with web
          design, Web and Mobile App development
        </p>
        <p className="text-[1.6rem] font-semibold">
          You will find here my best projects so far, take a look!
        </p>
      </div>

      <ul className="mt-8 grid-cols-[1fr_1fr_1fr] gap-12 text-center sm:grid">
        <li className="flex flex-col gap-4 rounded-xl bg-gray-200 px-6 py-6 text-[1.2rem] text-gray-800">
          <img src="/wildweb1.png" className="h-[100%] w-[100%]" />
          <p> WorldWise Customer Web App</p>
        </li>

        <li className="flex flex-col gap-4 rounded-xl bg-gray-200 px-6 py-6 text-[1.2rem] text-gray-800">
          <img src="/wild2.jpg" className="h-[100%] w-[100%]" />
          <p> WorldWise Admin Web App</p>
        </li>

        <li className="flex flex-col gap-4 rounded-xl bg-gray-200 px-6 py-6 text-[1.2rem] text-gray-800">
          <img src="/rating1.png" className="h-[100%] w-[100%]" />
          <p>iRating Web App</p>
        </li>
      </ul>
    </div>
  );
}

export default ProjectsPage;
