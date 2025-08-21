import Timeline from "@/components/timeline/Timeline"
import SectionHeading from "@/components/ui/SectionHeading"
import { TimelineSteps } from "../../../types"
import { WORK_EXPERIENCE_LIST } from "../lib/work-experience"


function WorkExperienceSection() {
  const workExperienceList: TimelineSteps = WORK_EXPERIENCE_LIST;
  return (
    <div>
      <SectionHeading>Professional Experience</SectionHeading>
      <div className="flex justify-center">
        <div className="md:w-4/5 w-full">
          <Timeline professionalTimeline={workExperienceList}></Timeline>
        </div>
      </div>
    </div>
  )
}

export default WorkExperienceSection