import { useContext } from "react"
import { AuthContext } from "../context/authProvider"

const useHook = () => {
    return useContext(AuthContext);
}

export default useHook;