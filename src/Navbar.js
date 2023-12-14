import photo from "./images/image-hero.jpg";

export default function Navbar(){
    return(
    <div>
        
        <div className="bg-black flex flex-col text-white pl-40 pr-40">
            <nav className="flex flex-row mt-20 items-center mb-10">
                <span class="mr-96 text-3xl ml-0 basis-2/4 font-extrabold">
                    loopstudios
                </span> 
                <div className="hover:underline hover:underline-offset-8"><p className="mr-6">About</p></div>
                <div className="hover:underline hover:underline-offset-8"><p className="mr-6">Careers</p></div>
                <div className="hover:underline hover:underline-offset-8"><p className="mr-6">Events</p></div>
                <div className="hover:underline hover:underline-offset-8"><p className="mr-6"> Products</p></div>
                <div className="hover:underline hover:underline-offset-8"><p className="">Support</p></div> 
            </nav>    
            <div className="border-white border-2 border-solid mt-16 p-6 w-2/5 mb-28">
                <p className="text-5xl w-96 pr-3">IMMERSIVE EXPERIENCES THAT DELIVERS</p>
            </div>
            
        </div>     
    </div>
    )   
}
