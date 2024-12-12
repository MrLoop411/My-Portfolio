import PageNav from "../components/PageNav";

function AboutPage() {
  return (
    <div className="flex h-full w-full flex-col gap-12 bg-[--color-grey-0] px-[5.5rem] py-[4.5rem]">
      <PageNav />

      <div className="w-full items-center justify-between md:flex">
        <div className="w-[40%] rounded-xl bg-[--color-grey-500] px-12 py-12 opacity-0 md:opacity-100">
          <img src="/portjpg.png" className="mx-auto h-[230px] w-[200px]" />
        </div>
        <div className="flex w-[40%] flex-col gap-4">
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
      <div className="w-full items-center justify-between md:flex">
        <div className="flex w-[40%] flex-col gap-4">
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
        <div className="grid w-[40%] grid-cols-3 gap-8 text-[1.4rem] font-semibold text-[--color-grey-900]">
          <div className="rounded-lg border border-[--color-grey-300] px-4 py-2 text-center">
            UI DESIGN
          </div>
          <div className="rounded-lg border border-[--color-grey-300] px-4 py-2 text-center">
            UX DESIGN
          </div>
          <div className="rounded-lg border border-[--color-grey-300] px-4 py-2 text-center">
            PROTOTYPING
          </div>
          <div className="rounded-lg border border-[--color-grey-300] px-4 py-2 text-center">
            HTML/CSS
          </div>
          <div className="rounded-lg border border-[--color-grey-300] px-4 py-2 text-center">
            JAVASCRIPT
          </div>
          <div className="rounded-lg border border-[--color-grey-300] px-4 py-2 text-center">
            REACT JS
          </div>
          <div className="rounded-lg border border-[--color-grey-300] px-4 py-2 text-center">
            NEXT JS
          </div>
          <div className="rounded-lg border border-[--color-grey-300] px-4 py-2 text-center">
            REACT NATIVE
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
