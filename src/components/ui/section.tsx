import { PropsWithChildren, ReactNode } from "react";
import { To } from "react-router-dom";

import TransitionLink from "@/components/features/transition-link";
import { ChevronRight } from "@/components/ui/vectors";

export interface SectionProps {
  title: ReactNode;
  viewMoreTo?: To;
}

export default function Section(props: PropsWithChildren<SectionProps>) {
  return (
    <div className="bg-background pt-1">
      <div className="flex items-center justify-between px-2">
        <div className="text-sm font-medium p-2 truncate">{props.title}</div>
        {props.viewMoreTo && (
          <TransitionLink
            className="text-sm font-medium text-primary flex items-center space-x-1 p-2 cursor-pointer flex-none"
            to={props.viewMoreTo}
          >
            <span>View more</span>
            <ChevronRight />
          </TransitionLink>
        )}
      </div>
      {props.children}
    </div>
  );
}
