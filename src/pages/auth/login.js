import OverlayMessage from "@/components/OverlayMessage";
import Form from "@/components/auth/form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

export default function SignIn() {
    const [overlayMessage, setOverlayMessage] = useState(null);
    const router = useRouter();
  const onSubmit = async (email, password) => {
    const data = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    if (data.ok) {
        router.push("/profile");
        return;
    }
    setOverlayMessage("Incorrect email or password");
  };

  const closeOverlayMessage = () => {
    setOverlayMessage(null);
  };

  return (
    <div>
      {overlayMessage && (
        <OverlayMessage message={overlayMessage} onClose={closeOverlayMessage}/>
      )}
    <Form signin={true} onFormSubmit={onSubmit} />;
    </div>
  );
}
