function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black text-white z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold">FlowReset</div>

        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#how" className="hover:text-white">How it works</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
        </div>

        <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition">
          Start Free Trial
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
