import Contact from '../components/organisms/Contact';
import Hero from "../components/organisms/Hero"
import ServicesBlock from '../components/organisms/ServicesBlock';
import ShowCases from '../components/organisms/ShowCases';

export default function Home(props) {
  return (
    <div className="homepage">
      <Hero />
      <ServicesBlock />
      <ShowCases />
      <Contact />
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