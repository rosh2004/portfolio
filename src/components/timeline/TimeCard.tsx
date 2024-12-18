import Link from "next/link"
import { FaLinkedin } from "react-icons/fa"
import { HiBuildingOffice } from "react-icons/hi2"
import { TimelineStep } from "../../../types"
import IconBar from "./IconBar"
import TimeSubStep from "./TimeSubStep"

type Props = {
  step: TimelineStep
}

function TimeStep({step}: Props) {
  return (
    <>
      <h4 className="text-lg font-bold flex gap-2 items-center pb-2">
        <Link
          href={step.company.url}
          className="flex items-center text-secondary hover:text-accent"
        >
          <HiBuildingOffice className="w-8 h-8 pb-1" />
          {step.company.name}
        </Link>
        <div className="w-1 h-6 bg-primary" />
        <Link href={step.company.linkedin} className="flex items-center gap-2 text-secondary hover:text-accent">
          <FaLinkedin className="w-8 h-8 mb-1 " color='#0077B5' />
        </Link>
      </h4>
      <h4 className="text-lg font-bold text-primary">{step.title}</h4>
      <p className="text-sm text-black/70 dark:text-white/70">{step.description}</p>
      {
        step.teams.map((team, teamIndex) => (
          <TimeSubStep key={teamIndex} team={team}></TimeSubStep>
        ))
      }
    </>
  )
}

export default TimeStep