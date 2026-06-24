import { ReactNode } from "react";
import { FieldValues, FormProvider, UseFormReturn } from "react-hook-form";

interface IFormProps<T extends FieldValues> {
      methods: UseFormReturn<T>;
      onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
      className?: React.ComponentProps<"form">["className"];
      children: ReactNode;
}

function Form<T extends FieldValues>({ methods, onSubmit, children, className = "" }: IFormProps<T>) {
      return (
            <FormProvider {...methods}>
                  <form className={className} onSubmit={onSubmit}>
                        {children}
                  </form>
            </FormProvider>
      );
}

export default Form;
