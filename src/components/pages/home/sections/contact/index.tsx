import GlowingButton from "../../../../common/glowing-button";
import SectionWrapper from "../section-wrapper";

export default function ContactSection() {
  return (
    <SectionWrapper
      sectionName="Contact"
      className="bg-slate-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-90"
    >
      <div className="flex justify-center">
        <div className="px-20 max-lg:px-0 mt-24 w-full max-w-[700px]">
          <form
            method="POST"
            action="mailto:roshank9419@gmail.com?subject=Contact request from Portfolio Website"
            className="flex flex-col gap-3"
          >
            <input
              type="text"
              name=""
              placeholder="What is your name?"
              required
              className="py-3 px-4 rounded-md border bg-blue-900/20"
            />

            <textarea
              name="message"
              placeholder="Please add some message here..."
              required
              className="h-[200px] py-3 px-4 rounded-md border bg-blue-900/20"
            ></textarea>
            <GlowingButton text="Send" />
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
}
