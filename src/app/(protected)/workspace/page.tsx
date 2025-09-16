import { getUserWorkspaces } from '@/app/data/workspace/get-user-workspaces'
import { redirect } from 'next/navigation';
import React from 'react'

const WorkSpace = async() => {
    const {data} = await getUserWorkspaces()
    // if(!data) re1turn null;

    if(data?.onboardingCompleted && data?.workspaces?.length == 0){
        redirect("/create-workspace")

    }
    else if(!data?.onboardingCompleted){
        redirect("/onboarding")
    }
    else{
        redirect(`/workspace/${data?.workspaces[0].workspaceId}`)
    }
  return (
    <div>WorkSpace</div>
  )
}

export default WorkSpace