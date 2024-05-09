import Navigation from "@/components/nav";
import { Input, Button } from "@nextui-org/react";
import UserForm from "./form";
import { getSession } from "@/utils/auth";
import prisma from "@/utils/prisma";
import { demo } from "@/utils/demo";

export default async function Page() {
    const { email } = await getSession()

    // const user = await prisma.user.findUnique({
    //     where: {
    //         email: email
    //     }
    // })

    const user = demo.user[0]
    
    
    if (!user) return <div>loading...</div>

    return (
        <div>
            <h1 className=" text-4xl">Personal Page</h1>
            <UserForm firstName={user.firstName} lastName={user.lastName} email={email} phoneNumber={user.phoneNumber} agency={user.agency} license={user.license} ceaNumber={user.ceaNumber}
            country = {user.country}/>
        </div>
    )
}