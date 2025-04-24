import { useEffect, useState } from "react";
import deleteSubjectAction from "../actions/delete-subject-action";

export default function useDeleteSubject(id: string) {
  // Dialog states

  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Delete subject action

  async function deleteSubject() {
    const response = await deleteSubjectAction(id);

    if (response.message === "success") {
      window.location.pathname = "/admin/dashboard";
      setOpen(false);
    } else setError(response.message);
  }

  useEffect(() => {
    return () => {
      setError(null);
    };
  }, []);

  return { open, setOpen, error, deleteSubject };
}
