import { userSchema } from "@/lib/schema"
import z from "zod"

interface props  {
    name:string,
    email:string
    image?:string
}

type UserDataType  = z.infer<typeof userSchema>
export default function OnBoardingForm({name, email, image}:props){
    return (
        <div>
            onBoardingForm
        </div>
    )
}