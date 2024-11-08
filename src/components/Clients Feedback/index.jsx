import ClientsFeedbackCard from "../Clients Feedback Card";

const fetchData = () =>
{
    console.log("hello")
}

function ClientsFeedback() {
    return (
        <div className="flex flex-col mt-10 h-screen gap-16 w-[800px] m-auto">
            <h1 className="text-center">WHAT OUR CLIENTS SAY</h1>

            <div className="grid grid-cols-3">
            <ClientsFeedbackCard name={"John"} comment={"lorem ipsum ah"}  photoPath={"./src/assets/photoClient/Johnathan Doe.jpg"}/>

            </div>
        </div>
    )

}

export default ClientsFeedback;