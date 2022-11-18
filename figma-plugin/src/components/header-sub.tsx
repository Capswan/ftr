import { Link } from "@reach/router";
import { Type12PosBold } from "figma-ui-components";
import React from "react";
import IconArrowLeft from "./icons/arrow-left";

export interface HeaderSubProps {
  title: string;
  backLink: string;
}

const HeaderSub: React.FC<HeaderSubProps> = ({ title, backLink }) => {
  return (
    <div className="p-4 border-b border-b-slate-200">
      <Link to={backLink} className="flex flex-row gap-2">
        <IconArrowLeft className="w-4 h-4" />
        <Type12PosBold>{title}</Type12PosBold>
      </Link>
    </div>
  );
};

export default HeaderSub;
