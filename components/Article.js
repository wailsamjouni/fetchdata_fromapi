import React from 'react'
import Image from 'next/image'

const Article = props => {
    return (
        <div className="flex flex-col space-x-3.5 border-2 rounded-md border-gray
                        p-3 space-y-7 items-center justify-center cursor-pointer">
            <div className="flex items-center justify-center bg-opacity-70">
                <Image src={props.article.image} width="170" height="170" />
            </div>
            <div className="flex flex-col bg-gray-100 rounded-md uppercase
                            p-3 min-w-full font-sans text-sm antialiased font-normal">
                <h3 className="font-semibold">{props.article.title}</h3>
                <h4 className="text-xs my-2">Category: {props.article.category}</h4> <br />
                <div className="flex items-center justify-center">
                    <h5 className="bg-gray-300 rounded-lg p-2 text-gray-900 text-opacity-70
                                    m-2 font-bold tracking-wider hover:text-opacity-100
                                    ">
                        Price: {props.article.price} EU</h5>
                    <button className="px-3 py-1 m-2 bg-gray-600 rounded uppercase text-opacity-70
                                    text-white font-bold hover:text-black hover:bg-gray-300
                                        hover:text-opacity-100 hover:tracking-wider">
                        More details...</button>
                </div>
            </div>
        </div>
    )
}

export default Article
