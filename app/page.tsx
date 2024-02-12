import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-500 to-blue-800">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl text-white font-semibold drop-shadow-md">
        🔐 Auth
        </h1>
      </div>
      <div className="mt-2">
        <Button variant={"secondary"} size={"lg"}>Sign in</Button>
      </div>
    </main>
  );
}
