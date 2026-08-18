import {
  Field,
  FieldError,
  FieldLabel,
  Input,
  InputGroup,
  InputGroupInput,
  type InputProps,
} from "#/components/ui";
import { cn } from "#/lib";
import type { PropsWithChildren } from "react";
import type {
  FormApi,
  FormFieldProps,
  FormFieldRenderProps,
} from "./custom-form.type";

export function Form({ form, children }: { form: any } & PropsWithChildren) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      {children}
    </form>
  );
}

export function FormField<T extends object>({
  formApi,
  name,
  label,
  control: Component,
  variant,
  ...props
}: FormFieldProps<T>) {
  const form = formApi as FormApi;
  return (
    <form.Field name={name}>
      {(field) => {
        const isInvalid =
          field.state.meta.isTouched && !field.state.meta.isValid;
        return (
          <div className="flex flex-col gap-2">
            <Field {...variant} className={cn()} orientation={"horizontal"}>
              {label && <FieldLabel htmlFor={field.name}>{label}</FieldLabel>}

              <Component
                field={field}
                isInvalid={isInvalid}
                {...(props as T)}
              />
            </Field>
            {isInvalid && <FieldError errors={field.state.meta.errors} />}
          </div>
        );
      }}
    </form.Field>
  );
}

export function FormInput({
  field,
  isInvalid,
  ...props
}: FormFieldRenderProps & InputProps) {
  return (
    <Input
      id={field.name}
      name={field.name}
      value={(field.state.value as string) || ""}
      onBlur={field.handleBlur}
      onChange={(e) => field.handleChange(e.target.value)}
      aria-invalid={isInvalid}
      autoComplete="off"
      {...props}
    />
  );
}

type FormInputGroupProps = FormFieldRenderProps &
  Omit<InputProps, "value" | "onChange" | "onBlur" | "name" | "id"> & {
    children?: React.ReactNode;
  };

export function FormInputGroup({
  field,
  isInvalid,
  children,
  ...props
}: FormInputGroupProps) {
  return (
    <InputGroup>
      <InputGroupInput
        id={field.name}
        name={field.name}
        value={field.state.value as string}
        onBlur={field.handleBlur}
        onChange={(e) => field.handleChange(e.target.value)}
        aria-invalid={isInvalid}
        autoComplete="off"
        {...props}
      />

      {children}
    </InputGroup>
  );
}
