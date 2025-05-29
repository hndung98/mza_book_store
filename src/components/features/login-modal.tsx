import { Input, Modal, useSnackbar } from "zmp-ui";

import { useAccessTokenStore, useLoginModalStore } from "@/stores/auth-store";
import { useState } from "react";

const API_PREFIX =
  import.meta.env.VITE_API_PREFIX || "http://127.0.0.1:3000/api/native";
const LOGIN_API_URL = `${API_PREFIX}/auth/login`;
export default function LoginModal() {
  const { isOpen, closeModal } = useLoginModalStore();
  const setAccessToken = useAccessTokenStore((state) => state.setAccessToken);

  const { openSnackbar } = useSnackbar();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onLoginClick = () => {
    // TODO: call login api and set token
    // setAccessToken("your_access_token_here");
    if (username && password) {
      fetch(LOGIN_API_URL, {
        method: "POST",
        body: JSON.stringify({ email: username, password: password }),
      })
        .then((res) => {
          if (res.status === 401) {
            openSnackbar({
              icon: true,
              text: "Invalid credentials",
              action: {
                text: "OK",
                close: true,
              },
              type: "countdown",
            });
          }
          return res;
        })
        .then((res) => res.json())
        .then((data) => {
          console.log({ data });
          if (data.status === "success") {
            const token = data.token as string;
            console.log({ token });
            setAccessToken(token);
            openSnackbar({
              icon: true,
              text: `Logged in`,
              action: {
                text: "OK",
                close: true,
              },
              type: "countdown",
            });
            closeModal();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <>
      <Modal
        actions={[
          {
            text: "Cancel",
            onClick() {
              closeModal();
            },
          },
          {
            close: true,
            highLight: true,
            text: "Login",
            onClick() {
              onLoginClick();
            },
          },
        ]}
        title="Login"
        visible={isOpen}
      >
        <div className="p-4">
          <Input
            label="Username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value as string);
            }}
          />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value as string);
            }}
          />
        </div>
      </Modal>
    </>
  );
}
