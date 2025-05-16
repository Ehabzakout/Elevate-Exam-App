import { signOut } from "next-auth/react";
import AlertDialogDemo from "../../common/alert-dialog";
import Image from "next/image";
import logoutIcon from "@assets/images/logout-icon.png";
import logoutAction from "@/lib/actions/logout-action";

export default function LogoutDialog() {
  // Dialog props for logout function

  const alertDialogProps = {
    accept: "Log out",
    title: "Are you sure you want to logout ?",
    description: "If you click accept, you won't see the subjects",
    action: async () => {
      await logoutAction();
      signOut();
    },
  };

  return (
    <AlertDialogDemo {...alertDialogProps}>
      <div className="flex items-center gap-7 rounded-xl px-2 py-3 hover:bg-blue-100">
        {/* Icon */}
        <Image src={logoutIcon} alt="logout" />

        {/* Label */}
        <span>Logout</span>
      </div>
    </AlertDialogDemo>
  );
}
