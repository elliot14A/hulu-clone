import { ThumbUpIcon } from '@heroicons/react/outline'
import Image from 'next/image'

export type Movie = {
    id: string
    title: string | null
    original_name: string | null
    overview: string
    vote_count: number
    poster_path: string | null
    release_date: string | null
    first_air_date: string | null
    media_type: string | null
    backdrop_back: string | null
    adult: boolean
}

export type MovieProps = {
    movies: Movie[]
}

export default function Movies({movies}: MovieProps) {
    const BASE_URL:string = 'https://image.tmdb.org/t/p/original'
    console.log(movies)
    return (
        <div className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-4 3xl:flex flex-wrap items-center'>
            {movies.map((m: Movie) => <div key={m.id} className='
            p-4
            cursor-pointer 
            group
            transition
            ease-in
            transform
            sm:hover:scale-105
            hover:z-50'>
                <Image 
                alt={m.id} 
                src={BASE_URL + (m.backdrop_back || m.poster_path)}
                height={1080}
                width={1920}
                layout='responsive'
                />
                <p className='p-2 truncate max-w-md'>{m.overview}</p>
                <div className='p-2'>
                    <h2 className='text-white text-2xl mt-1 transition-all duration-100 ease-in-out group-hover:font-bold'>{m.title || m.original_name}</h2>
                    <p className='flex items-center opacity-0 group-hover:opacity-100'>{m.release_date || m.first_air_date} . {" "}
                    <ThumbUpIcon className='h-5 mx-2'/>
                    {m.vote_count}
                    </p>
                </div>
            </div>)}
        </div>
    )
}
