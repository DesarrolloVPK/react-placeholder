import * as React from 'react';
import * as placeholders from './placeholders';
type CommonProps = {
    children?: React.ReactNode;
    /** pass `true` when the content is ready and `false` when it's loading */
    ready: boolean;
    /** delay in millis to wait when passing from ready to NOT ready */
    delay?: number;
    /** if true, the placeholder will never be rendered again once ready becomes true, even if it becomes false again */
    firstLaunchOnly?: boolean;
    className?: string;
    style?: React.CSSProperties;
};
type PlaceholderProps = CommonProps & {
    color?: string;
    rows?: number;
    showLoadingAnimation?: boolean;
    customPlaceholder?: undefined;
};
type CustomPlaceholderProps = CommonProps & {
    /** pass any renderable content to be used as placeholder instead of the built-in ones */
    customPlaceholder?: React.ReactElement<{
        [k: string]: any;
    }> | null;
    type?: undefined;
    rows?: undefined;
    color?: undefined;
    showLoadingAnimation?: boolean;
};
type MediaPlaceholderProps = PlaceholderProps & Omit<React.ComponentProps<typeof placeholders.media>, 'color' | 'rows' | 'children'> & {
    type: 'media';
};
type RectPlaceholderProps = PlaceholderProps & Omit<React.ComponentProps<typeof placeholders.rect>, 'children'> & {
    type: 'rect';
};
type RoundPlaceholderProps = PlaceholderProps & Omit<React.ComponentProps<typeof placeholders.round>, 'color' | 'children'> & {
    type: 'round';
};
type TextPlaceholderProps = PlaceholderProps & Omit<React.ComponentProps<typeof placeholders.text>, 'color' | 'rows' | 'children'> & {
    type: 'text';
};
type TextRowPlaceholderProps = PlaceholderProps & Omit<React.ComponentProps<typeof placeholders.textRow>, 'color' | 'children'> & {
    type: 'textRow';
};
export type Props = MediaPlaceholderProps | RectPlaceholderProps | RoundPlaceholderProps | TextRowPlaceholderProps | TextPlaceholderProps | CustomPlaceholderProps;
declare const ReactPlaceholder: React.FC<Props>;
export default ReactPlaceholder;
