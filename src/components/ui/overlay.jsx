// export const Overlay = ({children, className}) => {
//   return <div className="fixed inset-0 ">{children}</div>
// }

import React from "react";

import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "@/src/lib/utils";

const OverlayContent = React.forwardRef(
  ({ className, children, ...props }, ref) => {
    return (
      <Dialog.Overlay
        {...props}
        ref={ref}
        className={cn("fixed inset-0 z-50 bg-black opacity-70", className)}
      >
        {children}
      </Dialog.Overlay>
    );
  }
);

const OverlayTrigger = Dialog.Trigger;
const OverlayClose  = Dialog.Close;
const Overlay = Dialog.Root;

export { Overlay, OverlayClose, OverlayContent, OverlayTrigger };
