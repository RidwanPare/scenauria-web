export function Header({ title }: { title: string }) {
  return (
    <header className="h-14 border-b bg-white flex items-center px-6">
      <h1 className="text-lg font-semibold text-slate-800">{title}</h1>
    </header>
  );
}
