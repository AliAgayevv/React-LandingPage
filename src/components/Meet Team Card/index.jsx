


function MeetTeamCard({ name, position, photoPath }) {
    return (
        <div>
            <div>
                <img src={photoPath}/>
            </div>
            <h1>
                {name}
            </h1>
            <h2 className="text-center text-[10px]">
                {position}
            </h2>
        </div>
    )
}

export default MeetTeamCard;