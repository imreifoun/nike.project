import {
  Hero,
  Footer,
  Services,
  Subscribe,
  SpecialOffers,
  SupperQuality,
  CustomerReviews,
  PopularProducts,
} from './sections/index'

import Nav from './component/Nav'


const App = () => (
  <main className="relative bg-gradient-to-t from-slate-400 via-orange-300 to-slate-200">
      <Nav />

    <section className="xl:padding-l wide:padding-r padding-b">
       < Hero />
    </section>
    
    <section className="padding">
      <PopularProducts />
    </section>
    

    <section className="padding">
      <SupperQuality />
    </section>


    <section className="padding-x py-10">
      <Services />
    </section>


    <section className="padding">
      <SpecialOffers />
    </section>


    <section className="padding bg-pale-blue border sm:py-32 py-16 w-full">
      <CustomerReviews />
    </section>


    <section className="padding-x">
      <Subscribe />
    </section>


    <section className="bg-transparent  relative bottom-0 w-full">
     < Footer />
    </section>


  </main>
)

export default App;