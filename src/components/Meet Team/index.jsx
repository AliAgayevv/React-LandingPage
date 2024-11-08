import MeetTeamCard from "../Meet Team Card";
import datas from "../../datas/teamMembers.json"


function MeetTeam() {
    return (

        <div className="h-[450px] w-screen text-center flex flex-col gap-9" id="team">
            <h1 className="text-2xl font-bold pt-12"> MEET THE TEAM </h1>
            <p className="text-[10px] text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.
            </p>

            <div className="flex w-[800px] mx-auto gap-10">
                {
                    datas.map(data => (
                        <MeetTeamCard key={data.id} name={data.name} position={data.position} photoPath={data.photoPath} />
                    ))
                }

            </div>

        </div>
    )
}

export default MeetTeam;