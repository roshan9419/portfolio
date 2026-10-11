import GamepadIcon from "lucide-solid/icons/gamepad-2";
import { ContactDetailsConstants } from "../../../../../utils/constants";
import GlowingButton from "../../../../common/glowing-button";
import SectionWrapper from "../section-wrapper";

export default function ContactSection() {
  return (
    <SectionWrapper
      sectionName="Contact"
      level={6}
      levelName="Multiplayer"
      tagline="Player 2, ready? Drop a message and let's start a co-op mission."
      class="bg-surface/90 backdrop-blur-sm pb-32"
    >
      <div class="flex justify-center">
        <div class="hud-frame mt-16 w-full max-w-[700px] rounded-xl border bg-card/40 p-6 backdrop-blur-sm md:p-8">
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
              class="py-3 px-4 rounded-md border bg-card/50 focus:outline-none focus:ring-2 focus:ring-accent"
            />

            <textarea
              name="message"
              placeholder="Please add some message here..."
              required
              class="h-[200px] py-3 px-4 rounded-md border bg-card/50 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <GlowingButton>
              <GamepadIcon size={18} aria-hidden="true" />
              Press Start
            </GlowingButton>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
}
