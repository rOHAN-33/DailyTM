import { db } from "@/lib/db"
import { userRequired } from "../user/is-user-authenticated"

export const getUserWorkspaces = async()=>{
    try {
        const {user} = await userRequired()
        if (!user) {
            throw new Error("User not found or not authenticated.");
        }
        const workspaces = await db.user.findUnique({
            where:{id: user.id},
            include:{
                workspaces:{
                    select:{
                        id:true,
                        userId:true,
                        workspaceId:true,
                        accessLevel:true,
                        createdAt:true,
                        workspace:{
                            select:{
                                name:true
                            }
                        }
                    }
                }
            }
        })
        return {data: workspaces?.workspaces}
    } catch (error) {
            console.log(error)
            return{
                success:false, error:true, message:"failed to fetch workspaces"
            }        
    }
}