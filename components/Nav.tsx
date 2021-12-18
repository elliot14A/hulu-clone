import requests from "../utils/requests";
import {useRouter} from 'next/router'

interface Props {}

export default function Nav({}: Props) {
    const router = useRouter();
  return (
    <nav className="relative">
      <div className="flex 
      px-10
      sm: px-20
      text-2xl 
      whitespace-nowrap
      sm: space-x-10
      space-x-20
      scrollbar-hide
      overflow-x-scroll">
        {requests.map(({ query, body }, key) => (
          <h1
            onClick={
                () => router.push(`/?genre=${body.title}`)
            }
            className="cursor-pointer transition duration-100 transform hover:scale-125 active:text-green-600"
            key={key}
          >
            {body.title}
          </h1>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12"></div>
    </nav>
  );
}
