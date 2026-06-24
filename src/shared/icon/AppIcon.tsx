import { TIconType } from "./types/app-icon.types";

interface IIcon {
      name: TIconType;
      className?: React.InputHTMLAttributes<HTMLElement>["className"];
}

function AppIcon({ name, className }: IIcon) {
      const RenderIcon = () => {
            switch (name) {
                  case "email":
                        return <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.75"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-border-hover"
                              >
                                    <rect x="2" y="4" width="20" height="16" rx="2" />
                                    <path d="M2 7l10 7 10-7" />
                              </svg>;

                  case "password":
                        return <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.75"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-border-hover"
                              >
                                    <rect x="3" y="11" width="18" height="11" rx="2" />
                                    <path d="M7 11V7a5 5 0 0110 0v4" />
                              </svg>;
                  default:
                        alert("Please select icon");
                        break;
            }
      };

      return <RenderIcon />;
}

export default AppIcon;
