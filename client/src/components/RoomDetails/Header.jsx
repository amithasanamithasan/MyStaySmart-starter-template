import Heading from "../Shared/Heading";


const Header = ({room}) => {
    return (
        <>
        <Heading title={room.title} subtitle={room.location} />
        <div className=' overflow-hidden rounded-xl'>
          <img
            className='object-cover rounded-xl 
            bg-gradient-to-r
             from-pink-500
              via-red-500
               to-yellow-500 p-1 '
            src={room.image}
            alt='header image'
          />
        </div>
      </>
    );
};

export default Header;