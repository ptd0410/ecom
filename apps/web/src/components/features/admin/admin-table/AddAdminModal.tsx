import {
  Form,
  FormField,
  FormInput,
  FormInputGroup,
} from "#/components/custom";
import { Button, DialogTitle, Field, FieldGroup, Modal } from "#/components/ui";
import { userSchema, type CreateAdminDTO } from "#/dto";
import { useCreateAdmin, useIsVisible } from "#/hooks";
import { useForm } from "@tanstack/react-form";

export type AddAdminModalProps = {};

export function AddAdminModal({}: AddAdminModalProps) {
  const { isVisible, node } = useIsVisible();
  const { mutate } = useCreateAdmin();
  const form = useForm({
    validators: {
      onSubmit: userSchema,
    },
    onSubmit: ({ value }) => mutate(value as CreateAdminDTO),
  });

  return (
    <Modal
      type="createAdmin"
      trigger={<Button className="self-start">Thêm Admin</Button>}
    >
      <DialogTitle>Thêm Admin</DialogTitle>
      <Form form={form}>
        <FieldGroup className="gap-4">
          <FormField
            label="Name*"
            control={FormInput}
            formApi={form}
            name="name"
            placeholder="Enter admin name"
          />

          <FormField
            label="Uid*"
            control={FormInput}
            formApi={form}
            name="uid"
            placeholder="Enter admin uid"
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

          <Field>
            <Button className="w-full" type="submit">
              Thêm
            </Button>
          </Field>
        </FieldGroup>
      </Form>
    </Modal>
  );
}
