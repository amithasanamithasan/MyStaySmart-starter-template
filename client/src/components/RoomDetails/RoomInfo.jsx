

const RoomInfo = ({room}) => {
    return (
        <div className='col-span-4 flex flex-col gap-8'>
          <div className='flex flex-col gap-2'>
            <div
              className='
                  text-xl 
                  font-semibold 
                  flex 
                  flex-row 
                  items-center
                  gap-2
                '
            >
              <div className="lg:text-3xl md:text-2xl">Hosted by: {room?.host?.name}</div>
    
              <img
                className='rounded-full border-[1px] py-2'
                height='50'
                width='60'
                alt='Avatar'
                src={room?.host?.image}
              />
            </div>
            <div
              className='
                  flex 
                  flex-row 
                  items-center 
                  gap-4 
                  font-light
                  text-neutral-500
                '
            >
              <div className="text-indigo-500 font-semibold">{room?.guests} :Guests</div>
              <div className="text-teal-500 font-semibold">{room?.bedrooms} :Rooms</div>
              <div className="text-pink-500 font-semibold">{room?.bathrooms} :Bathrooms</div>
            </div>
          </div>
    
          <hr />
          <div
            className='
            text-lg font-light text-zinc-950'
          >
            {room?.description}
          </div>
          <hr />
        </div>
      )
    }


export default RoomInfo;