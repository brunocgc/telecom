import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ContactForm from '../components/Contact/ContactForm'
import * as api from '../lib/api'
import { vi, describe, test, expect } from 'vitest'

describe('ContactForm', () => {
  test('envia formulário com sucesso', async () => {
    vi.spyOn(api, 'submitContact').mockResolvedValue({ ok: true })

    render(<ContactForm />)

    // abrir modal
    await userEvent.click(screen.getByRole('button', { name: /fale com um consultor/i }))

    await userEvent.type(screen.getByPlaceholderText(/nome/i), 'Teste')
    await userEvent.type(screen.getByPlaceholderText(/email/i), 'a@a.com')
    await userEvent.type(screen.getByPlaceholderText(/mensagem/i), 'Mensagem de teste maior que 10 chars')
    await userEvent.click(screen.getByRole('button', { name: /enviar/i }))

    await waitFor(() => expect(screen.getByText(/mensagem enviada/i)).toBeInTheDocument())
  })
})
