"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import Image from "next/image";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.5);
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <div className="flex gap-4 items-center mb-5 flex-wrap">

              <a href={item.link} target="_blank">

               <Image
                  src={item.img}
                  alt=""
                  quality={95}
                  width={150}
                  height={150}
                  className="bg-white p-2 "
                />
              </a>
                <div>
                <h3 className="font-semibold capitalize"><a href={item.link} target="_blank">{item.name}</a></h3>
                <p className="font-normal !m-0 !text-sm text-gray-700 dark:text-white/50">{item.location}</p>
                </div>
              </div>
              <h3 className="font-semibold capitalize">{item.title}</h3>
              
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/50 !text-sm">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
