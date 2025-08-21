import { IconType } from 'react-icons';

type Project = {
  type: 'professional' | 'personal';
  title: string;
  description: string;
  images: string[];
  sourceCodeLink?: string;
  projectLink?: string;
  icons?: IconType[];
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
