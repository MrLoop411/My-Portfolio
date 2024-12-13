import PageNav from "../components/PageNav";

function ServicesPage() {
  return (
    <div className="flex flex-col gap-12 bg-[--color-grey-0] px-[5.5rem] py-[4.5rem]">
      <PageNav />

      <div className="mb-4 mt-12 flex flex-col items-center gap-2 text-center">
        <h2 className="text-[2.5rem] font-semibold text-[--color-grey-900]">
          Building Digital Products, Brands and Experience
        </h2>
        <h3 className="mb-8 text-[1.4rem] text-[--color-grey-900]">
          Take a look at the Services I provide{" "}
        </h3>
        <img src="/arrow10.png" className="h-20 w-20" />
      </div>

      <div className="items-center justify-between gap-12 space-y-10 md:flex md:space-y-0">
        <div className="flex flex-col items-center justify-center border border-gray-500 px-12 py-12 text-center">
          <img
            src="/uiux.png"
            className="h-[50px] w-[100px] md:h-[200px] md:w-[400px]"
          />
          <h2 className="text-[1.6rem] font-semibold text-[--color-grey-900]">
            UI/ UX Design
          </h2>
          <p className="text-[1.2rem] text-gray-800">
            Creating web/ mobile applications and websites prototypes that are
            way ahead of the present generation
          </p>
        </div>

        <div className="flex flex-col items-center justify-center border border-gray-500 px-12 py-12 text-center">
          <img
            src="/webs.png"
            className="h-[50px] w-[100px] md:h-[200px] md:w-[400px]"
          />
          <h2 className="text-[1.6rem] font-semibold text-[--color-grey-900]">
            Website Building
          </h2>
          <p className="text-[1.2rem] text-gray-800">
            Building simple and advanced level websites that will suit the
            current generation
          </p>
        </div>

        <div className="flex flex-col items-center justify-center border border-gray-500 px-12 py-12 text-center">
          <img
            src="/mobap.png"
            className="h-[50px] w-[100px] md:h-[200px] md:w-[400px]"
          />
          <h2 className="text-[1.6rem] font-semibold text-[--color-grey-900]">
            {" "}
            App Development
          </h2>
          <p className="text-[1.2rem] text-gray-800">
            Developing mobile and web applications with detailed functuonality
            and effectiveness
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
