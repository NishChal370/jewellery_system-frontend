import { CheckIcon, ChevronDownIcon, ChevronsUpDown, MapPin, Menu, SearchIcon, X } from "lucide-react";
import { TIconType } from "./types/app-icon.types";

interface IIcon {
      name: TIconType;
      className?: React.InputHTMLAttributes<HTMLElement>["className"];
}

function AppIcon({ name, className }: IIcon) {
      const RenderIcon = () => {
            switch (name) {
                  case "menu":
                        return <Menu className={className} />;

                  case "close":
                        return <X className={className} />;

                  case "accordion":
                        return <ChevronDownIcon className={className} aria-hidden="true" />;

                  case "check":
                        return <CheckIcon className={className} />;

                  case "search":
                        return <SearchIcon className={className} />;

                  case "selectInput":
                        return <ChevronsUpDown className={className} />;

                  case "navIcon":
                        return <ChevronDownIcon className={className} />;

                  case "location":
                        return <MapPin size={14} className={className} />;

                  default:
                        alert("Please select icon");
                        break;
            }
      };

      return <RenderIcon />;
}

export default AppIcon;
