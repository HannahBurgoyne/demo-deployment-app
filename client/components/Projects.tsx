import { useProjects } from '../hooks/useProjects'

export default function Projects() {
  const { data } = useProjects()

  if (data)
    return (
      <div className="project-grid">
        {data.map((project) => (
          <section className="project-card" key={project.id}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
          </section>
        ))}
      </div>
    )
}
