import type { fieldVariants } from "#/components/ui";
import type { useForm } from "@tanstack/react-form";
import type { VariantProps } from "class-variance-authority";
import type { ComponentType } from "react";

export type FormApi = ReturnType<typeof useForm>;

export type FormFieldApi = Parameters<
  Parameters<FormApi["Field"]>[0]["children"]
>[0];

export type FormFieldRenderProps = {
  field: FormFieldApi;
  isInvalid: boolean;
};

export type FormFieldProps<T extends object> = {
  formApi: any;
  name: string;
  label?: string;
  variant?: FileVariant;
  control: ComponentType<FormFieldRenderProps & T>;
} & T;

export type FileVariant = VariantProps<typeof fieldVariants>;
