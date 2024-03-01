import Link from "next/link";

const Footer = () => {
  const navLinks = [
    {
      title: "Privacy Policy",
      href: "/privacy-policy",
    },
    {
      title: "Terms & Conditions",
      href: "/terms-conditions",
    },
    {
      title: "Cookie Policy",
      href: "/cookie-policy",
    },
  ];

  return (
    <footer className="bg-transparent py-10 ">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
          <nav className="flex gap-x-4">
            {navLinks.map((link, index) => (
              <Link
                href={link.href}
                key={index}
                className="text-muted-foreground"
              >
                {link.title}
              </Link>
            ))}
          </nav>
          <p className="text-muted-foreground">
            Copyright © {2022} 100K STAKE. All rights reserved
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-4">
          <div className="flex gap-x-4">
            <span className="text-muted-foreground">Email:</span>
            support@100kstake.com
          </div>
          <div className="flex gap-x-4">
            <span className="text-muted-foreground">Address:</span>
            70 City Road,Southbank Melbourne, VIC 3006 Australi
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
