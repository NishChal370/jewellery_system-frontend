import { useState } from "react";
import { cn } from "@shared/lib/utils";
import Button from "./button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "./command";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import AppIcon from "@shared/icon/AppIcon";

interface IFloatingComboboxOption {
      value: string;
      label: string;
}

interface IFloatingCombobox {
      label: string;
      value?: string;
      onChangeHandler: (value: string) => void;
      errorMessage?: string;
      options: readonly IFloatingComboboxOption[];
}

export default function FloatingCombobox({
      label,
      value,
      options,
      onChangeHandler,
      errorMessage,
}: IFloatingCombobox) {
      const [open, setOpen] = useState(false);

      const changeHandler = (currentValue: string) => {
            onChangeHandler(currentValue === value ? "" : currentValue);

            setOpen(false);
      };

      return (
            <div className="relative w-full h-fit">
                  <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                              <div className="peer relative w-full h-fit flex flex-col gap-1.5">
                                    <Button
                                          id={label}
                                          type="button"
                                          variant="combobox"
                                          aria-invalid={!!errorMessage}
                                          className={cn(
                                                "peer text-base h-15 rounded-md l-3 px-3 pt-4 placeholder-transparent justify-start ",
                                                "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive aria-invalid:focus-visible:border-ring",
                                                open
                                                      ? "border-input border-2 aria-invalid:border-destructive"
                                                      : ""
                                          )}
                                    >
                                          {options.find((option) => option.value === value)?.label}
                                    </Button>

                                    <AppIcon
                                          name="selectInput"
                                          className="absolute pointer-events-none h-5 w-5 shrink-0 opacity-70 right-4 top-5.5 -translate-y-0"
                                    />

                                    <label
                                          htmlFor={"props.id"}
                                          data-slot="label"
                                          className={cn(
                                                "flex items-center gap-2 text-sm font-medium !text-muted-foreground  select-none pointer-events-none absolute left-3.5 top-2 origin-[0] scale-90 transform  transition-all",
                                                "group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 ",
                                                "peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
                                                !value
                                                      ? "!text-muted-foreground text-body left-3 top-5 scale-90 font-medium"
                                                      : "",
                                                open ? "top-2 left-3.5 font-medium !text-foreground" : ""
                                          )}
                                    >
                                          {label}
                                    </label>

                                    {errorMessage && (
                                          <p className="text-sm scale-98 text-destructive">{errorMessage}</p>
                                    )}
                              </div>
                        </PopoverTrigger>
                        <PopoverContent className="w-full p-0">
                              <Command>
                                    <CommandInput placeholder={`Search ${label.toLocaleLowerCase()}...`} />
                                    <CommandList>
                                          <CommandEmpty>No {label.toLocaleLowerCase()} found.</CommandEmpty>
                                          <CommandGroup>
                                                {options.map((framework) => (
                                                      <CommandItem
                                                            key={framework.value}
                                                            value={framework.value}
                                                            onSelect={changeHandler}
                                                      >
                                                            <AppIcon
                                                                  name="check"
                                                                  className={cn(
                                                                        "mr-2 h-4 w-4",
                                                                        value === framework.value
                                                                              ? "opacity-100"
                                                                              : "opacity-0"
                                                                  )}
                                                            />
                                                            {framework.label}
                                                      </CommandItem>
                                                ))}
                                          </CommandGroup>
                                    </CommandList>
                              </Command>
                        </PopoverContent>
                  </Popover>
            </div>
      );
}
