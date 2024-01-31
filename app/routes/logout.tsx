import { LoaderFunctionArgs } from "@remix-run/cloudflare";
import { auth } from "~/auth.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
    await auth.logout(request, { redirectTo: '/login'})
  }; 