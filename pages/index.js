import styles from '../styles/Home.module.css'
import Sectiontitle from './components/Sectiontitle'
import Navbar from './components/navbar'
export default function Home() {
  return (
    <div className="app">
      <Navbar />
      <Sectiontitle />
    </div>
  )
}
