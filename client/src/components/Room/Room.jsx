import { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import Container from "../Shared/Container";
import { useSearchParams } from "react-router-dom";
import Heading from "../Shared/Heading";


const Room = () => {
const [rooms , setRooms]=useState([]);
const [params , setParams]=useSearchParams();
// oonno je kono component e access korte parbo params.get kore 
  const category= params.get('category')
// API data loaded

useEffect( ()=>{
fetch('rooms.json')

.then(res=>res.json())
.then(data=> {
    if(category){

  const fillered= data.filter(room=> room.category=== category)
  setRooms(fillered)

    }else{
        setRooms(data)
    }
})

},[category])

    return (
        <Container>
        {rooms && rooms.length>0 ? <div className=" pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
        lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
            {
                rooms.map(room=><RoomCard key={room._id} room={room}></RoomCard>)
            }
        </div>: <div className=" items-center justify-between min-h-[500px] m-20">

        <Heading   center={true }  
        title="No Rooms Avilable In This Category!'" 
        subtitle="Please Other Seleced Categories.">
        </Heading>
        </div>
        }
        </Container>
    );
};

export default Room;