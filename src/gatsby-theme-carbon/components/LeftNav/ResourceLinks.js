import React from "react";
import ResourceLinks from "gatsby-theme-carbon/src/components/LeftNav/ResourceLinks";

const links = [
  {
    title: "GitHub",
    href: "https://github.com/carbon-design-system/carbon-for-ibm-dotcom",
  },
  {
    title: "IBM.com Web Standards",
    href: "https://www.ibm.com/standards/web",
  },
  {
    title: "Design kit",
    href: "/designing/#install-the-sketch-kit",
  },
];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links} />;

export default CustomResources;
