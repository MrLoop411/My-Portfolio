import PageNav from "../components/PageNav";

function AboutPage() {
  return (
    <div className="flex h-full w-full flex-col gap-12 bg-[--color-grey-0] px-[5.5rem] py-[4.5rem]">
      <PageNav />

      <div className="w-full items-center justify-between gap-32 space-y-8 md:flex">
        <div className="md:w-[50%]">
          <div className="flex w-[20%] items-center justify-center rounded-full bg-[--color-grey-300] px-5 py-5 md:w-[70%] md:rounded-xl md:px-12 md:py-12">
            <img
              src="/portjpg.png"
              className="h-[33px] w-[35px] md:mx-auto md:h-[230px] md:w-[200px]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 text-wrap md:w-[50%]">
          <h1 className="text-[4rem] font-semibold text-[--color-grey-900]">
            Hi there!
          </h1>
          <p className="text-[1.4rem] text-[--color-grey-900]">
            Fuelled by passion for creating compelling products, I am on a
            continuous journey to improve my work and share ideas. Learn more
            about my journey below.
          </p>
        </div>
      </div>
      <div className="w-full items-center justify-between gap-36 space-y-8 md:flex">
        <div className="flex flex-col gap-2 text-wrap md:w-[50%]">
          <h2 className="text-[2.5rem] font-semibold text-[--color-grey-900]">
            My Career So Far
          </h2>
          <p className="text-[1.4rem] text-[--color-grey-900]">
            Always up for a challenge, I am currently the co-founder of THE WAV
            WORKSHOP, a Media and Tech start-up focused on building a community
            of brilliant minds working together to solve complex problems in the
            Media and Tech industry.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 text-[1.2rem] font-semibold text-[--color-grey-900] md:w-[50%] md:grid-cols-[30%_30%_30%]">
          <div className="rounded-lg border border-[--color-grey-300] px-4 py-2 text-center">
            UI DESIGN
          </div>
          <div className="rounded-lg border border-[--color-grey-300] bg-[--color-grey-300] px-4 py-2 text-center">
            UX DESIGN
          </div>
          <div className="rounded-lg border border-[--color-grey-300] bg-[--color-grey-300] px-4 py-2 text-center md:bg-transparent">
            PROTOTYPING
          </div>
          <div className="rounded-lg border border-[--color-grey-300] px-4 py-2 text-center md:bg-[--color-grey-300]">
            HTML/CSS
          </div>
          <div className="rounded-lg border border-[--color-grey-300] px-4 py-2 text-center">
            JAVASCRIPT
          </div>
          <div className="rounded-lg border border-[--color-grey-300] bg-[--color-grey-300] px-4 py-2 text-center">
            REACT JS
          </div>
          <div className="rounded-lg border border-[--color-grey-300] bg-[--color-grey-300] px-4 py-2 text-center md:bg-transparent">
            NEXT JS
          </div>
          <div className="rounded-lg border border-[--color-grey-300] px-4 py-2 text-center md:bg-[--color-grey-300]">
            REACT NATIVE
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
