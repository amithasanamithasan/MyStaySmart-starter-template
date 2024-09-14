import { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import Container from "../Shared/Container";
import { useSearchParams } from "react-router-dom";


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
        <div className=" pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
        lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
            {
                rooms.map(room=><RoomCard key={room._id} room={room}></RoomCard>)
            }
        </div>
        </Container>
    );
};

export default Room;