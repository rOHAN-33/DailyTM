// import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center align-center">
      <h1 className="text-5xl font-bold text-center">
        Welcome To DailyTM
      </h1>
      <div className="flex gap-4">
        <Button className="mt-4 text-white bg-black font-bold py-2 px-4 rounded-xl">
          <RegisterLink>
            Getting Started
          </RegisterLink>
        </Button>

        <Button>
          <LoginLink>
            SignIn
          </LoginLink>
        </Button>
      </div>
  </div>

  );
}
