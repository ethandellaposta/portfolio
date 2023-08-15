import { ProjectDetailsProps } from "@/app/content/data";
import { useContext } from "react";
import { GlobalContext } from "../../common/context/global/GlobalContext";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export function ExperienceTimelineProjectDetails(props: {
  details: ProjectDetailsProps;
}) {
  const syntaxTheme = oneDark;
  return (
    <div className="flex flex-col md:mt-20 line">
      {props.details.map((detail) => {
        if (detail.type === "code") {
          return (
            <>
              <div className="hidden my-8 rounded-md shadow-even-dark md:block">
                <SyntaxHighlighter
                  language="typescript"
                  style={syntaxTheme}
                  showLineNumbers
                  wrapLongLines
                  customStyle={{
                    margin: 0,
                    padding: 30,
                    borderRadius: ".375rem",
                  }}
                >
                  {detail.content}
                </SyntaxHighlighter>
              </div>
              <div className="block my-8 rounded-md shadow-2xl shadow-even-dark md:hidden">
                <SyntaxHighlighter
                  language="typescript"
                  style={syntaxTheme}
                  customStyle={{
                    margin: 0,
                    padding: 20,
                    borderRadius: ".375rem",
                  }}
                >
                  {detail.content}
                </SyntaxHighlighter>
              </div>
            </>
          );
        } else if (detail.type === "text") {
          return <p className="my-8 text-lg">{detail.content}</p>;
        } else if (detail.type === "header") {
          return (
            <p className="text-2xl font-bold text-blue-700">{detail.content}</p>
          );
        } else if (detail.type === "bullets") {
          return (
            <ul
              style={{ listStylePosition: "outside" }}
              className="mx-4 my-8 list-disc"
            >
              {(detail.content as string[]).map((bullet) => (
                <li className="text-lg">{bullet}</li>
              ))}
            </ul>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
