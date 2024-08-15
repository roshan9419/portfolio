function VerticalText() {
  return (
    <div className="flex flex-col font-bebas text-5xl">
      <span>A</span>
      <span>B</span>
      <span>O</span>
      <span>U</span>
      <span>T</span>
    </div>
  );
}

function AboutSection() {
  return (
    <>
      <div className="w-full flex  p-9 h-screen">
        <VerticalText />
      </div>
    </>
  );
}

export default AboutSection;
