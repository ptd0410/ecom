import {
  Form,
  FormField,
  FormInput,
  FormInputGroup,
} from "#/components/custom";
import { Button, Field, FieldGroup, ModalTrigger } from "#/components/ui";
import { useForm } from "@tanstack/react-form";
import { useIsVisible } from "../../../../hooks/useIsVisible";
import { registerSchema } from "#/dto";
import { useRegister } from "#/hooks";
import { pick } from "#/lib";

export type RegisterFormProps = {};

export function RegisterForm({}: RegisterFormProps) {
  const { isVisible, node } = useIsVisible();
  const { mutate } = useRegister();

  const form = useForm({
    validators: {
      onSubmit: registerSchema,
    },
    onSubmit: ({ value }) => mutate(pick(value, ["uid", "password"])),
  });

  return (
    <Form form={form}>
      <FieldGroup className="gap-4">
        <FormField
          label="Uid*"
          control={FormInput}
          formApi={form}
          name="uid"
          placeholder="Enter your user id"
        />

        <FormField
          label="Password*"
          control={FormInputGroup}
          formApi={form}
          name="password"
          type={isVisible ? "text" : "password"}
          placeholder="••••••••••••••••"
          children={node}
        />

        <FormField
          label="Confirm Password*"
          control={FormInputGroup}
          formApi={form}
          name="confirmPassword"
          type={isVisible ? "text" : "password"}
          placeholder="••••••••••••••••"
          children={node}
        />

        <div className="flex items-center gap-2">
          <p>Đã có tài khoản? </p>
          <ModalTrigger type="login" size={"none"}>
            Đăng nhập
          </ModalTrigger>
        </div>

        <Field>
          <Button className="w-full" type="submit">
            Register
          </Button>
        </Field>
      </FieldGroup>
    </Form>
  );
}
