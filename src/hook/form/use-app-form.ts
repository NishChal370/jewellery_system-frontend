import { FieldValues, Path, RegisterOptions, UseFormProps, UseFormReturn, useForm, } from "react-hook-form";

interface UseCustomFormProps<TValueType extends FieldValues> extends UseFormProps<TValueType> {
      trim?: boolean;
}

function useAppForm<TValueType extends FieldValues>({ trim = true, ...props }: UseCustomFormProps<TValueType> = {}) {
      const methods = useForm<TValueType>({ reValidateMode: "onChange", ...props });

      const customRegister = (name: Path<TValueType>, registerOptions?: RegisterOptions<TValueType, Path<TValueType>>) => {
            if (trim && registerOptions) {
                  const customSetValueAs = (value: unknown) =>
                        typeof value === "string" ? value.trim() : value;

                  return methods.register(name, { ...registerOptions, setValueAs: customSetValueAs });
            }

            return methods.register(name, registerOptions);
      };

      return { ...methods, register: customRegister } as UseFormReturn<TValueType>;
}

export default useAppForm;
