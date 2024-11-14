import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className=" w-full border-t border-border  backdrop-blur supports-[backdrop-filter]:bg-background/60 flex justify-center items-center">
      <div className=" text-center container flex  items-center justify-center space-y-1 py-6 md:h-16  md:justify-center md:space-y-0 md:py-0">
        © 2024 All Rights Reserved
      </div>
    </footer>
  );
};
