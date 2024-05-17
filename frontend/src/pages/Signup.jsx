import { Heading } from "../components/Heading"
import { SubHeading } from "../components/SubHeading"
import { BottomWarning } from "../components/BottomWarning"
import { InputBox } from "../components/InputBox"
import { Button } from "../components/Button"

export const Signup = () => {
    return <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                    <Heading label={"Sign Up"}></Heading>
                    <SubHeading label={"Enter your information to create an account"}></SubHeading>
                    <InputBox label={"First Name"} placeholder={"John"}></InputBox>
                    <InputBox label={"Last Name"} placeholder={"Doe"}></InputBox>
                    <InputBox label={"Email"} placeholder={"Johndoe@gmail.com"}></InputBox>
                    <InputBox label={"Password"} placeholder={"123456"}></InputBox>
                    <div className="pt-4">
                    <Button label={"Sign up"}></Button>
                    </div>
                    <BottomWarning label={"Already have an account ?"} buttonText={"Sign in"} to={"/signin"}></BottomWarning>
                </div>
            </div>
        </div>
}
