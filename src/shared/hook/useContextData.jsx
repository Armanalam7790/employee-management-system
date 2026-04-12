import { useContext } from "react";
import { Auth } from "../../context/AuthContect";

 export let useAuthContext = ()=>useContext(Auth)