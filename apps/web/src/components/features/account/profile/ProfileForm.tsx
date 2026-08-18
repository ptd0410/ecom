import {
  CustomAvatar,
  CustomSelect,
  FormCheckboxes,
  FormField,
  FormInput,
} from "#/components/custom";
import { Button, Field, FieldGroup, FieldLabel } from "#/components/ui";
import { useForm } from "@tanstack/react-form";
import {
  dayItems,
  genderItems,
  monthItems,
  yearItems,
} from "./profile-form.const";
import { useEditProfile, useProfile } from "#/modules";
import { pick } from "#/lib";

export type ProfileFormProps = {};

export function ProfileForm({}: ProfileFormProps) {
  const { data } = useProfile();
  const editProfile = useEditProfile();

  const form = useForm({
    defaultValues: data,
    validators: {
      // onSubmit: userSchema,
    },
    onSubmit: ({ value }) => editProfile.mutate(pick(value, ["name", "bio"])),
  });

  return (
    <form
      className="w-full max-w-3xl flex flex-row-reverse gap-5"
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <div className="w-fit flex flex-col gap-5 items-center">
        <CustomAvatar fallback="DH" size={"6xl"} />
        <Button>Chọn ảnh</Button>
      </div>
      <FieldGroup className="gap-4">
        {/* <FormField
          variant={{ orientation: "horizontal" }}
          label="Uid"
          name="uid"
          control={FormInput}
          formApi={form}
        /> */}
        <FormField
          variant={{ orientation: "horizontal" }}
          label="Name"
          name="name"
          control={FormInput}
          formApi={form}
        />

        <FormField
          variant={{ orientation: "horizontal" }}
          label="Email"
          name="email"
          control={FormInput}
          formApi={form}
        />

        <FormField
          variant={{ orientation: "horizontal" }}
          label="Phone"
          name="phone"
          control={FormInput}
          formApi={form}
        />

        <FormField
          variant={{ orientation: "horizontal" }}
          label="Gender"
          name="gender"
          control={FormCheckboxes}
          formApi={form}
          items={genderItems}
        />

        <Field orientation={"horizontal"}>
          <FieldLabel>Birthday</FieldLabel>
          <Field orientation={"horizontal"}>
            <CustomSelect items={dayItems} />
            <CustomSelect items={monthItems} />
            <CustomSelect items={yearItems} />
          </Field>
        </Field>

        <Field>
          <Button type="submit">Lưu</Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
