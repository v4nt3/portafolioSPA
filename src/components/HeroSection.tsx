import { ArrowDown , Mail, Eye } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export function HeroSection() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-transparent" />

      <div
        className={`relative z-10 mx-auto max-w-xl w-full px-4 sm:px-6 py-15 sm:py-18 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="flex justify-center">
          <div className="mx-auto max-w-3xl w-full px-4 sm:px-6 py-20 sm:py-24 text-center">
            <div className="font-sans inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs text-muted-foreground mb-6 sm:mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              Disponible para practicas profesionales
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              Gissel Vanessa
              <br />
              <span className="text-primary">Quitian Rojas</span>
            </h1>

            <p className="font-sans mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Frontend Developer
              <span className="text-foreground/40"> | </span>
              Web & Mobile Applications
            </p>

            <p className="font-sans mt-3 sm:mt-4 text-sm text-muted-foreground leading-relaxed max-w-lg mx-auto">
              Estudiante de 9 semestre con doble programa en Ingenieria de Sistemas e Ingenieria
              Multimedia, combinando desarrollo web moderno con creatividad multimedia para
              construir experiencias digitales unicas.
            </p>

            <div className=" mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4">
              <a
                href="#proyectos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all duration-200 hover:shadow-lg hover:shadow-primary/20"
              >
                <Eye className="h-4 w-4" />
                Ver proyectos
              </a>
              <a
                href="#contacto"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-medium text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
              >
                <Mail className="h-4 w-4" />
                Contactar
              </a>
              <a
                href="https://github.com/v4nt3"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-200"
              >
                <FaGithub  className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2">
          <a
            href="#sobre-mi"
            className="inline-flex animate-bounce text-muted-foreground hover:text-primary transition-colors"
            aria-label="Ir a sobre mi"
          >
            <ArrowDown className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}