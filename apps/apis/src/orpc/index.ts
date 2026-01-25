import type { Context } from "./context";
import { os } from "@orpc/server";

// Explicitly typed as any because the inferred type references internal @orpc/server types
// that cannot be named/exported portably.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const orpc: any = os.$context<Context>();
