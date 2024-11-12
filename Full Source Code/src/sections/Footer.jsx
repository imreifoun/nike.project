import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"


const Footer = () => {
  return (
    <footer className=" bg-gradient-to-r p-10 w-full">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
          <div className="flex flex-col items-start ">
            <a href="/">
              <img src={footerLogo} alt="" width={150} height={46}/>
            </a>
            <p className="text-white font-montserrat mt-6 text-base leading-7 sm:mx-w-sm">Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards</p>
            
            <div className="flex items-center gap-5 mt-8 ">
              {
                socialMedia.map((soc) => (
                  <div className="flex justify-center w-12 h-12 items-center bg-white rounded-full">
                    <img src={soc.src} alt="" width={24} height={24} />
                  </div>
                ))
              }
            </div>

          </div>

          <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
              {
                footerLinks.map((links) => (
                  <div key={links}>
                      <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6 ">
                        {links.title}
                      </h4>
                      <ul className="mt-3 text-white font-montserrat text-base ">
                        {
                          links.links.map((e) => (
                            <li className="pt-2">
                              <a href="" className="hover:text-orange-400 ">{e.name}</a>
                            </li>
                          ))
                        }
                      </ul>
                  </div>
                ))
              }
          </div>
      </div>
    </footer>
  )
}

export default Footer