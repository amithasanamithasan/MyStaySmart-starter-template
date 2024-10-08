
import Button from "../../components/Button/Button";
import DatePicker from "./DatePicker";



const RoomReservation = ({room}) => {
    return (
   
        <div className='bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden'>
        <div className='flex flex-row items-center gap-1 p-4'>
          <div className='text-2xl font-semibold'>$ {room?.price}</div>
          <div className='font-light text-neutral-600 '>night</div>
        </div>
        <hr />
        <div className='flex justify-center'>
        <DatePicker></DatePicker>
        </div>
  
        <hr />
        <div className='p-4'>
          {/* <Button label='Reserve' /> */}
          <Button label='Reserve'></Button>
        </div>
        <hr />
        <div className='p-4 flex flex-row items-center justify-between font-semibold text-lg'>
          <div>Total</div>
          <div>$ {room?.price}</div>
        </div>
      </div>
    );
};

export default RoomReservation;