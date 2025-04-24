import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { TAlertDialog } from "@/lib/types/dialog";

export default function AlertDialogDemo({
  children,
  ...alertDialogProps
}: TAlertDialog) {
  const { open, setOpen, error, title, description, accept, action } =
    alertDialogProps;

  function dialogControl() {
    if (setOpen) setOpen(!open);
  }

  return (
    <>
      <AlertDialog open={open}>
        <AlertDialogTrigger onClick={dialogControl}>
          {children}
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            {error && <p className="text-red-500">* {error}</p>}
            <AlertDialogTitle>{title} </AlertDialogTitle>
            <AlertDialogDescription>{description}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={dialogControl}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction onClick={action}>{accept}</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
