import Image from "next/image";
import Button from "./Button";
import LabelButton from "./LabelButton";
export default function Introduce() {
  return (
    <nav className="">
      introduce
      <LabelButton text="hi" />
      <LabelButton text="hi" type="secondary" />
      <LabelButton text="hi" type="white" />
      <LabelButton text="hi" iconOnly icon="😀" type="white" />
    </nav>
  );
}
