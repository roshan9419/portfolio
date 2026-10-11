import { onCleanup, onMount } from "solid-js";
import TerrainBackground from "./components/common/terrain-background";
import BackToTop from "./components/common/back-to-top";
import HomePage from "./components/pages/home";
import { installInteractionSounds } from "./utils/sound";
import { syncCursorWithTheme } from "./utils/cursor";

function App() {
  syncCursorWithTheme();
  onMount(() => onCleanup(installInteractionSounds()));

  return (
    <>
      <TerrainBackground />
      <HomePage />
      <BackToTop revealOn="Contact" />
    </>
  );
}

export default App;
