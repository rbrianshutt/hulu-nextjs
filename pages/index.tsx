import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Results from '../components/Results';
import requests from '../util/requests';

const Home: NextPage = ({ results }) => {
	console.log(results) 
	return (
		<div>
			<Head>
				<title>Hulu Clone</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Header />
			<Nav />
			<Results results={results} />
		</div>
	);
};
export async function getServerSideProps(context) {
	const genre = context.query.genre;

	const request = await fetch(
		`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`
	).then((res) => res.json());
	return {
		props: {
			// will be passed to the page component as props
			results: request.results,
		},
	};
}

export default Home;
