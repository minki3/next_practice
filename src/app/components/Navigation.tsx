import PrimaryButton from "./PrimaryButton";
import TextButton from "./TextButton";
import LabelButton from "./LabelButton";
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import ButtonComponent from "./ButtonComponent";

export default function Navigation() {
  return (
    <div className="">
      <ButtonComponent buttonType="label" disabled icon=<FaBeer /> />
      <ButtonComponent
        buttonType="label"
        type="white"
        disabled
        icon=<FaBeer />
      />
      <ButtonComponent buttonType="label" type="secondary" icon=<FaBeer /> />
      <ButtonComponent
        buttonType="primary"
        type="secondary"
        size="large"
        text="ddd"
        icon=<FaBeer />
      />
      <ButtonComponent
        buttonType="primary"
        size="large"
        text="dddddd"
        secondIcon=<FaBeer />
        icon=<FaBeer />
      />
      <ButtonComponent
        buttonType="primary"
        size="large"
        text="dddddd"
        fullWidth
        icon=<FaBeer />
      />
      <ButtonComponent
        buttonType="primary"
        size="large"
        text="dddddd1111"
        fullWidth
        secondIcon=<FaBeer />
      />
      <ButtonComponent
        buttonType="primary"
        size="large"
        fullWidth
        icon=<FaBeer />
        secondIcon=<FaBeer />
      />
      <ButtonComponent buttonType="text" text="ddd" />
      <ButtonComponent
        buttonType="text"
        text="ddd"
        size="small"
        type="secondary"
      />
    </div>
  );
}
