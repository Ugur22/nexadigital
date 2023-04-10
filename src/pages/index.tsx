import {
  Container,
} from '@chakra-ui/react';
import Hero from "../components/Hero"

export default function Home(props) {
  return (
    <div className="homepage">
        <Hero></Hero>
    </div>
  )
}

export async function getServerSideProps() {
  const response = await fetch("https://api.weather.gov/gridpoints/MFL/109,49/forecast")
  const data = await response.json()

  return {
    props: {
      forecast: data.properties.periods[0].detailedForecast
    }
  }
}