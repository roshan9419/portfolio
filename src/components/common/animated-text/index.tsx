import "./style.css";

export default function AnimatedText({ text }: { text: string }) {
  return <h1 className="text-8xl max-md:text-7xl uppercase font-bebas animated-text">{text}</h1>;
}
