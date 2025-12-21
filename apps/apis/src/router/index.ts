import type { RouterClient } from "@orpc/server";
import { createPlanet, findPlanet, listPlanet } from "./planet";

export const router = {
  planet: {
    list: listPlanet,
    find: findPlanet,
    create: createPlanet,
  },
};


export type ORPCRouter = RouterClient<typeof router>;

