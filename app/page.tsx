import { Button } from "@/components/ui/button";
import { cn } from "../lib/utils";
import { LoginButton } from "@/components/auth/login-button";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-500 to-blue-800">
      <div className="space-y-6 text-center">
        
      </div>
      <div className="mt-2">
        <LoginButton>
          <Button variant={"secondary"} size={"lg"}>
            Sign in
          </Button>
        </LoginButton>
      </div>
    </main>
  );
}
