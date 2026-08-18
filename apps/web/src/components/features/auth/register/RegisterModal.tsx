import { Modal } from "#/components/ui";
import { RegisterForm } from "./RegisterForm";

export type RegisterModalProps = {};

export function RegisterModal({}: RegisterModalProps) {
  return (
    <Modal type="register">
      <RegisterForm />
    </Modal>
  );
}
