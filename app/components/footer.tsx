const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full md:w-1/2 lg:w-1/4">
            <h2 className="text-2xl font-bold mb-4">Company Name</h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4">
            <h3 className="text-lg font-semibold mb-2">Useful Links</h3>
            <ul className="text-gray-400">
              <li className="mb-1">Home</li>
              <li className="mb-1">About</li>
              <li className="mb-1">Services</li>
              <li className="mb-1">Contact</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p className="text-gray-400">123 Street Name, City, Country</p>
            <p className="text-gray-400">info@example.com</p>
            <p className="text-gray-400">+1 234 567 890</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
