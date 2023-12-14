import pic from "./images/image-interactive.jpg"


export default function Content(){
    return(
        <div className="mr-40 ml-40 mt-20 relative mb-40">
            <div>
            <img src={pic} className="w-3/5"/>
            <div className="absolute right-0 bottom-0 text-black bg-white w-2/4 p-12">
                <h2 className="text-4xl font-semibold ">THE LEADER IN INTERACTIVE VR</h2>
                <p className="mt-6 text- font-medium text-gray-400">Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
            </div>
            </div>
            {/* <div className="flex flex-row justify-between mb-10 mt-10">
                <h3 className="text-semibold text-5xl">OUR CREATIONS</h3>
                <p className="text-xl items-center text-black">SEE ALL</p>
            </div> */}
        </div>
    )
}
