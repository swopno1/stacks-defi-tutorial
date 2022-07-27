import { AppConfig, showConnect, UserSession } from '@stacks/connect'
import PageHeading from '../components/PageHeading'
import SecondaryButton from '../components/SecondaryButton'
import { appDetails } from '../lib/constants'

function Auth() {
  const appConfig = new AppConfig(['store_write'])
  const userSession = new UserSession({ appConfig })

  const handleLogIn = async () => {
    showConnect({
      appDetails,
      onFinish: () => window.location.reload(),
      userSession,
    })
  }

  return <SecondaryButton type="button">Connect Wallet</SecondaryButton>
}

export default function AdminPage() {
  return (
    <div className="m-auto flex max-w-4xl flex-col items-stretch gap-8">
      <PageHeading>Admin</PageHeading>

      <Auth />
    </div>
  )
}
