"use client";

import { Controller } from "react-hook-form";
import Button from "@shared/ui/button";
import FloatingInput from "@shared/ui/floating-input";
import FloatingPasswordInput from "@shared/ui/floating-password-input";
import TermsAndConditionsCheckbox from "@shared/ui/termsAndConditions-checkbox";
import Form from "@shared/ui/form";
import useSignupForm from "../hooks/use-signup-form";
import NEPAL_LOCATIONS from "@shared/constants/inputOptions/nepalLocation";
import FloatingCombobox from "@shared/ui/floating-combobox";


function SignupForm() {
      const { methods, formSubmitHandler } = useSignupForm();

      const {
            register,
            control,
            formState: { errors },
      } = methods;

      return (
            <Form className="flex flex-col gap-6 pt-2" methods={methods} onSubmit={formSubmitHandler}>
                  <FloatingInput
                        label="Email address"
                        id="email"
                        type="text"
                        {...register("email")}
                        errorMessage={errors.email?.message}
                  />

                  <FloatingPasswordInput
                        label="Password"
                        id="password"
                        {...register("password")}
                        errorMessage={errors.password?.message}
                  />

                  <Controller
                        name="location"
                        control={control}
                        render={({ field }) => (
                              <FloatingCombobox
                                    label="Location"
                                    value={field.value}
                                    onChangeHandler={field.onChange}
                                    errorMessage={errors.location?.message}
                                    options={NEPAL_LOCATIONS}
                              />
                        )}
                  />

                  <Controller
                        name="agreeTermAndCondition"
                        control={control}
                        render={({ field }) => (
                              <TermsAndConditionsCheckbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                    errorMessage={errors.agreeTermAndCondition?.message}
                              />
                        )}
                  />

                  <p className="py-4 text-muted-foreground text-sm">
                        This site is protected by reCAPTCHA Enterprise and the Google
                        <Button type="button" variant="link" size="sm" className="px-1 h-0" asChild>
                              <a href={""}>Privacy Policy</a>
                        </Button>
                        and
                        <Button type="button" variant="link" size="sm" className="px-1 h-0" asChild>
                              <a href={""}>Terms of Service</a>
                        </Button>
                        apply.
                  </p>

                  <Button type="submit" size="lg" variant="default">
                        Create account
                  </Button>
            </Form>
      );
}

export default SignupForm;
