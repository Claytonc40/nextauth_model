import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label?: string;
}
export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-4 items-center justify-center">
      <h1
        className={cn(
          "text-6xl text-black font-semibold drop-shadow-md",
          font.className
        )}
      >
        🔐 Auth
      </h1>
      <p>{label}</p>
    </div>
  );
};
