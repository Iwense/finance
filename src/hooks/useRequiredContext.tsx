import { Context, useContext } from "react";
// import { useHistory } from "react-router";
// import { BASE_URL } from "@constants";

export function useRequiredContext<T>(context: Context<T>) {
  //   const history = useHistory();
  const ctx = useContext(context);

  //   if (!ctx) {
  //     history.push(`${BASE_URL}/error`);
  //     const error = new Error("cant find context");
  //     console.error(error, context);
  //     throw error;
  //   }

  return ctx as NonNullable<T>;
}
