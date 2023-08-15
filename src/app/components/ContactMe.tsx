import { useState } from "react";
import { SectionHeader } from "./common/SectionHeader";

export function ContactMe() {
  const [message, setMessage] = useState("");

  return (
    <div id="contactme" className="flex flex-col items-start gap-y-6">
      <SectionHeader title="Contact Me" />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="block w-full p-4 text-black bg-black border-0 rounded-md resize-none bg-opacity-5"
        rows={5}
      />
    </div>
  );
}
