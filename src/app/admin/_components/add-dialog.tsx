"use client";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TAddDiplomaDialog } from "@/lib/types/components-props";

import { IoArrowBackCircleOutline } from "react-icons/io5";

export default function AddDiplomaDialog({
  children,
  ...addDiplomaDialogProps
}: TAddDiplomaDialog) {
  // Destruct props

  const { title, open, setOpen, action, error } = addDiplomaDialogProps;

  function dialogControl() {
    setOpen(!open);
  }

  return (
    <>
      <Dialog open={open}>
        <DialogTrigger onClick={dialogControl}>{children}</DialogTrigger>
        <DialogContent className="flex w-[600px] flex-col">
          {error && <p className="text-red-500">{error}</p>}
          <DialogTitle className="flex items-center gap-2 text-2xl font-bold text-primary">
            <IoArrowBackCircleOutline
              className="size-6"
              onClick={dialogControl}
            />
            <span>{title}</span>
          </DialogTitle>
          {action()}
        </DialogContent>
      </Dialog>
    </>
  );
}
