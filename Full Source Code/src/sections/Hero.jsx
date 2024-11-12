import { arrowRight } from '../assets/icons/index'
import Button from '../component/Button'
import ShoeCard from '../component/ShoeCard'
import { statistics, shoes } from '../constants'
import { bigShoe1 } from '../assets/images'
import {useState} from 'react' 


const Hero = () => {

  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1)


  return (
    <section id="home" className="w-full flex flex-col xl:flex-row min-h-screen max-container justify-center gap-10">
      
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-lg:padding-x pt-28 ">
        
        <p className="text-orange-500 font-montserrat text-3xl">Our Summer collections</p>

        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-5xl max-sm:leading-[1] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br/>
          <span class=" inline-block mt-3 text-coral-red ">Nike</span>Shoes
        </h1>
        
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-8 mb-14 sm:max-w-sm ">Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
        
        <Button label="Shop Now" iconURL={arrowRight}/>

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">

          {statistics.map((state, index) => (
              
              <div key={index}>
                <p className="text-4xl font-palanquin font-bold">{state.value}</p>
                <p className="leading-7 font-montserrat text-slate-gray">{state.label}</p>
              </div>
          ))}
        </div>
      
      </div>

      <div className="relative flex-1 flex justify-start items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero ">
        <img src={bigShoeImg} alt="" width={610} height={500} className="relative z-10 "/>

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%]">
          {
            shoes.map((shoe, index) => (
              <div key={shoe} className='hover:animate-pulse transition-all duration-500'>
                <ShoeCard imgURL={shoe} changeBigShoesImage={(shoe) => {setbigShoeImg(shoe)}} bigShoeImg={bigShoeImg} />
              </div>
            ))
          }
        </div>
      </div>
    
    </section>
  )
}

export default Hero