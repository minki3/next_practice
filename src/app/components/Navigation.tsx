import PrimaryButton from './NormalButton'
import TextButton from './TextButton'
import LabelButton from './SmallButton'
import { FaBeer } from '@react-icons/all-files/fa/FaBeer'
import ButtonComponent from './ButtonComponent'

export default function Navigation() {
  return (
    <div className="">
      fdfds
      <ButtonComponent size="small" text="312313" icon=<FaBeer /> />
      <ButtonComponent size="small" type="primary" text="312313" icon=<FaBeer /> />
      <ButtonComponent size="normal" type="secondary" text="123312" icon=<FaBeer /> />
      <ButtonComponent size="normal" type="primary" text="small" secondIcon=<FaBeer /> icon=<FaBeer /> />
      <ButtonComponent size="normal" text="normal" />
      <ButtonComponent size="large" text="large" />
      <ButtonComponent size="normal" text="fdfs" align="right" icon=<FaBeer /> />
      <ButtonComponent size="large" type="secondary" text="fdfs" fullWidth secondIcon=<FaBeer /> icon=<FaBeer /> />
      <ButtonComponent size="normal" text="fdfs" fullWidth icon=<FaBeer /> />
      <ButtonComponent size="normal" text="normal" secondIcon=<FaBeer /> icon=<FaBeer /> />
      <ButtonComponent size="large" text="large" secondIcon=<FaBeer /> icon=<FaBeer /> />
    </div>
  )
}
