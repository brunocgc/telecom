export async function checkCepAvailability(cep: string): Promise<{ available: boolean; message?: string }> {
  // Mock: CEPs starting with 1 are available, others not. Simula latência.
  await new Promise((r) => setTimeout(r, 700))
  if (cep.startsWith('1')) return { available: true, message: 'Disponível na sua região!' }
  return { available: false, message: 'Ainda não disponível — deixe seu contato.' }
}

export async function submitContact(payload: any) {
  // Mock envio
  await new Promise((r) => setTimeout(r, 600))
  return { ok: true }
}
