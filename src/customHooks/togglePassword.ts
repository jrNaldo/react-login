import { useState } from "react";

export default function usePassWord() {
    const [password, setPassword] = useState<boolean>(false)

    const tooglePassword = () => {
        setPassword(prev => !prev)
    }

    return {
        password,
        tooglePassword
    }
}