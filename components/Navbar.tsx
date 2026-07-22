export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-6">

      <h2 className="text-2xl font-bold">
        🌍 Wanderlust AI
      </h2>

      <div className="flex gap-8">

        <a href="#">Home</a>

        <a href="#features">Features</a>

        <a href="#">About</a>

        <a href="#">Contact</a>

      </div>

    </nav>
  );
}