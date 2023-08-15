import { SectionHeader } from "../common/SectionHeader";
import { SideProjectGallery } from "./SideProjectsGallery";

export function SideProjects() {
  return (
    <div id="sideprojects" className="flex flex-col gap-20">
      <SectionHeader title="Side Projects" />
      <SideProjectGallery />
    </div>
  );
}
