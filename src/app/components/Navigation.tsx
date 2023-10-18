import PrimaryButton from "./PrimaryButton";
import TextButton from "./TextButton";
import LabelButton from "./LabelButton";
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";

export default function Navigation() {
  return (
    <div className="">
      <LabelButton text="label" />
      <LabelButton text="label" type="secondary" />
      <LabelButton text="label" type="white" />
      <LabelButton text="label" iconOnly type="white" icon=<FaBeer /> />
      <PrimaryButton text="normal" />
      <PrimaryButton text="normal" icon=<FaBeer /> />
      <PrimaryButton text="normal" align="right" icon=<FaBeer /> />
      <PrimaryButton text="normal" subtle fullWidth />
      <PrimaryButton text="normal" subtle fullWidth icon=<FaBeer /> />
      <PrimaryButton
        text="normal"
        subtle
        fullWidth
        align="right"
        icon=<FaBeer />
      />
      <PrimaryButton text="normal" subtle fullWidth icon=<FaBeer /> />
      <PrimaryButton
        text="large"
        subtle
        size="large"
        fullWidth
        align="right"
        icon=<FaBeer />
      />
      <PrimaryButton text="large" size="large" icon=<FaBeer /> />
      <PrimaryButton text="large" subtle size="large" icon=<FaBeer /> />
      <PrimaryButton
        text="large1"
        subtle
        size="large"
        fullWidth
        align="right"
        icon=<FaBeer />
      />
      <PrimaryButton
        text="large"
        subtle
        size="large"
        fullWidth
        icon=<FaBeer />
      />
      <PrimaryButton subtle size="large" text="dd" fullWidth />
      <TextButton text="test" />
      <TextButton text="test" size="small" />
      <TextButton text="test" type="destructive" />
      <TextButton text="test" type="destructive" size="small" />
    </div>
  );
}
