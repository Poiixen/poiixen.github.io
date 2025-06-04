"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogContent = ({ children, className }) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay className="fixed inset-0 bg-black/60" />
    <DialogPrimitive.Content className={`fixed inset-0 m-auto p-6 bg-[#1c1c24] rounded-xl w-[90%] max-w-lg ${className}`}>
      {children}
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
);