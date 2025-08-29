import { useState } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { checkCepAvailability } from '../../lib/api'

const cepSchema = z.object({ cep: z.string().min(8).max(8).regex(/^[0-9]{8}$/) })
type CepFormValues = z.infer<typeof cepSchema>

export default function CepForm() {
  const [result, setResult] = useState<{ available: boolean; message?: string } | null>(null)
  const [loading, setLoading] = useState(false)

  const { register, handleSubmit, formState: { errors }, reset } = useForm<CepFormValues>({
    resolver: zodResolver(cepSchema),
  })

  async function onSubmit(values: CepFormValues) {
    setLoading(true)
    setResult(null)
    try {
      const res = await checkCepAvailability(values.cep)
      setResult(res)
      if (res.available) reset()
    } catch (err) {
      setResult({ available: false, message: 'Erro verificando disponibilidade. Tente novamente.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <div className="flex gap-2">
        <input
          aria-label="CEP"
          {...register('cep')}
          placeholder="Digite seu CEP"
          className="flex-1 px-4 py-3 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 bg-gradient-to-r from-primary-800 to-primary-900 text-white rounded-md disabled:opacity-60"
        >
          {loading ? 'Verificando...' : 'Verificar'}
        </button>
      </div>

      <div>
        {errors.cep && <div className="text-amber-700">CEP inválido. Informe 8 dígitos numéricos.</div>}
        {result && (
          <div className={`mt-2 ${result.available ? 'text-green-600' : 'text-amber-700'}`} role="status">
            {result.message}
          </div>
        )}
      </div>
    </form>
  )
}
