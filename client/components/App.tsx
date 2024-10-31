import { useProjects } from '../hooks/useProjects.ts'
import Projects from './Projects.tsx'

function App() {
  return (
    <>
      <div className="app">
        <h1>Welcome to Spongebob's Portfolio!</h1>
        <section className="frontpage-layout">
          <p>
            Hi, I'm Spongebob Squarepants! I'm a fullstack developer looking for
            work in Bikini Bottom. Check out my projects!
          </p>
          <img
            src="./images/spongebob_formal.jpg"
            alt="picture of spongebob in a formal tuxedo looking dapper"
          />
        </section>
        <Projects />
      </div>
    </>
  )
}

export default App
