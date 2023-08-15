import React from "react";
import { Cloudinary } from "@cloudinary/url-gen";

interface GlobalContextProps {
  scrollValue: number;
  previousScrollValue: number;
  setPreviousScrollValue: Function;
  highlightedProject?: number;
  setHighlightedProject: Function;
  cloudinary?: Cloudinary;
}

const defaultVal: GlobalContextProps = {
  scrollValue: 0,
  highlightedProject: undefined,
  setHighlightedProject: () => {},
  setPreviousScrollValue: () => {},
  previousScrollValue: 0,
  cloudinary: undefined,
};

export const GlobalContext =
  React.createContext<GlobalContextProps>(defaultVal);
