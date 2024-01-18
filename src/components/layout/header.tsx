import { NavLinks } from "@/components/nav-links";

const Header = () => {
  return (
    <header className="w-full bg-red-100 p-2">
      <div className="w-fit cursor-pointer rounded-lg p-1.5 transition-colors hover:bg-red-200">
        header
      </div>
      <NavLinks />
    </header>
  );
};

export { Header };
