function ClientsFeedbackCard({name, photoPath, comment}) {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 w-[250px] h-[200px]">
            <div className="flex items-center mb-4">
                <img src={photoPath} className="w-12 h-12 rounded-full mr-4" />
                <h2 className="text-lg font-bold">{name}</h2>
            </div>
            <p className="text-gray-700 text-left text-xs">{comment}</p>
        </div>
    )
}

export default ClientsFeedbackCard;