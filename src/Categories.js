


export default function Categories(props){
    return(
        <div className="flex flex-col"> 
                <div className="flex mb-6 mr-6 relative">
                    <img className="" src={props.img}/>
                    <div className="absolute bottom-0 p-10 hover:bg-black">
                        <h3 className="text-4xl text-light text-white">{props.title}</h3>
                    </div>
                </div>
        </div>
    )
}
