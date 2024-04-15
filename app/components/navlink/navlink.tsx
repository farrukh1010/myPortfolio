import Link from "next/link";

type NavLinkProps = {
  href: string;
  title: string;
};

const NavLink = ({ href, title }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-white sm:text-xl rounded md:p-0 hover:text-yellow-400 hover:underline underline-offset-8"
    >
      {title}
    </Link>
  );
};

export default NavLink;