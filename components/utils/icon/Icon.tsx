import React from "react";
import loadable from "@loadable/component";

export const IconNames = ["twitter", "github", "linkedin", "instagram"] as const;

interface IconProps {
  name?: typeof IconNames[number];
  className?: string;
  attributeDataName?: string;
}

export const Icon: React.FC<IconProps> = React.memo(({ name, className, attributeDataName }) => {
  const iconClass = `icon__svg icon__svg--${name} ${className ? className : ""}`;

  if (!name || !IconNames.includes(name)) {
    return null;
  }

  const IconComponent = loadable(() => import(`./icons/${name}`), {
    resolveComponent: (components) => {
      const icon = React.cloneElement(components.default(), { className: iconClass, "data-name": attributeDataName });
      return () => icon;
    },
  });

  return <IconComponent />;
});
