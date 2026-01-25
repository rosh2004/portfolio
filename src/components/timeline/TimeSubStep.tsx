import type { TimeSubStep } from "../../../types";
import IconBar from "./IconBar";

type Props = {
  team: TimeSubStep;
}

function TimeSubStep({team}: Props) {
    return (
      <>
        <h5 className="font-bold">
          {team.title}
        </h5>
        <p className="text-black/70 dark:text-white/70 text-sm">{team.description}</p>
        <div className="p-2">
          <IconBar icons={team.icons} />
        </div>
      </>
    )

}

export default TimeSubStep