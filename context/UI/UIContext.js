import { createContext, useContext } from "react";
import { ToastAndroid } from "react-native";

const UIContext = createContext();

export const UIProvider = ({ children }) => {

    const contextShowToast = (message) => ToastAndroid.showWithGravity(message, ToastAndroid.SHORT, ToastAndroid.CENTER);

    const contextValue = {
        contextShowToast
    }

    return (
        <UIContext.Provider value={contextValue}>{children}</UIContext.Provider>
    )

}

export const useUI = () => useContext(UIContext);