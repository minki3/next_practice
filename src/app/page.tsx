import Introduce from './components/Introduce'
import Navigation from './components/Navigation'
import About from './components/About'

export default function Home() {
  return (
    <main className="">
      <Navigation />
      <Introduce />
      <About />
    </main>
  )
}
