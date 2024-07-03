import { useContext, createContext, useState, ReactNode } from "react";
import { sectionDetails } from '../utils/staticData';

export interface ContextProviderProps {
    children: ReactNode;
}

export interface Section {
    backgroundColor: string;
    title: string;
    mainColor: string; //permutate this for background colors
    sectionIndex: string;
}

interface RawMaterialsContextProps {
    currentSection: Section;
    setCurrentSection: React.Dispatch<React.SetStateAction<Section>>;
    sections: Section[]
}

const RawMaterialsContext = createContext<RawMaterialsContextProps>({
    currentSection: {
        backgroundColor: '',
        title: '',
        mainColor: '',
        sectionIndex: ''
    },
    setCurrentSection: () => { },
    sections: sectionDetails
})

export const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
    const [currentSection, setCurrentSection] = useState<Section>(
        {
            backgroundColor: '',
            title: '',
            mainColor: '',
            sectionIndex: ''
        }
    );
    const sections =  sectionDetails;
    const RawMaterialsContextValue: RawMaterialsContextProps = {
        currentSection,
        setCurrentSection,
        sections
    };

    return (
        <RawMaterialsContext.Provider value={RawMaterialsContextValue}>
        { children }
        </RawMaterialsContext.Provider>

    );

};

export function useRawMaterialsContext(){
    return useContext(RawMaterialsContext);
}