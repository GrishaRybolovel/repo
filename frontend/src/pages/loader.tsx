import Logo from "@/icons/logo.svg?react"

export default function Loader(){
    return(
        <div className="flex justify-center items-center h-screen w-screen bg-background">
            <Logo className="animate-fade-in h-1/2 w-2/3 md:h-1/5 md:w-1/5"/>
        </div>
    )
}