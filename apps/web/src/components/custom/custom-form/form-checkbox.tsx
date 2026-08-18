import type { CheckboxProps } from "#/components/ui";
import { Checkbox, Field, FieldLabel } from "#/components/ui";
import type { ReactNode } from "react";
import type { FormFieldRenderProps } from "./custom-form.type";

// form checkboxes
export type FormCheckboxItem = {
  value: string;
  label: ReactNode;
};

export type FormCheckboxesProps = FormFieldRenderProps &
  Omit<CheckboxProps, "checked" | "onCheckedChange" | "name" | "id"> & {
    items: FormCheckboxItem[];
  };

export function FormCheckboxes({
  field,
  isInvalid,
  items,
  ...props
}: FormCheckboxesProps) {
  const value = field.state.value as string | undefined;

  return (
    <Field orientation={"horizontal"}>
      {items.map((item) => {
        const checked = value === item.value;

        return (
          <div key={item.value} className="flex items-center gap-2">
            <Checkbox
              {...props}
              id={`${field.name}-${item.value}`}
              name={field.name}
              checked={checked}
              aria-invalid={isInvalid}
              onCheckedChange={(checked) => {
                if (checked) {
                  field.handleChange(item.value);
                }
              }}
            />

            <FieldLabel htmlFor={`${field.name}-${item.value}`}>
              {item.label}
            </FieldLabel>
          </div>
        );
      })}
    </Field>
  );
}

// form checkbox
type FormCheckboxProps = Omit<
  CheckboxProps,
  "checked" | "onCheckedChange" | "name" | "id"
> & {
  children?: React.ReactNode;
};

export function FormCheckbox({
  field,
  isInvalid,
  children,
  ...props
}: FormFieldRenderProps & FormCheckboxProps) {
  return (
    <Field orientation="horizontal" className="flex items-center gap-2">
      <Checkbox
        id={field.name}
        name={field.name}
        checked={Boolean(field.state.value)}
        onCheckedChange={(checked) => field.handleChange(Boolean(checked))}
        aria-invalid={isInvalid}
        {...props}
      />

      {children && (
        <FieldLabel htmlFor={field.name} className="text-muted-foreground">
          {children}
        </FieldLabel>
      )}
    </Field>
  );
}
