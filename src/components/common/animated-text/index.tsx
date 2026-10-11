import "./style.css";

export default function AnimatedText(props: { text: string }) {
  return <h1 class="text-8xl max-md:text-7xl uppercase font-bebas animated-text">{props.text}</h1>;
}
