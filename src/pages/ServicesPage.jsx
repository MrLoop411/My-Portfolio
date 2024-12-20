// import { useState } from "react";
import PageNav from "../components/PageNav";
import { SiAffinitydesigner } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { LuAppWindow } from "react-icons/lu";
import { MdAppSettingsAlt } from "react-icons/md";
// import { MdOutlineExpandMore } from "react-icons/md";
// import { MdOutlineKeyboardArrowUp } from "react-icons/md";

function ServicesPage() {
  // const [extraText1, setExtraText1] = useState(false);
  // const [extraText2, setExtraText2] = useState(false);
  // const [extraText3, setExtraText3] = useState(false);

  return (
    <div className="flex h-full w-full flex-col gap-12 bg-[--color-grey-0] px-[5.5rem] py-[4.5rem]">
      <PageNav />
      <div className="w-full">
        <div className="mx-auto mb-4 mt-6 flex w-full flex-col items-center gap-2 text-wrap rounded-xl bg-primary-700 px-12 py-12 sm:w-[60%]">
          <h2 className="text-[2rem] font-semibold text-[--color-grey-0]">
            My mission is to help create new ideas from an infant stage and
            bring it to maturity by giving it life and a purpose through the
            implementation of modern knowledge.
          </h2>
        </div>
      </div>

      <div className="justify-between gap-12 space-y-5 md:grid md:grid-cols-[20rem_1fr_1fr]">
        <div>
          <h2 className="text-[2rem] font-semibold text-[--color-grey-900]">
            How can I help You ?
          </h2>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-12 rounded-2xl bg-[--color-grey-200]">
            <div className="flex justify-between gap-12 px-8 py-4">
              <div className="self-start text-wrap rounded-full bg-[--color-grey-0] px-4 py-4">
                <SiAffinitydesigner className="h-8 w-8 text-primary-700" />
              </div>
              <p className="text-[1.2rem] text-[--color-grey-900]">
                Designing the look and feel of the interface optimized for
                different devices,Conducting tests to observe how users interact
                with a prototype or product to identify issues and areas for
                enhancement.
              </p>
            </div>
            <div className="flex justify-between gap-12 px-8 py-4">
              <h2 className="text-[1.4rem] font-semibold text-[--color-grey-900]">
                UI/UX Design
              </h2>
              <h2 className="text-[1.4rem] font-semibold text-[--color-grey-500]">
                01
              </h2>
            </div>
          </div>
          <div className="flex flex-col gap-12 rounded-2xl bg-[--color-grey-200]">
            <div className="flex justify-between gap-12 px-8 py-4">
              <div className="self-start text-wrap rounded-full bg-[--color-grey-0] px-4 py-4">
                <LuAppWindow className="h-8 w-8 text-primary-700" />
              </div>
              <p className="text-[1.2rem] text-[--color-grey-900]">
                Assessing the technical feasibility and market viability of the
                web app idea, Structuring and styling the web application using
                the react framework and styling frameworks like Tainwind CSS,
                and also testing for load time, scalability, and speed,
                especially for apps that expect high traffic volumes.
              </p>
            </div>
            <div className="flex justify-between gap-12 px-8 py-4">
              <h2 className="text-[1.4rem] font-semibold text-[--color-grey-900]">
                Web App Development
              </h2>
              <h2 className="text-[1.4rem] font-semibold text-[--color-grey-500]">
                03
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-12 rounded-2xl bg-[--color-grey-200]">
            <div className="flex justify-between gap-12 px-8 py-4">
              <div className="self-start text-wrap rounded-full bg-[--color-grey-0] px-4 py-4">
                <CgWebsite className="h-8 w-8 text-primary-700" />
              </div>
              <p className="text-[1.2rem] text-[--color-grey-900]">
                Understanding your business goals, target audience, and industry
                to create a website that aligns with your objectives, Building
                the visible part of the website, focusing on HTML, CSS,
                JavaScript, and responsive interfaces.
              </p>
            </div>
            <div className="flex justify-between gap-12 px-8 py-4">
              <h2 className="text-[1.4rem] font-semibold text-[--color-grey-900]">
                Website Building
              </h2>
              <h2 className="text-[1.4rem] font-semibold text-[--color-grey-500]">
                02
              </h2>
            </div>
          </div>
          <div className="flex flex-col gap-12 rounded-2xl bg-[--color-grey-200]">
            <div className="flex justify-between gap-12 px-8 py-4">
              <div className="self-start text-wrap rounded-full bg-[--color-grey-0] px-4 py-4">
                <MdAppSettingsAlt className="h-8 w-8 text-primary-700" />
              </div>
              <p className="text-[1.2rem] text-[--color-grey-900]">
                Deciding what devices to build the app for, Offering guidance on
                potential monetization models such as in-app purchases, ads,
                subscriptions, or one-time purchases, and Developing apps that
                run on both iOS and Android using the react native framework.
              </p>
            </div>
            <div className="flex justify-between gap-12 px-8 py-4">
              <h2 className="text-[1.4rem] font-semibold text-[--color-grey-900]">
                Mobile App Development
              </h2>
              <h2 className="text-[1.4rem] font-semibold text-[--color-grey-500]">
                04
              </h2>
            </div>
          </div>
        </div>
        {/* <div className="flex h-[300px] flex-1 flex-col items-center justify-center text-wrap px-12 py-12">
          <img
            src="/uiux.png"
            className="h-[50px] w-[100px] opacity-0 sm:opacity-100 md:h-[100px] md:w-[200px]"
          />
          <h2 className="text-[1.6rem] font-semibold text-[--color-grey-900]">
            UI/ UX Design
          </h2>
          <p className="text-[1.2rem] text-gray-800">
            {extraText1
              ? `Creating web / mobile applications and websites prototypes that are
            way ahead of the present generation Creating web / mobile applications and websites prototypes that are
            way ahead of the present generationCreating web / mobile applications and websites prototypes that are
            way ahead of the present generationCreating web / mobile applications and websites prototypes that are
            way ahead of the present generation `
              : ` Creating web / mobile applications and websites prototypes that are
            way ahead of the present generation...`}
          </p>
          <button onClick={() => setExtraText1((extend) => !extend)}>
            {!extraText1 ? (
              <MdOutlineExpandMore className="h-10 w-10 text-gray-800" />
            ) : (
              <MdOutlineKeyboardArrowUp className="h-10 w-10 text-gray-800" />
            )}
          </button>
        </div>

        <div className="flex h-[300px] flex-1 flex-col items-center justify-center text-wrap px-12 py-12">
          <img
            src="/webs.png"
            className="h-[50px] w-[100px] opacity-0 sm:opacity-100 md:h-[100px] md:w-[200px]"
          />
          <h2 className="text-[1.6rem] font-semibold text-[--color-grey-900]">
            Web Application Building
          </h2>
          <p className="text-[1.2rem] text-gray-800">
            {extraText2
              ? `Creating web / mobile applications and websites prototypes that are
            way ahead of the present generation Creating web / mobile applications and websites prototypes that are
            way ahead of the present generationCreating web / mobile applications and websites prototypes that are
            way ahead of the present generationCreating web / mobile applications and websites prototypes that are
            way ahead of the present generation`
              : ` Creating web / mobile applications and websites prototypes that are
            way ahead of the present generation...`}
          </p>
          <button onClick={() => setExtraText2((extend) => !extend)}>
            {!extraText2 ? (
              <MdOutlineExpandMore className="h-10 w-10 text-gray-800" />
            ) : (
              <MdOutlineKeyboardArrowUp className="h-10 w-10 text-gray-800" />
            )}
          </button>
        </div>

        <div className="flex h-[300px] flex-1 flex-col items-center justify-center text-wrap px-12 py-12">
          <img
            src="/mobap.png"
            className="h-[50px] w-[100px] opacity-0 sm:opacity-100 md:h-[100px] md:w-[200px]"
          />
          <h2 className="text-[1.6rem] font-semibold text-[--color-grey-900]">
            {" "}
            Mobile App Development
          </h2>

          <p className="text-[1.2rem] text-gray-800">
            {extraText3
              ? `Creating web / mobile applications and websites prototypes that are
            way ahead of the present generation Creating web / mobile applications and websites prototypes that are
            way ahead of the present generationCreating web / mobile applications and websites prototypes that are
            way ahead of the present generationCreating web / mobile applications and websites prototypes that are
            way ahead of the present generation`
              : ` Creating web / mobile applications and websites prototypes that are
            way ahead of the present generation...`}
          </p>
          <button onClick={() => setExtraText3((extend) => !extend)}>
            {!extraText3 ? (
              <MdOutlineExpandMore className="h-10 w-10 text-gray-800" />
            ) : (
              <MdOutlineKeyboardArrowUp className="h-10 w-10 text-gray-800" />
            )}
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default ServicesPage;
