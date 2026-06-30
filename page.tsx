export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="mb-2 text-sm font-medium uppercase tracking-wide text-teal-700">
        Fase 1 — Estructura inicial
      </p>
      <h1 className="mb-4 max-w-xl text-3xl font-bold text-slate-900">
        Pulsera Inteligente de Emergencia
      </h1>
      <p className="mb-8 max-w-md text-lg text-slate-600">
        Porque en una emergencia, cada segundo cuenta.
      </p>
      <p className="max-w-lg text-sm text-slate-500">
        La landing y dashboard se desarrollarán en las siguientes fases.
        Prueba la vista de emergencia{" "}
        <a
          href="/e/00000000-0000-4000-a000-000000000001"
          className="font-semibold text-teal-700 underline"
        >
          aquí
        </a>{" "}
        (PIN demo: 1234).
      </p>
    </main>
  );
}
