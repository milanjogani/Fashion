import React from 'react'
import { MdArrowRightAlt } from "react-icons/md";
import { Link } from 'react-router-dom'; // Import Link for navigation
import "./collection.css"

const Collection = () => {
    const collect = [
        {
            id: 1,
            name: "Suits",
            image: "images/82a7e33c186338335db0f4ac3fea7e00.jpg"
        },
        {
            id: 2,
            name: "Shirt",
            image: "images/68e72bf33ded005d36ef1a98265e1ce3.jpg"
        },
        {
            id: 3,
            name: "Jacket",
            image: "images/man-sitting-on-rock-with-black-leather-jacket-during-daytime.jpg"
        },
    ]
    return (
        <>
            <div className="collectionOuter py-5">
                <h2 className='text-center'>
                    Collections Our carefully curated collections provide a diverse range of options for our customers.
                </h2>
                <div className="container">
                    <div className="collectionInner row py-4 cursor-pointer">
                        {
                            collect.map((item) => {
                                return (
                                    <div key={item.id} className="col-lg-4 col-md-6 col-12">
                                        {/* Wrap the item with a Link */}
                                        <Link to={`/details/${item.id}`} className="text-decoration-none">
                                            <div className="collectionImages">
                                                <div className="imageDiv overflow-hidden">
                                                    <img style={{ width: "100%" }} src={item.image} alt={item.name} />
                                                </div>
                                                <h3 className='pt-1'>{item.name}<MdArrowRightAlt className='ps-1' /></h3>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Collection
