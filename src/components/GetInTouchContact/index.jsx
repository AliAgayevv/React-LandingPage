import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";




function GetInTouchContact({ phone, address, email }) {
    return (
        <div className=" mt-36 flex flex-col gap-10 font-serif" id="contact">
            <p className="text-[14px]">Contact Info</p>
            <div className="flex flex-col">
                <div className="flex gap-1">
                    <IoLocationSharp size={"14px"} />
                    <p className="text-[10px]">Address</p>
                </div>
                <p className="text-[10px] font-light">{address}</p>
            </div>
            <div className="flex flex-col">
                <div className="flex gap-1">
                    <FaPhone size={"14px"} />
                    <p className="text-[10px]">Phone</p>
                </div>
                <p className="text-[10px] font-light">{phone}</p>
            </div>
            <div className="flex flex-col">
                <div className="flex gap-1">
                    <MdEmail size={"14px"} />
                    <p className="text-[10px]">Email</p>
                </div>
                <p className="text-[10px] font-light">{email}</p>
            </div>

        </div>
    )
}

export default GetInTouchContact;