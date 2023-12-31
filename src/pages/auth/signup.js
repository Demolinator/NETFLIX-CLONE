import OverlayMessage from "@/components/OverlayMessage";
import Form from "@/components/auth/form";
import { useRouter } from "next/router";
import { useState } from "react";

export default function SignUp() {
  const [overlayMessage, setOverlayMessage] = useState(null);
  const router = useRouter();

  const onSubmit = async (email, password, firstName, lastName) => {
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify({ email, password, firstName, lastName }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const responseData = await response.json();

      if (response.ok) {
        return router.push("/login");
        setOverlayMessage(responseData.message);
      } else {
        setOverlayMessage(`${responseData.message}`);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const closeOverlayMessage = () => {
    setOverlayMessage(null);
  };

  const getProgressBarColor = () => {
    if (overlayMessage && overlayMessage.toLowerCase().includes("failed")){
        return "red"
    }
    return "green"
  }

  return (
    <div>
      {overlayMessage && (
        <OverlayMessage
          message={overlayMessage}
          onClose={closeOverlayMessage}
          progressBarColor={getProgressBarColor()}
        />
      )}
      <Form signin={false} onFormSubmit={onSubmit} />
    </div>
  );
}
