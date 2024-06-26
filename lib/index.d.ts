import './index.css';
import { FC } from 'react';
interface FuzzySearchInputProps {
    placeholder?: string;
    styles?: {};
    value: any;
    onChange: (e: any) => void;
}
declare const FuzzySearchInput: FC<FuzzySearchInputProps>;
export default FuzzySearchInput;
