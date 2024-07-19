import { ComponentProps } from "react";

const ArrowUpIcon = (props: ComponentProps<"svg">) => {
  return (
    <svg
      {...props}
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="currentColor"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 14L14 1M14 1H5.25455M14 1V9.27273" />
    </svg>
  );
};

export default ArrowUpIcon;
