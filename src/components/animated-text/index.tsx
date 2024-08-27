import { FC, useRef } from "react";

interface AnimatedTextProps {
  phrases: string;
  className?: string;
  delay?: number;
  stagger?: number;
  animateInView?: boolean;
}

export const AnimatedText: FC<AnimatedTextProps> = ({
  phrases,
  className = "",
  delay = 0,
  stagger = 0.015,
  animateInView = true,
}) => {
  const elementRef = useRef<HTMLSpanElement>(null);
  const inView = "a";

  const animationVariants = 0;
  return <div></div>;
};
