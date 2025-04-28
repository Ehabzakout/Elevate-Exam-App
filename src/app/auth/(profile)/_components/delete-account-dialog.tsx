import { signOut } from "next-auth/react";
import AlertDialogDemo from "@/components/common/alert-dialog";
import logoutAction from "@/lib/actions/logout-action";
import deleteMyAccount from "../../actions/delete-account-action";

export default function DeleteAccountDialog() {
  // Dialog props for delete my account function

  const alertDialogProps = {
    accept: "Delete",
    title: "Are you sure you want to Delete your account ?",
    description:
      "If you click Delete, you will delete your account and all your data",
    action: async () => {
      await deleteMyAccount();
      await logoutAction();
      signOut();
    },
  };

  return (
    <>
      {/* Logout dialog */}
      <AlertDialogDemo {...alertDialogProps}>
        <div className="flex items-center gap-7 rounded-xl px-2 py-3 text-red-600 hover:bg-blue-100">
          <span> Delete My Account</span>
        </div>
      </AlertDialogDemo>
    </>
  );
}
