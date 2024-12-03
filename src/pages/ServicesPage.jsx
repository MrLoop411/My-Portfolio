import PageNav from "../components/PageNav";

function ServicesPage() {
  return (
    <div className="flex flex-col gap-12">
      <PageNav />

      <div className="mb-12 mt-12 flex flex-col items-center gap-2 text-center">
        <h2 className="text-[2.5rem] font-semibold">
          Building Digital Products, Brands and Experience
        </h2>
        <h3 className="mb-8 text-[1.4rem] font-semibold">
          Take a look at the Services I provide{" "}
        </h3>
        <img src="/arrow10.png" className="h-20 w-20" />
      </div>

      <ul className="animate-fadein gap-12 md:flex">
        <li className="flex flex-1 flex-col items-center justify-center border border-gray-500 px-12 py-12 text-center">
          <img src="/uiux.png" className="h-50 w-50" />
          <h2 className="text-[2rem] font-semibold">UI/ UX Design</h2>
          <p className="text-[1.2rem] text-gray-800">
            Creating web/ mobile applications and websites prototypes that are
            way ahead of the present generation
          </p>
        </li>

        <li className="flex flex-1 flex-col items-center justify-center border border-gray-500 px-12 py-12 text-center">
          <img src="/webs.png" className="h-50 w-50" />
          <h2 className="text-[2rem] font-semibold">Website Building</h2>
          <p className="text-[1.2rem] text-gray-800">
            Building simple and advanced level websites that will suit the
            current generation
          </p>
        </li>

        <li className="flex flex-1 flex-col items-center justify-center border border-gray-500 px-12 py-12 text-center">
          <img src="/webap.png" className="h-50 w-50" />
          <h2 className="text-[2rem] font-semibold">Web App Development</h2>
          <p className="text-[1.2rem] text-gray-800">
            Developing web applications with detailed functuonality and
            effectiveness
          </p>
        </li>

        <li className="flex flex-1 flex-col items-center justify-center border border-gray-500 px-12 py-12 text-center">
          <img src="/mobap.png" className="h-50 w-50" />
          <h2 className="text-[2rem] font-semibold">Mobile App Development</h2>
          <p className="text-[1.2rem] text-gray-800">
            Developing mobile applications with detailed functuonality and
            effectiveness
          </p>
        </li>
      </ul>
    </div>
  );
}

export default ServicesPage;
