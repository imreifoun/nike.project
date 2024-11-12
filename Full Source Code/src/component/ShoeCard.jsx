
const ShoeCard = ({imgURL, changeBigShoesImage, bigShoeImg}) => {

    const handleClick = () => {
        if (bigShoeImg !== imgURL.bigShoe)
            changeBigShoesImage(imgURL.bigShoe)
    }

    return (
        <div className={`rounded-xl border-2 
                ${bigShoeImg === imgURL.bigShoe ? 'border-coral-red' : 'border-transparent'}
                cursor-pointer max-sm:flex-1
            `} onClick={handleClick}>

            <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4 hover:scale-125 hover:border-2 hover:border-coral-red ">
                <img src={imgURL.thumbnail} alt="" width={127} heigth={103} className="object-contain "/>
            </div>
            
        </div>
    )
}

export default ShoeCard