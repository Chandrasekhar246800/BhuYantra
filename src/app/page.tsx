import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import TOC from '@/components/TOC'
import Problem from '@/components/Problem'
import Solution from '@/components/Solution'
import Architecture from '@/components/Architecture'
import Features from '@/components/Features'
import Hardware from '@/components/Hardware'
import Benefits from '@/components/Benefits'
import Cost from '@/components/Cost'
import Roadmap from '@/components/Roadmap'
import Vision from '@/components/Vision'
import References from '@/components/References'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <TOC />
        <Problem />
        <Solution />
        <Architecture />
        <Features />
        <Hardware />
        <Benefits />
        <Cost />
        <Roadmap />
        <Vision />
        <References />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}