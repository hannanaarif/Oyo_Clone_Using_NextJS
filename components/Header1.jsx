import Image from 'next/image'
import Block from './Block'

const Header1 = () => {
  return (
    <div className='flex justify-between border-b-2 border-gray-300 items-center h-24 px-10'> 
        <Image src={'/logo.png'} alt='logo' width={200} height={200} className='w-28 h-24'/> 
        <div className='border-r-2 border-gray-300 h-full flex'>
        <Block title={'Become a member'} para={'Additional 10% off on stays.'} src={'/member.png'}/>
        <Block title={'OYO for Business'} para={'Trusted by 5000 corporates'} src={'/bag.png'}/>
        <Block  title={'List your property'} para={'Start earning in 30mins'} src={'/property.png'}/>
        <Block  title={'0124-6201611'} para={'Call us to Book now'} src={'/phone.png'}/>
        <div className="flex items-center px-3">
        <Image src={'/login.png'}
        alt="demo" 
        width={100} 
        height={100}
        className='w-10 h-10 rounded-full mr-2'/>
        <h3 className='font-bold'>Login/Sign up</h3>
        </div>
        </div>
    </div>
  )
}

export default Header1
