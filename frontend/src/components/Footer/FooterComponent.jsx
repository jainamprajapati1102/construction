export const FooterComponent = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Copyright */}
        <div className="text-sm">
          © {new Date().getFullYear()} ConstructCRM. All rights reserved.
        </div>

        {/* Middle: Links */}
        <div className="flex gap-4 text-sm">
          <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
          <a href="/terms" className="hover:text-white transition">Terms of Service</a>
          <a href="/support" className="hover:text-white transition">Support</a>
        </div>

        {/* Right: Version or Branding */}
        <div className="text-sm">
          v1.0.0 • Made with 💙 in India
        </div>
      </div>
    </footer>
  );
};
