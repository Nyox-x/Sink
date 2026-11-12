import { QuerySchema } from '#shared/schemas/query'

export default eventHandler(async (event) => {
  const query = await getValidatedQuery(event, QuerySchema.parse)

  const logs = await useWAE(event, buildEventsQuery(query, event)) as { data: Record<string, string>[] }
  return events2logs(logs?.data || [])
})
