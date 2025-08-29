import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react'
import Button from '../ui/Button'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { submitContact } from '../../lib/api'

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10),
})
type ContactFormValues = z.infer<typeof contactSchema>

export default function ContactForm() {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  })

  async function onSubmit(values: ContactFormValues) {
    setLoading(true)
    setSuccess(null)
    try {
      await submitContact(values)
      setSuccess('Mensagem enviada! Retornaremos em breve.')
      reset()
    } catch (err) {
      setSuccess('Erro enviando. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button variant="primary">Fale com um consultor</Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40" />
        <Dialog.Content aria-describedby="contact-desc" className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-md p-6 max-w-md w-full">
          <Dialog.Title className="text-xl font-bold mb-2">Fale com um consultor</Dialog.Title>
          <Dialog.Description id="contact-desc" className="text-sm text-slate-600 mb-3">Envie sua mensagem e nossa equipe entrará em contato.</Dialog.Description>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <div>
              <input {...register('name')} placeholder="Nome" required className="w-full px-3 py-2 border rounded" />
              {errors.name && <div className="text-amber-700 text-sm">Nome é obrigatório (min 2 caracteres).</div>}
            </div>

            <div>
              <input {...register('email')} placeholder="Email" type="email" required className="w-full px-3 py-2 border rounded" />
              {errors.email && <div className="text-amber-700 text-sm">Email inválido.</div>}
            </div>

            <div>
              <input {...register('phone')} placeholder="Telefone" className="w-full px-3 py-2 border rounded" />
            </div>

            <div>
              <textarea {...register('message')} placeholder="Mensagem" className="w-full px-3 py-2 border rounded" />
              {errors.message && <div className="text-amber-700 text-sm">Mensagem muito curta (min 10 caracteres).</div>}
            </div>

            <div className="flex items-center gap-2">
              <button type="submit" disabled={loading} className="bg-blue-600 text-white px-4 py-2 rounded">
                {loading ? 'Enviando...' : 'Enviar'}
              </button>
              <Dialog.Close className="px-3 py-2">Fechar</Dialog.Close>
            </div>

            {success && <div className="text-sm text-slate-600">{success}</div>}
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
