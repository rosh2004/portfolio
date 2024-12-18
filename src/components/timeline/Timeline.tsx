import { FaAngular, FaLinkedin } from "react-icons/fa";
import TimelineStepBullet from "./TimelineStepBullet";
import TimePost from "./TimePost";
import Link from "next/link";
import { HiBuildingOffice } from "react-icons/hi2";
import { TimelineSteps } from "../../../types";
import React from "react";
import TimeCard from "./TimeCard";

type Props = {
  professionalTimeline: TimelineSteps;
};

function Timeline({ professionalTimeline }: Props) {
  return (
    <div className="relative">
      <div className="flex flex-col gap-8">
        {professionalTimeline.map((step, stepIndex) => (
          <div key={stepIndex} className="flex justify-center gap-4">
            <TimelineStepBullet />
            <div className="w-full">
              <TimePost from={step.from} to={step.to}>
                <TimeCard step={step}></TimeCard>
              </TimePost>
            </div>
          </div>
        ))}
      </div>
      <TimelineDash />
    </div>      
  );
}

export default Timeline;

function TimelineDash(){
  return (
    <div className="absolute inset-0 w-6 flex justify-center">
      <div className="border-primary border-[3px] border-dashed mt-7"></div>
    </div>
  )
}