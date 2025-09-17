import { userRequired } from "@/app/data/user/is-user-authenticated"
import { getUserWorkspaces } from "@/app/data/workspace/get-user-workspaces"
// import OnBoardingForm from "../../../components/onboardingform"
// import OnBoardingForm from "@/components/onboardingform"
// import OnBoardingForm from "@/components/onboardingform"
import { redirect } from "next/navigation"
import BoardingForm from "@/components/BoardingForm"
// import onBoardingForm from "@/components/onboardingform"
export default async function onBoarding(){
    const {data} = await getUserWorkspaces()
    const {user} = await userRequired()
    if(data?.onboardingCompleted && data?.workspaces.length > 0){
        redirect("/workspace")
    }
    else if(data?.onboardingCompleted){
        redirect("/create-workspace")
    }
    const name = `${user?.given_name || "" } ${user?.family_name || ""}`
    return(
        <div>
            <BoardingForm
                name={name}
                email = {user?.email as string}
                image = {user?.picture || ""}
            ></BoardingForm>
        </div>
    )
}