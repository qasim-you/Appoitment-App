import { Popover } from "@radix-ui/react-popover";
import { PopoverDemo } from "./Popover";


export default function Header() {
  return (
    <div className="">
      <div className="flex justify-center   p-8 ">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col lg:flex-row max-w-5xl justify-center items-center p-2 space-y-3 w-[100%]">
            <div className="flex flex-col  items-center lg:text-left text-center justify-between  space-y-6 px-8">
              <div className="flex flex-col items-start space-y-3">
                <div className="text-3xl md:text-5xl font-bold px-8">
                  DR SMITH JHON
                </div>
                <div className="text-3xl text-orange-500 md:text-5xl font-bold px-8">
                  Discovery{" "}
                </div>
                <div className="h-1 rounded-2xl w-20 bg-orange-500 ml-10" />
              </div>
              <button className="">
                <ion-icon
                  name="caret-forward-outline"
                  className="mt-2 p-2 bg-orange-500 rounded-full text-3xl text-white border-2 border-orange-500 hover:bg-white hover:text-orange-500"
                ></ion-icon>
              </button>
            </div>
            <div className="flex space-x-2 md:space-x-6 md:m-4 w-1/2">
              <div className=" w-96 h-60 lg:h-96  overflow-hidden ">

              
                
                <img
                  src="https://static.marham.pk/assets/images/home-new/are-doctor.avif"
                  className="h-full w-full"
                  alt=""
                />


           
              </div>
              <div className="flex justify-center items-center top-44">
              <PopoverDemo />
                   </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
