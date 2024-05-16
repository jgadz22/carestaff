import {
  adminHeaderLinks,
  staffHeaderLinks,
  userHeaderLinks,
} from "@/constant";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = ({ userPosition }: any) => {
  const pathname = usePathname();

  const links =
    userPosition === "Admin"
      ? adminHeaderLinks
      : userPosition === "Staff"
      ? staffHeaderLinks
      : userHeaderLinks;

  return (
    <>
      <ul className="flex md:flex-between w-full flex-col items-start gap-5 md:flex-row">
        {links.map((link) => {
          const isActive = pathname === link.route;

          return (
            <li
              key={link.route}
              className={`${
                isActive && "text-primary-500"
              } flex-center p-medium-16 sm:p-medium-12 md:p-medium-14 whitespace-nowrap`}
            >
              <Link href={link.route}>{link.label}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default NavItems;
