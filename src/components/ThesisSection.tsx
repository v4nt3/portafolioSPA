import { BookOpen, Hand, Eye, Mic, Brain, ArrowDown } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const techStack = ['Python', 'OpenCV', 'MediaPipe', 'Pytorch', 'FastAPI', 'Flutter']

interface Objective {
  icon: LucideIcon
  text: string
}

const objectives: Objective[] = [
  {
    icon: Eye,
    text: 'Captura de gestos de manos y expresiones faciales mediante visión computacional.',
  },
  {
    icon: Brain,
    text: 'Algoritmos de IA para interpretar y traducir la lengua de señas americana.',
  },
  {
    icon: Mic,
    text: 'Síntesis de voz para convertir los gestos reconocidos en mensajes audibles.',
  },
]

function SystemDiagram() {
  return (
    <div className="mx-auto max-w-md">
      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
        <h3 className="text-sm font-semibold text-center mb-6">Arquitectura del Sistema</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/10 border border-primary/20">
            <div className="h-9 w-9 rounded-lg bg-primary/20 flex items-center justify-center">
              <Eye className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium">Captura de Video</p>
              <p className="text-xs text-muted-foreground">Entrada de palabras en tiempo real</p>
            </div>
          </div>
          <div className="flex justify-center">
            <ArrowDown className="h-4 w-4 text-muted-foreground/50" />
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/10 border border-accent/20">
            <div className="h-9 w-9 rounded-lg bg-accent/20 flex items-center justify-center">
              <Brain className="h-4 w-4 text-accent" />
            </div>
            <div>
              <p className="text-sm font-medium">Modelo de Clasificación</p>
              <p className="text-xs text-muted-foreground">Procesamiento con PyTorch</p>
            </div>
          </div>
          <div className="flex justify-center">
            <ArrowDown className="h-4 w-4 text-muted-foreground/50" />
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/10 border border-primary/20">
            <div className="h-9 w-9 rounded-lg bg-primary/20 flex items-center justify-center">
              <Mic className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium">Síntesis de Voz</p>
              <p className="text-xs text-muted-foreground">Conversión a audio</p>
            </div>
          </div>
          <div className="flex justify-center">
            <ArrowDown className="h-4 w-4 text-muted-foreground/50" />
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/10 border border-primary/20">
            <div className="h-9 w-9 rounded-lg bg-primary/20 flex items-center justify-center">
              <Mic className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium">Audio emitido en zoom</p>
              <p className="text-xs text-muted-foreground">Zoom / Meet / Teams</p>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground">Precisión promedio del modelo</p>
          <p className="text-sm font-semibold text-primary">~70%</p>
        </div>
      </div>
    </div>
  )
}

export function ThesisSection() {

  return (
    <section className="py-24 sm:py-32 bg-secondary/30">
      <div
        className={`mx-auto max-w-6xl px-6`}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px flex-1 max-w-[60px] bg-primary" />
          <span className="text-xs font-medium uppercase tracking-widest text-primary">
            Proyecto de Tesis
          </span>
        </div>

        <div className="relative overflow-hidden rounded-2xl border-2 border-primary/20 bg-card shadow-xl shadow-primary/5">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 p-6 sm:p-8 lg:p-12">
            <div className="flex items-center justify-center order-2 lg:order-1">
              <SystemDiagram />
            </div>
            <div className="flex flex-col justify-center order-1 lg:order-2">
              <div className="flex items-start gap-3 mb-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Hand className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-card-foreground leading-tight">
                    Traductor de Lengua de Señas Americana a Voz
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Visión Computacional e Inteligencia Artificial — Universidad de San Buenaventura
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed text-sm font-medium">
                Sistema basado en visión computacional e inteligencia artificial para traducir señas
                manuales y expresiones faciales de la Lengua de Señas Americana a voz, mejorando la
                comunicación de personas con discapacidad para hablar en plataformas de reuniones en
                línea.
              </p>

              <div className="mt-6 space-y-3">
                {objectives.map((obj) => (
                  <div key={obj.text} className="flex items-start gap-3">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 mt-0.5">
                      <obj.icon className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <p className=" text-xs text-muted-foreground leading-relaxed">{obj.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-md border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://signbridge-frontend.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-card-foreground hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
                >
                  <BookOpen className="h-4 w-4" />
                  Ver Página Web
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}