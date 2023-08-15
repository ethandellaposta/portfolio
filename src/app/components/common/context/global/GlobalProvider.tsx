import { ReactNode, use, useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import { fadeInScroll } from "../../../../animations/fadeInScroll";
import { Cloudinary } from "@cloudinary/url-gen";

export const GlobalProvider = function (props: { children: ReactNode }) {
  const [scrollValue, setScrollValue] = useState(0);
  const [previousScrollValue, setPreviousScrollValue] = useState(0);
  const [highlightedProject, setHighlightedProject] = useState<
    number | undefined
  >(undefined);

  useEffect(() => {
    const handleScroll = () => {
      setScrollValue(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // register scroll animations
    fadeInScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const cloudinary = new Cloudinary({
    cloud: {
      cloudName: "ds89df8g9",
    },
  });

  return (
    <GlobalContext.Provider
      value={{
        scrollValue,
        previousScrollValue,
        setPreviousScrollValue,
        highlightedProject,
        setHighlightedProject,
        cloudinary,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
