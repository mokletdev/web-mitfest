"use client";

import Verify from "./components/Verify";
import InvalidToken from "./components/InvalidToken";
import Loading from "./components/Loading";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ResetPassword from "./components/ResetPassword";

export default function Token() {
  const searchParams = useSearchParams();

  const code = searchParams.get("code");
  if (code == null) return <InvalidToken />;
  const [tokenState, setTokenState] = useState(<Loading />);

  useEffect(() => {
    const validate = setTimeout(async () => {
      const data = await fetch("/auth/token/validate", {
        method: "POST",
        body: JSON.stringify({ token: code }),
      }).then((res) => res.json());

      if (data.status != 200) setTokenState(<InvalidToken />);
      else if (data.type == "verify") {
        setTokenState(<Verify />);
      } else if (data.type == "forgot_password") {
        setTokenState(<ResetPassword />);
      }
    }, 2000);

    return () => clearTimeout(validate);
  }, []);

  return tokenState;
}
