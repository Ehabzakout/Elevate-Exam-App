import { authOptions } from "@/app/api/auth/[...nextauth]/auth-options";
import { getServerSession } from "next-auth";
import { AiFillFlag } from "react-icons/ai";
import { GoClockFill } from "react-icons/go";
import { FaCircleCheck } from "react-icons/fa6";
import userImage from "@assets/images/user-image.png";
import Image from "next/image";

//  the data for the user achievements
const data = [
  {
    icon: <AiFillFlag className="size-10 text-primary" />,
    title: "Quiz Passed",
    number: "27",
  },
  {
    icon: <GoClockFill className="size-10 text-primary" />,
    title: "Fastest Time",
    number: "13 min",
  },
  {
    icon: <FaCircleCheck className="size-10 text-primary" />,
    title: "Correct Answers",
    number: "200",
  },
];

//  the user summary component
export default async function UserSummary() {
  const session = await getServerSession(authOptions);
  const image = session?.user?.image || userImage;

  return (
    <div className="flex gap-14 rounded-3xl bg-white px-4 py-8">
      {/* User image */}
      <div className="size-52 bg-zinc-200">
        {image && <Image src={image} alt="User Image" />}
      </div>

      {/* User information */}
      <div className="flex flex-1 flex-col pr-28">
        {/* Username */}
        <h2 className="text-3xl font-bold capitalize text-primary">
          {session?.user.username}
        </h2>

        {/* Summary */}
        <p className="text-custom-gray-400 mt-1 text-xl">Voluptatem aut</p>

        <div className="bg-custom-gray-50 relative my-6 h-3 w-full overflow-hidden rounded-3xl">
          <span className="absolute h-full w-1/2 rounded-3xl bg-primary"></span>
        </div>

        {/* User achievements  */}
        <div className="mt-auto flex justify-between">
          {data.map((item) => (
            <div key={item.title} className="mt-auto flex gap-4">
              {/* Icon  */}
              <div className="flex size-16 items-center justify-center rounded-xl shadow-[0_15px_40px_5px_#EDEDED]">
                {item.icon}
              </div>

              {/* Text */}
              <div className="text-custom-gray-400">
                <p className="text-3xl font-bold"> {item.number}</p>
                <p className="mt-auto text-lg">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
