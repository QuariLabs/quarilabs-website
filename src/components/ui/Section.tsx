import React, { ComponentProps } from "react";

const Section = (props: ComponentProps<"div">) => {
  const { children, className, ...rest } = props;
  return (
    <div
      {...rest}
      className={`xl:max-w-screen-[1512px] max-w-full px-[5rem] w-full mx-auto py-20 xl:px-[20rem] ${className}`}
    >
      {children}
    </div>
  );
};

export default Section;
