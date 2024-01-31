import { LoaderFunctionArgs, json } from "@remix-run/cloudflare";
import { auth } from "~/auth.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
    return await auth.isAuthenticated(request, {
        failureRedirect: "/login",
    });
};