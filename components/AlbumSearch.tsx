import Image from 'next/image'
import React, { useState } from 'react'
import { FaPlay } from 'react-icons/fa'
import AlbumSearchItem from './AlbumSearchItem'
import Card from './Card'

interface IProps {
    albums:SpotifyApi.AlbumObjectSimplified[] | undefined
}
const AlbumSearch = ({ albums }:IProps) => {
    const [hovered,setHovered] = useState<boolean>(false);

  return (
    <div>
        <h1 className='font-bold text-white mb-4 text-2xl'>Albums</h1>
        
        <div className='grid grid-cols-5 gap-x-4'>
            {albums?.slice(0,5).map((album)=>(
                <AlbumSearchItem album={album} />
           
            ))}
            
        </div>

    </div>
  )
}

export default AlbumSearch