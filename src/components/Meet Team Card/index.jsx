


function MeetTeamCard({ name, position, photoPath }) {
    return (
        <div>
            <div>
                <img src={photoPath}/>
            </div>
            <h1>
                {name}
            </h1>
            <h2 className="text-center font-thin">
                {position}
            </h2>
        </div>
    )
}

export default MeetTeamCard;