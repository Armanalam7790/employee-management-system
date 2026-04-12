import { createContext, useEffect, useState }  from "react";
import { storage } from "../utils/LocalStorage";

export let Auth = createContext();

export let AuthContectProvider = ({ children }) => {
  const [registerAdmins, setregisterAdmins] = useState([]);
  const [loggedInAdmins, setloggedInAdmins] = useState(null);
  console.log("reg adims",registerAdmins);
  console.log('log admins', loggedInAdmins);
  
  
  useEffect(()=>{
 let data = storage.get('reg admins')
 setregisterAdmins(data)

 let ldata = storage.get('reg admins')
 setloggedInAdmins(ldata)

  },[])
  return (
    <Auth.Provider
      value={{
        registerAdmins,
        setregisterAdmins,
        loggedInAdmins,
        setloggedInAdmins,
      }}
    >
      {children}
    </Auth.Provider>
  );
};
