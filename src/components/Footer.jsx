function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} FlowReset. All rights reserved.</p>

        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
