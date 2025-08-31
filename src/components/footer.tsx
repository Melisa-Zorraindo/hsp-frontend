export default function Footer() {
  return (
    <footer className="text-center mt-16 pt-8 border-t border-slate-200 text-slate-700">
      <div className="mb-4">
        <p className="text-sm font-medium">Melisa Zorraindo</p>
      </div>
      <div className="flex justify-center gap-6 text-sm">
        <a
          href="mailto:melisa.zorraindo@gmail.com"
          className="hover:text-blue-700 transition-colors duration-200"
        >
          Email
        </a>
        <a
          href="https://melisazor.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700 transition-colors duration-200"
        >
          Portfolio
        </a>
        <a
          href="https://github.com/Melisa-Zorraindo"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700 transition-colors duration-200"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/melisa-zorraindo/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700 transition-colors duration-200"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
