
import { createContext, useState, ReactNode, useContext, Dispatch, SetStateAction } from 'react';




interface WireFrameContextInterface {
    darkMode: boolean;
    setDarkMode: Dispatch<SetStateAction<boolean>>;
}

interface WireFrameContextProviderProps {
    children: ReactNode;
}
//initializing variables
const defaultValue: WireFrameContextInterface = {
    darkMode: true,
    setDarkMode: () => { },
}


export const WireFrameContext = createContext<WireFrameContextInterface>(defaultValue);

export const WireFrameContextProvider: React.FC<WireFrameContextProviderProps> = ({ children }) => {
    const [
        darkMode,
        setDarkMode,
       
    ] = useState<boolean>(true);


    return (
        <WireFrameContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </WireFrameContext.Provider>
    )
}

export const useWireFrameContext = () => {
    return useContext(WireFrameContext);
}





