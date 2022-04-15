import React from "react";
import { lazy } from "react";
import loadable from "@loadable/component";

export const IconNames = ["twitter", "github", "linkedin", "instagram", "sun", "moon", "mail", "clock"] as const;

interface IconProps {
  name: typeof IconNames[number];
  className?: string;
}

export const Icon: React.FC<IconProps> = React.memo(({ name, className }) => {
  const iconClass = `icon icon--${name} ${className ? className : ""}`;

  if (!name || !IconNames.includes(name)) {
    return null;
  }

  const IconComponent = loadable(() => import(`./icons/${name}`), {
    resolveComponent: (components) => {
      const icon = React.cloneElement(components.default(), { className: `${iconClass}` });
      return () => icon;
    },
  });

  return <IconComponent />;
});
