import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'
import { signIn, useSession } from 'next-auth/react'
import { ArrowRight } from 'phosphor-react'
import { Container, Header } from '../styles'
import { ConnectBox, ConnectItem } from './styles'

export default function Register() {
  const session = useSession()

  console.log('session', session)
  //   async function handleRegister(data: RegisterFormData) {

  //   }

  return (
    <Container>
      <Header>
        <Heading as="strong">Conecte sua Agenda!</Heading>
        <Text>
          Conecte o seu calendário para verificar automaticamente as horas
          ocupadas e os novos eventos à medida em que são agendados.
        </Text>

        <MultiStep size={4} currentStep={2} />
      </Header>

      <ConnectBox>
        <ConnectItem>
          <Text>Google Calendar</Text>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => signIn('google')}
          >
            Connectar
            <ArrowRight />
          </Button>
        </ConnectItem>
        <Button type="submit">
          Próximo passo
          <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  )
}
