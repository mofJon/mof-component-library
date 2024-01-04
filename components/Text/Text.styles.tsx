import { cva } from "class-variance-authority";
import { TextVars } from './Text.types'

// Text Base and Variant Styles
export const text = cva("text", {
    variants: {
        intent: {
            primary: [
                "text-white-800"
            ],
            secondary: [
                "text-gray-800",
            ],
        },
        // would possibly prefer these were defined in config, but for demonstration purposes 
        size: {
            h1: "font-bold leading-tight text-4xl uppercase",
            h2: "font-bold leading-tight text-3xl",
            h3: "font-bold leading-tight text-2xl",
            h4: "font-medium leading-tight text-xl",
            h5: "font-medium leading-tight text-lg",
            h6: "font-medium leading-tight text-md",
            button: "font-medium leading-tight text-sm",
            copy: "leading-normal text-sm lh-2"
        },
    },
    compoundVariants: [{ intent: "primary", size: "copy", class: "text-white-600" }],
    defaultVariants: {
        intent: "primary",
        size: "copy",
    },
});



// Text Props
export const textVars: TextVars = (intent, size, classes) => {

    const baseStyles = `
        ${classes ? classes : ''}
    `
    
    return {
        className: text({ 
            intent, 
            size, 
            className: baseStyles
        }),
    }
};


