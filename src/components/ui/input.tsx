import * as React from "react";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
import { cn } from "@/lib/utils/cn";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    // password status

    const [showPassword, setShowPassword] = React.useState(false);
    const [changeType, setChangeType] = React.useState(type);

    // funtion to change password status
    function changePasswordStatus() {
      setShowPassword(!showPassword);
      if (changeType === "password") setChangeType("text");
      else setChangeType("password");
    }

    return (
      <>
        <div className="relative">
          {/* Input fieled */}

          <input
            type={changeType}
            className={cn(
              "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              className,
            )}
            ref={ref}
            {...props}
          />

          {/* Icon for change password status */}

          {type === "password" && (
            <div
              className="absolute right-3 top-4"
              onClick={() => changePasswordStatus()}
            >
              {!showPassword ? (
                <VscEye className="text-2xl text-muted-foreground" />
              ) : (
                <VscEyeClosed className="text-2xl text-muted-foreground" />
              )}
            </div>
          )}
        </div>
      </>
    );
  },
);
Input.displayName = "Input";

export { Input };
