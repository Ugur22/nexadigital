import Link from "next/link"
import { useRouter } from "next/router"
import styles from "../../styles/post.module.css"
import { Container } from '@chakra-ui/react'
import { servicesCollection } from '../../data/ServicesContent'

export default function Post(props) {
  const router = useRouter()
  return (
    <Container mt={5}>
      <p>
        <Link href="/services">
          <small>&laquo; Terug naar alle diensten</small>
        </Link>
      </p>
      <h2 className={styles.title}>{props.title}</h2>
      <p>{props.post.content}</p>
      <button className={styles.button} onClick={() => router.push("/services")}>
        ga terug
      </button>
    </Container>
  )
}

export async function getStaticPaths() {
  // const response = await fetch("https://learnwebcode.github.io/json-example/posts.json")
  // const data = await response.json()

  console.log(servicesCollection)

  const thePaths = servicesCollection.map(service => {
    return { params: { service: service.slug } }
  })

  return {
    paths: thePaths,
    fallback: false
  }
}

export async function getStaticProps(context) {
  // const response = await fetch("https://learnwebcode.github.io/json-example/posts.json")
  // const data = await response.json()
  // const thePost = data.posts.filter(post => post.slug === context.params.slug)[0]

  servicesCollection
  return {
    props: {
      post: thePost,
      title: thePost.title
    }
  }
}