import { ContactDetailsConstants } from "../../../../../utils/constants";
import GlowingButton from "../../../../common/glowing-button";
import SectionWrapper from "../section-wrapper";

export default function ContactSection() {
  return (
    <SectionWrapper
      sectionName="Contact"
      className="bg-slate-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-90"
    >
      <div class="flex justify-center">
        <div class="px-20 max-lg:px-0 mt-24 w-full max-w-[700px]">
          <form
            method="post"
            action={`mailto:${ContactDetailsConstants.EMAIL}?subject=Contact Request from Portfolio Website`}
            class="flex flex-col gap-3"
          >
            <input
              type="text"
              name=""
              placeholder="What is your name?"
              required
              class="py-3 px-4 rounded-md border bg-blue-900/20"
            />

            <textarea
              name="message"
              placeholder="Please add some message here..."
              required
              class="h-[200px] py-3 px-4 rounded-md border bg-blue-900/20"
            ></textarea>
            <GlowingButton text="Send" />
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
}
