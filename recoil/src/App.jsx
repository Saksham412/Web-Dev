import { RecoilRoot, useRecoilValue } from "recoil"
import { jobAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector } from "./atom"

function App() {
  return <RecoilRoot>
    <MainApp/>
  </RecoilRoot>
}

function MainApp() {

  const networkCount = useRecoilValue(networkAtom);
  const jobsCount = useRecoilValue(jobAtom)
  const messagingCount = useRecoilValue(messagingAtom)
  const notificationCount = useRecoilValue(notificationAtom)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector)

  return (
    <>
      <button>Home</button>
      <button>My network ({(networkCount>99) ? "99+" : networkCount})</button>
      <button>Jobs ({jobsCount})</button>

      <button>Messaging ({messagingCount})</button>
      <button>Notifications ({notificationCount})</button>
      <button>Me ({totalNotificationCount})</button>
    </>
  )
}

export default App
