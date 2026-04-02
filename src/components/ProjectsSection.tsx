import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

interface Project {
  title: string
  description: string
  technologies: string[]
  github: string
  pagina: string
}

const projects: Project[] = [
  {
    title: 'Diseño Shadow Flip - Juego de plataformas',
    description:
      'Participé en el desarrollo de Shadow Flip como diseñadora del proyecto, encargándome del diseño de personajes, asssets para el entorno, diseño del HUD y la interfaz del usuario.',
    technologies: ['Illustrator', 'Aseprite'],
    github: '#',
    pagina:
      'https://www.behance.net/gallery/244683155/Shadow-Flip-Game-Visual-Asset-Design',
  },
  {
    title: 'Portfolio 3D Interactivo',
    description:
      'Sitio web interactivo que integra modelos 3D diseñados y desarrollados en Blender, incorporados en la interfaz para generar una experiencia visual dinámica e inmersiva. Todos los modelos fueron creados desde cero.',
    technologies: ['React', 'Blender', 'Tailwind', 'Supabase'],
    github: 'https://github.com/v4nt3/SevaFinal.git',
    pagina: 'https://seva-final.vercel.app/',
  },
  {
    title: 'Uso de API futurama',
    description:
      'Aplicación web desarrollada en React que consume la API pública de Futurama para visualizar personajes, permitiendo búsqueda por nombre y filtrado por especie mediante una interfaz basada en tarjetas dinámicas.',
    technologies: ['Node.js', 'PostgreSQL', 'Python'],
    github: 'https://github.com',
    pagina: 'https://futurama-seva.vercel.app/',
  },
  {
    title: 'PawPrint — Plataforma de servicios veterinarios a domicilio',
    description:
      'PawPrint es una aplicación móvil tipo marketplace enfocado en servicios veterinarios, donde establecimientos pueden vincularse para ofrecer atención a domicilio de belleza y salud, priorizando la seguridad y reducción de estrés en las mascotas.',
    technologies: ['ReactNative', 'Firebase', 'Android Studio'],
    github: '#',
    pagina: '#',
  },
  {
    title: 'Modelo de clasificación de Apnea mediante Deep Learning',
    description:
      'Desarrollo e implementación de un modelo de Deep Learning basado en arquitectura DenseNet para la clasificación automática de apnea del sueño.',
    technologies: ['Pytorch', 'NumPy', 'Neural Network'],
    github: 'https://github.com/SebasTS15/Sleep-Apnea-Detection-Model',
    pagina: '/docs/apneaDenseNet.pdf',
  },
]

function ProjectCard({
  project,
}: {
  project: Project
}) {
  return (
    <div
      className={`group relative flex flex-col rounded-xl border border-border bg-card overflow-hidden hover:border-primary/40`}
    >
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-display text-base font-semibold text-card-foreground group-hover:text-primary transition-colors duration-200">
            {project.title}
          </h3>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            aria-label={`Ver ${project.title} en GitHub`}
          >
            <FaGithub className="h-4 w-4" />
          </a>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed flex-1">{project.description}</p>

        <div className=" mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-md bg-muted-foreground/8 px-2 py-0.5 text-xs font-semibold text-secondary-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={project.pagina}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
        >
          Ver proyecto
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </div>
  )
}

export function ProjectsSection() {

  return (
    <section id="proyectos" className="py-20 sm:py-24 lg:py-32">
      <div
        className={`mx-auto max-w-6xl px-4 sm:px-6`}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px flex-1 max-w-[60px] bg-primary" />
          <span className="text-xs font-medium uppercase tracking-widest text-primary">
            Proyectos
          </span>
        </div>

        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4">
          Otros <span className="text-primary">Proyectos</span>
        </h2>
        <p className="text-muted-foreground text-sm max-w-xl mb-12 leading-relaxed">
          Una selección de proyectos académicos que reflejan mi aprendizaje y crecimiento como
          desarrolladora.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project}/>
          ))}
        </div>
      </div>
    </section>
  )
}