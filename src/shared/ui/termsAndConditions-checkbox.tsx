import Button from "@shared/ui/button";
import Checkbox from "@shared/ui/checkbox";

interface ITermsAndConditionsCheckbox {
      value: boolean;
      onClick: () => void;
      errorMessage?: string;
}
function TermsAndConditionsCheckbox({ value, onClick, errorMessage }: ITermsAndConditionsCheckbox) {
      return (
            <div className="w-fit h-fit flex flex-col gap-1.5">
                  <span className="flex items-center space-x-2 cursor-pointer w-full">
                        <Checkbox id="terms" checked={value} onCheckedChange={onClick} />

                        <label
                              htmlFor="terms"
                              className="text-base leading-none  cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70 w-full"
                        >
                              I agree to NexLuma&apos;s
                              <Button type="button" variant="link" size="sm" className="px-1 h-0" asChild>
                                    <a href={""} className=" break-all">
                                          Terms, and Conditions
                                    </a>
                              </Button>
                              .
                        </label>
                  </span>

                  {errorMessage && <p className="text-sm scale-98 text-destructive">{errorMessage}</p>}
            </div>
      );
}

export default TermsAndConditionsCheckbox;
