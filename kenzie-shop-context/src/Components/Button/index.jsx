import { Button } from "./style"

export const ButtonComponent = ({children, cb}) => {
    return <Button onClick={cb}>{children}</Button>
}