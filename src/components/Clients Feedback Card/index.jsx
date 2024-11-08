function ClientsFeedbackCard({ name, photoPath, comment }) {
    return (
        <div className="bg-transparent rounded-lg m-3 w-[250px] h-[200px] p-10 text-center">
            <div className="flex items-center mb-4 gap-6">
                <img src={photoPath} className="w-12 h-12 rounded-full" />
                <h2 className="text-[12px] font-bold ">{name}</h2>
            </div>
            <p className="text-gray-700 text-left text-[10px]">{comment}</p>
        </div>
    )
}

export default ClientsFeedbackCard;