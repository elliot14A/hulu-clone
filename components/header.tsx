/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image"
import { BadgeCheckIcon, CollectionIcon, HomeIcon, LightningBoltIcon, SearchIcon, UserIcon } from '@heroicons/react/outline'
import HeaderItem from "./header_item"

export default function Header() {
    return (
        <header className="flex flex-col sm:flex-row mt-5 justify-between items-center h-auto">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItem title="Home" Icon={HomeIcon}/>
                <HeaderItem title="Verified" Icon={BadgeCheckIcon}/>
                <HeaderItem title="Collections" Icon={CollectionIcon}/>
                <HeaderItem title="Trending" Icon={LightningBoltIcon}/>
                <HeaderItem title="Search" Icon={SearchIcon}/>
                <HeaderItem title="Account" Icon={UserIcon}/>
            </div>
            <Image 
            className="object-contain" 
            src="https://links.papareact.com/ua6" 
            width={200} 
            height={100}/>
        </header> 
    )
}
