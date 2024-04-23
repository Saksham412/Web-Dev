import { atom, selector } from "recoil";
import axios from 'axios';

export const notifications = atom({
    key: "networkAtom",
    default: selector({
        key:"networkAtomSelector",
        get: async () => {
            const res = await axios.get("https://sum-server.100xdevs.com/notifications")
            return res.data
        }
    })
})

export const totalNotificationSelector = selector({
    key:"totalNotificationSelector",
    get: ({get}) => {
        const networkAtomCount = get(networkAtom)
        const messagingAtomCount = get(messagingAtom)
        const notificationAtomCount = get(notificationAtom)
        const jobAtomCount = get(jobAtom)

        return networkAtomCount + messagingAtomCount + notificationAtomCount + jobAtomCount
    }
})