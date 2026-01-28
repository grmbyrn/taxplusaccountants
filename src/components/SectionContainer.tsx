import React from "react";

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * SectionContainer ensures consistent width and horizontal padding for all sections.
 * Usage: <SectionContainer>...</SectionContainer>
 */
const SectionContainer = ({ children, className = "" }: SectionContainerProps) => (
  <div className={`container mx-auto px-4 lg:px-8 ${className}`}>{children}</div>
);

export default SectionContainer;
