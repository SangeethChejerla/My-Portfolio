import Image from 'next/image';
import sng1 from '@/public/sng1.jpg';

// Assuming you have a separate CSS file for styling
const Heroimage = () => {
  return (
    <div className="">
      <div className="box">
        <div className="spin-container">
          <div className="shape">
            <div className="bd">
            <Image
            className='object-contain w-full h-full'
        src={sng1}
        alt="Description of the image"
        width={500} // Adjust width as needed
        height={500} // Adjust height as needed
      />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heroimage;