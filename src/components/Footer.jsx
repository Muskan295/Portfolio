import React from "react";

function Footer() {
  return (
    <footer className="pt-12 pb-8">
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px w-full bg-white/10 mb-8"></div>
        
        <div className="flex flex-col items-center gap-2">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} Muskan. All rights reserved.
          </p>
          
          <p className="text-gray-500 text-xs text-center">
            Made with passion and dedication
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;