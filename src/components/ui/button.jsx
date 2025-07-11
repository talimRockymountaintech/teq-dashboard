import React from "react";
import { Slot } from "@radix-ui/react-slot";

// Simple cn function replacement since @/lib/utils does not exist
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const buttonVariants = {
  default: "bg-blue-600  hover:bg-blue-700",
  secondary: "bg-gray-600 hover:bg-gray-700",
  outline: "border border-gray-300 hover:bg-gray-100",
  ghost: "hover:bg-gray-100",
  link: "text-blue-600 underline hover:text-blue-800",
};

function Button({ className, variant = "default", asChild = false, ...props }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium px-4 py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
        buttonVariants[variant],
        className
      )}
      {...props}
    />
  );
}

export { Button };