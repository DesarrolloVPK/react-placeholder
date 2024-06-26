import * as React from 'react';
export type Props = {
    rows: number;
    color: string;
    lineSpacing?: string | number;
    widths?: number[];
    style?: React.CSSProperties;
    className?: string;
};
declare const TextBlock: React.FC<Props>;
export default TextBlock;
