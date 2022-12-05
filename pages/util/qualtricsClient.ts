let qualtricsClient: QualtricsApiClient | undefined

interface QualtricsApiClient {
  code: string
}

export function initClient(): QualtricsApiClient {
  // TODO: or expired
  if (!qualtricsClient) {
    // TODO: API Request to login using env vars
    qualtricsClient = { code: '' }
  }
  return qualtricsClient
}

export async function getSurvery(surveyId: string): Promise<any> {
  initClient()
  // TODO: build api request, attach code from client to auth headers
  const response = await fetch('http://example.com/api/endpoint')
  return response
}
