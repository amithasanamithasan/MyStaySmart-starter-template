import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Shared/Loader";
import Container from "../../components/Shared/Container";
import { Helmet } from "react-helmet-async";



const RoomDetails = () => {
    const {id}=useParams();
    const [room , setRoom]=useState({});
    const [loading ,setLoading]=useState(false);
    useEffect( ()=>{
    setLoading(true)
        fetch('/rooms.json')
        .then(res=>res.json())
        .then(data=> {
        
        const Singleroomdetails=data.find(room=> room._id === id)

        setRoom(Singleroomdetails);

        setLoading(false)
    })
    
    },[id])
    
if(loading){
    return <Loader></Loader>
}

    return (
     
          <Container>
        <Helmet>
            <title>{room.title}</title>
        </Helmet>
        <div  className="flex flex-col gap-3">
            <div>
                <h1  className="text-stone-950 md:font-semibold font-bold md:text-1xl text-3xl">{room?.title}</h1>
                <p className="font-extralight text-2xl md:text-1xl text-teal-400">{room?.location}</p>
             <div>
             <img className="rounded-lg bg-gradient-to-r from-pink-400 via-red-400 to-yellow-400 p-1 " src={room?.image} alt="image"  />
             </div>
             <h1 className="font-serif p-2 font-bold md:text-2xl text-3xl">{room?.host?.name}</h1>
             <div className="flex gap-3 p-2 font-bold text-amber-500">
                <p> Guests-{room?.guests}</p>
                <p> BedRooms-{room?.bedrooms}</p>
                <p>BathRooms-{room?.bathrooms}</p>
             </div>
             <div className="w-1/2  flex flex-1 justify-evenly">
                <p>{room?.description}</p>
                <h1 className="  block mx-auto">${room?.price}</h1>
             </div>
            
            </div>
        </div>
       
    
      </Container>
    );
};

export default RoomDetails;