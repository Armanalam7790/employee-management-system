import { useNavigate } from "react-router"
import { useAuthContext } from "../../../shared/hook/useContextData"
import { useForm } from "react-hook-form"
import { nanoid } from "nanoid"

 export let useAuth = () => {
    let { registerAdmins, setloggedInAdmins } = useAuthContext()
    const navigate = useNavigate()

    let {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({ mode: "onChange" });



    const handleLoginFormSubmit = (data) => {
        let admin = registerAdmins.find((elem) => elem.email === data.email && elem.password === data.password)

        if (!admin) {
            alert("login fail")
            return
        }
        setloggedInAdmins(admin)
        alert('admin login')
        reset()

    }




    const handleRegisterFormSubmit = (data) => {

        let arr = [...(registerAdmins || []), { ...data, id: nanoid() }];
        setregisterAdmins(arr)
        storage.set('reg admins', arr)
        alert('admin registerd')

        reset()

    }



    return {
      registerAdmins,
      setloggedInAdmins,
      register,
      errors,
      handleSubmit,
      handleRegisterFormSubmit,
      handleLoginFormSubmit,
      navigate
    };

}