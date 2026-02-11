const NAAS_URL = "https://naas.isalman.dev/no";
const FALLBACK_URL =
  "https://raw.githubusercontent.com/hotheadhacker/no-as-a-service/refs/heads/main/reasons.json";

interface NaasResponse {
  reason: string;
}

let fallbackReasons: string[] | null = null;

async function getFallbackReason(): Promise<string> {
  if (!fallbackReasons) {
    const res = await fetch(FALLBACK_URL);
    if (!res.ok) {
      throw new Error(`Fallback reasons fetch failed: ${res.status}`);
    }
    fallbackReasons = await res.json();
  }
  return fallbackReasons![Math.floor(Math.random() * fallbackReasons!.length)];
}

export async function fetchNo(): Promise<string> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 2000);
    const res = await fetch(NAAS_URL, { signal: controller.signal });
    clearTimeout(timeout);
    if (!res.ok) {
      throw new Error(`NaaS API returned ${res.status}`);
    }
    const data: NaasResponse = await res.json();
    return data.reason;
  } catch {
    return getFallbackReason();
  }
}
