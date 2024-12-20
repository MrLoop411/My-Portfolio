import PageNav from "../components/PageNav";
import ImageSlider from "../components/ImageSlider";

function ProjectsPage() {
  const wildCollection1 = [
    {
      label: "first",
      url: "/oasis902.png",
    },
    {
      label: "second",
      url: "/oasis903.png",
    },
    {
      label: "third",
      url: "/oasis904.png",
    },
  ];
  const wildCollection2 = [
    {
      label: "first",
      url: "/wildweb1.png",
    },
    {
      label: "second",
      url: "/oasis900.png",
    },
    {
      label: "third",
      url: "/oasis901.png",
    },
  ];

  const wildCollection3 = [
    {
      label: "first",
      url: "/rating1.png",
    },
    {
      label: "second",
      url: "/rating900.png",
    },
  ];

  return (
    <div className="flex h-full flex-col gap-12 bg-[--color-grey-0] px-[5.5rem] py-[4.5rem]">
      <PageNav />

      <div className="mb-8 mt-12 flex flex-col items-center gap-4 text-center">
        <h1 className="text-[2rem] font-semibold text-[--color-grey-900]">
          Here are my best Projects so far
        </h1>
        <p className="text-[1.4rem] text-[--color-grey-900]">Take a look !</p>
      </div>

      <div className="mt-8 items-center justify-between space-y-32 md:flex md:space-x-10 md:space-y-0">
        <div className="h-[200px] w-[300px] space-y-8">
          <ImageSlider slides={wildCollection1} parentWidth={300} />
          <div className="flex items-center justify-between">
            <p className="px-4 py-1 text-[1.2rem] font-semibold tracking-wider text-[--color-grey-900]">
              The Wild Oasis-- Admin
            </p>
          </div>
        </div>
        <div className="h-[200px] w-[300px] space-y-8">
          <ImageSlider slides={wildCollection2} parentWidth={300} />
          <div className="flex items-center justify-between">
            <p className="px-4 py-1 text-[1.2rem] font-semibold tracking-wider text-[--color-grey-900]">
              The Wild Oasis-- Client
            </p>
            <a
              href="https://the-wild-oasis-website-demo-coral.vercel.app"
              target="_blank"
              className="rounded-full bg-accent-500 px-12 py-2 text-[1.2rem] font-semibold text-[--color-grey-0] hover:bg-accent-400"
            >
              Visit
            </a>
          </div>
        </div>
        <div className="h-[200px] w-[300px] space-y-8">
          <ImageSlider slides={wildCollection3} parentWidth={300} />
          <div className="flex items-center justify-between">
            <p className="px-4 py-1 text-[1.2rem] font-semibold tracking-wider text-[--color-grey-900]">
              iRating
            </p>
            <a
              href="https://i-rating-app.vercel.app"
              target="_blank"
              className="rounded-full bg-accent-500 px-12 py-2 text-[1.2rem] font-semibold text-[--color-grey-0] hover:bg-accent-400"
            >
              Visit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
