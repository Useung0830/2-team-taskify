import Image from "next/image";

export default function Profile({ name }:any){
  return(
    <div className=" flex gap-1.5 ">
      <div className=" flex justify-center items-center bg-profile-cobalt rounded-full w-6 h-6 text-[10px]">
        정은
      </div>
      {name}
    </div>
  )
}