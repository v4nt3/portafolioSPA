type AboutProps = {};

const About = ({}: AboutProps) => {
  return (
    <section className="min-h-screen px-6 py-16 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">About</h1>
        <p className="text-gray-600 max-w-2xl">
          Descripción de la sección
        </p>
      </div>

      {/* Content */}
      <div className="space-y-8">
        // contenido aquí
      </div>
    </section>
  );
};

export default About;