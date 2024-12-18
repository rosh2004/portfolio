import { IconType } from 'react-icons';

type Project = {
  title: string;
  description: string;
  image: string;
  sourceCodeLink: string;
  projectLink: string;
}

type TimelineStep = {
  from: string;
  to: string;
  company: {
    name: string;
    url: string;
    linkedin: string;
  };
  title: string;
  description: string;
  teams: TimeSubStep[];
}

type TimeSubStep = {
  title: string;
  description: string;
  icons: IconType[];
}



type TimelineSteps = TimelineStep[];
