import { render, screen, waitFor } from '@testing-library/react'
import { vi, describe, test, expect } from 'vitest'
import userEvent from '@testing-library/user-event'
import CepForm from '../components/Hero/CepForm'
import * as api from '../lib/api'

describe('CepForm', () => {
  test('valida CEP e mostra disponível', async () => {
  vi.spyOn(api, 'checkCepAvailability').mockResolvedValue({ available: true, message: 'Disponível na sua região!' })

    render(<CepForm />)
    await userEvent.type(screen.getByPlaceholderText(/cep/i), '10000000')
    await userEvent.click(screen.getByRole('button', { name: /verificar/i }))

    await waitFor(() => expect(screen.getByRole('status')).toHaveTextContent(/disponível/i))
  })
})
