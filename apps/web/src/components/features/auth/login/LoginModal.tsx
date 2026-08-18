import { Modal } from "#/components/ui";
import { LoginForm } from "./LoginForm";

export type LoginModalProps = {};

export function LoginModal({}: LoginModalProps) {
  return (
    <Modal type="login">
      <LoginForm />
    </Modal>
  );
}
