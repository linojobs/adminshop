import { useContext } from 'react';
import { Context } from '../components/Provider';

export const useDND = ():IDNDState => {
    const context = useContext(Context);
    return context;
};