import { userSchema } from "#/dto";
import { useForm } from "@tanstack/react-form";
import { Button, Field, FieldGroup, ModalTrigger } from "#/components/ui";
import {
  Form,
  FormCheckbox,
  FormField,
  FormInput,
  FormInputGroup,
} from "#/components/custom";
import { useIsVisible } from "../../../../hooks/useIsVisible";
import { pick } from "#/lib";
import { useLogin } from "#/hooks";

export type LoginFormProps = {};

export function LoginForm({}: LoginFormProps) {
  const { isVisible, node } = useIsVisible();
  const { mutate } = useLogin();

  const form = useForm({
    validators: {
      onSubmit: userSchema,
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
          placeholder="Password"
          children={node}
        />

        {/* Remember Me and Forgot Password */}
        <FormField
          name="rememberMe"
          formApi={form}
          control={FormCheckbox}
          children={"Remember Me"}
        />

        <div className="flex items-center gap-2">
          <p>Chưa có tài khoản? </p>
          <ModalTrigger type="register" size={"none"}>
            Đăng ký
          </ModalTrigger>
        </div>

        <Field>
          <Button className="w-full" type="submit">
            Sign in
          </Button>
        </Field>
      </FieldGroup>
    </Form>
  );
}
