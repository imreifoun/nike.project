import { reviews } from "../constants"
import ReviewCard from "../component/ReviewCard"

const CustomerReviews = () => {
  return (
    <section className="max-container ">
      <h3 className="font-palanquin text-center font-bold text-4xl">
          What Our
        <span className="text-coral-red"> Customers </span>
         Say ?
      </h3>
      <p className="info-text m-auto max-w-lg text-center pt-5">Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>

      <div className="flex flex-1 mt-24 justify-evenly items-center max-lg:flex-col gap-14">
      {
        reviews.map((rev) => (
          <ReviewCard key={rev.customerName} imgURL={rev.imgURL} customerName={rev.customerName} rating={rev.rating} feedback={rev.feedback}/>
        ))
      }
      </div>

    </section>

  )
}

export default CustomerReviews