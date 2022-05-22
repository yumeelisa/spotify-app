import React from 'react'
import Image from 'next/image'
import { BsFillPauseFill,BsPlayFill } from 'react-icons/bs'
import { useRecoilState } from 'recoil'
import { playingTrackState, playState } from '../atoms/playerAtom'

const Card = ({items,cardClass,textClass,imageClass,imageSrc,hidden,isTopResult,chooseTrack }:any) => {
  const [play,setPlay]= useRecoilState(playState);
  const[playingTrack,setPlayingTrack] = useRecoilState(playingTrackState);

  const handlePlay = () => {
    chooseTrack(items);
  
    if(items.uri === playingTrack.uri) {
      setPlay(!play);
    }
  }


  return (
    <div className={`flex gap-6 ${cardClass} rounded-md group cursor-pointer  `} onClick={handlePlay}>
        <div className={`${imageClass} overflow-hidden ${hidden && "group-hover:scale-110 transition-transform duration-200 ease-in-out"}`}>
            <Image alt="image" src={imageSrc} width={300} height={300} objectFit='cover' className={`rounded-xl w-full `} />
            {hidden && <div className="opacity-0 group-hover:opacity-100 group-hover:block absolute z-10 bottom-2 left-2  transition-all duration-200 ease-out">
              <div className="w-7 h-7 rounded-full bg-green-500 flex justify-center items-center">
                {items.uri === playingTrack.uri && play ? (
                  <BsFillPauseFill className="text-white text-xl" />
                ):(
                  <BsPlayFill className="text-white text-xl" />

                )}
                
              </div>
              <h1 className={` text-gray-200 ${textClass}`}>{items?.name}</h1>

            </div>}



        </div>
        {!hidden && (
          <div className="flex flex-col relative w-full">
            <h1 className={` text-gray-200 ${textClass}`}>{items?.name}</h1>
            <h1 className={` text-gray-200 `}>{items?.artists[0].name}</h1>
            <div className={`rounded-full bg-green-500  justify-center items-center absolute bottom-2 right-2 hidden group-hover:flex ${!isTopResult ? "w-6 h-6" : "w-12 h-12"}`}>
     
                {items.uri === playingTrack.uri && play ? (
                  <BsFillPauseFill className="text-white text-xl" />
                ):(
                  <BsPlayFill className="text-white text-xl" />

                )}
              </div>
          </div>
        ) }
      

        
        

        
    </div>
  )
}

export default Card