import Head from "next/head";
import { NextPage } from "next";
import Header from "../components/header";
import Nav from "../components/Nav";
import { GetServerSideProps } from "next";
import requests from "../utils/requests";
import Movies, { Movie, MovieProps } from "../components/Movies";

const Home: NextPage<MovieProps> = (props) => {
  return (
    <div>
      <Head>
        <title>Hulu Clone</title>
      </Head>
      <Header />
      <Nav />
      <Movies {...props}/>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const genre = context.query.genre;
  const query = requests.filter((r) => r.body.title === genre);
  console.log(query)
  const response = await fetch(
    `https://api.themoviedb.org/3${query[0]?.body.url || requests[0].body.url}`
  );
  const movies: Movie[] = (await response.json()).results
  return {
    props: {
      movies
    },
  };
};

export default Home;
