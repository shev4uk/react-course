import { useContext } from 'react';
import {LanguageContext} from '../providers/languageContext'

export default function useLanguage() {
    return useContext(LanguageContext);
}
