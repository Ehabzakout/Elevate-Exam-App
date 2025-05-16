import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import getToken from "@/lib/utils/get-token";

import { FaUser } from "react-icons/fa6";
export default async function UserDataTable() {
  // Profile Data want to show for user
  const info = [
    "username",
    "name",
    "firstName",
    "lastName",
    "email",
    "role",
    "createdAt",
  ];

  // Get token
  const token = await getToken();
  if (!token) throw new Error("you are not logged in");

  // Fetch profile data
  const req = await fetch(`${process.env.BASIC_API}/auth/profileData`, {
    method: "GET",
    headers: { token },
    next: { tags: ["profileData"] },
    cache: "no-store",
  });

  const response = await req.json();
  const userInfo: [string, unknown][] = Object.entries(response.user).filter(
    (title) => info.includes(title[0]),
  );

  return (
    <>
      {/* headline */}

      <h1 className="mb-12 mt-5 flex items-center text-xl font-semibold text-primary">
        <FaUser className="mr-3 size-10 text-primary" />
        <span>User Information:</span>
      </h1>

      {/* Table */}
      <div className="ml-16 w-1/2">
        <Table>
          <TableCaption>User Information.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Title</TableHead>
              <TableHead>Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {userInfo?.map((info) => (
              <TableRow key={info[0]}>
                <TableCell className="text-lg font-semibold">
                  {info[0]}
                </TableCell>
                <TableCell className="text-lg">{info[1] as string}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
