import type { ORPCRouter, router } from '@repo/api/src/router'
import { createORPCClient } from '@orpc/client'
import { RPCLink } from '@orpc/client/fetch'
import { createTanstackQueryUtils } from '@orpc/tanstack-query'

const link = new RPCLink({
  url: 'http://127.0.0.1:3000',
  headers: () => {
    return {
      Authorization: 'Bearer token',
    }
  },
})

export const orpc: ORPCRouter = createORPCClient(link)

export const query = createTanstackQueryUtils(orpc)
