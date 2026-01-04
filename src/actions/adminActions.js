"use server";

import { cookies } from "next/headers";

export const logoutAdmin = async () => {
  const cookiesStore = await cookies();
  cookiesStore.delete("token");
  return {
    type: "LOGOUT_ADMIN",
  };
};
