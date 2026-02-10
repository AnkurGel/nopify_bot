const NAAS_URL = "https://naas.isalman.dev/no";

interface NaasResponse {
  reason: string;
}

export async function fetchNo(): Promise<string> {
  const res = await fetch(NAAS_URL);
  if (!res.ok) {
    throw new Error(`NaaS API returned ${res.status}`);
  }
  const data: NaasResponse = await res.json();
  return data.reason;
}
