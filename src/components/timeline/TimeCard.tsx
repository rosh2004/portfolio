import Link from "next/link"
import { FaLinkedin } from "react-icons/fa"
import { HiBuildingOffice } from "react-icons/hi2"
import { TimelineStep } from "../../../types"
import TimeSubStep from "./TimeSubStep"

type Props = {
  step: TimelineStep
}

function TimeStep({step}: Props) {
  return (
    <>
      <h4 className="text-lg font-bold flex gap-2 items-center pb-2">
        <div
          className="flex items-center text-secondary"
        >
          <HiBuildingOffice className="w-8 h-8 pb-1" />
          {step.company.name}
        </div>
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