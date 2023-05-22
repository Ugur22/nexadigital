import { Box, Container } from "@chakra-ui/react"

export default function About(props) {
  return (
    <div>
      <Box p={4} color="brand.secondary" py={{ base: 10, md: 10 }}>
        <h2>About Us</h2>
        <p>
          Welcome to NexaDigital, a young and dynamic company specializing in website
          and application development. Our company is based in the Netherlands, and we
          are committed to delivering exceptional digital solutions that exceed our
          clients expectations.
        </p>
        <p>
          At NexaDigital, we believe that technology is the key to unlocking new
          opportunities and driving growth in todays fast-paced business world. We are
          passionate about leveraging our expertise and experience to help our clients
          succeed in their respective industries.
        </p>
        <p>
          Our team of skilled developers, designers, and project managers work closely
          with each client to understand their unique needs and goals. We take a
          personalized approach to every project, ensuring that our solutions are
          tailored to meet the specific needs of each client.
        </p>
        <p>
          Whether you`re looking to build a new website, develop a mobile application,
          or optimize your digital marketing strategy, NexaDigital has the expertise and
          skills to deliver results. Our team is dedicated to providing outstanding
          service and support to ensure that your project is completed on time, within
          budget, and to the highest standards of quality.
        </p>
        <p>
          Thank you for considering NexaDigital as your partner for your next digital
          project. We look forward to working with you and helping you achieve your
          business goals.
        </p>
      </Box>
    </div >
  )
}

export async function getStaticProps() {
  const response = await fetch("https://api.github.com/users/ugur22")
  const data = await response.json()

  return {
    props: {
      repoCount: data.public_repos
    },
    revalidate: 10
  }
}