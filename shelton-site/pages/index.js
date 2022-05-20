import Layout from "../components/Layout"
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

export default function Home() {
  return (
    <Layout>
      <div id="jumbotron" className="flex w-full h-[50em] slideshow ">
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
      </div>
    </Layout>
  )
}
