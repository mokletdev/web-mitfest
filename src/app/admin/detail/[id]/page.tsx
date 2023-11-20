import React from "react";
import { findRegistrationById } from "@/utils/queries/registration.query";
import RegistrationDetail from "./components/RegistrationDetail";

export default async function detailRegistran({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;
  const registration = await findRegistrationById(id);

  return (
    <React.Fragment>
      <RegistrationDetail registration={registration} />
    </React.Fragment>
  );
}

export const revalidate = 0;
