// import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
export default async function Home() {
  const{isAuthenticated} = getKindeServerSession()
  const isLoggedIn = await isAuthenticated()
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center align-center">
     <div className="max-w-7xl mx-auto">
        <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <p>Your Personal WorkSpace</p>
                <p className="text-5xl md:text-6xl">
                    for <span className="text-blue-500">better productivity</span>
                </p>
            </h1>

            <p className="mt-6 text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima dolorum odit facere nihil, saepe omnis impedit sed autem sunt accusantium quas neque, beatae, quod totam. Provident consequuntur ratione rem, sequi eos debitis architecto et saepe sit pariatur excepturi veniam soluta!
            </p>
            
 <div className="flex gap-4 items-center justify-center mt-6">
        {
          isLoggedIn ? <>

            <Button asChild >
                <Link href="/workspace">
                Goto WorkSpace
                </Link>
            </Button>
          </> : <>
            <Button >
          <RegisterLink>
            Getting Started
          </RegisterLink>
        </Button>

        <Button>
          <LoginLink>
            SignIn
          </LoginLink>
        </Button>
          </>
        }
      </div>
        </div>
     </div>
     
  </div>

  );
}
