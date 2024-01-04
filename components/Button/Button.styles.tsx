import { cva } from "class-variance-authority";
import { ButtonVars } from './Button.types'

// Button Base and Variant Styles
export const button = cva("button", {
    variants: {
        intent: {
            primary: [
                "bg-blue-500",
                "text-white",
                "border-transparent",
                "hover:bg-blue-600",
            ],
            secondary: [
                "bg-green-300",
                "text-gray-800",
                "border-green-800",
                "hover:bg-green-400",
            ],
        },
        size: {
            sm: ["text-sm", "py-1", "px-2"],
            md: ["text-base", "py-2", "px-4"],
            full: ["py-2", "w-full"]
        },
    },
    compoundVariants: [{ intent: "primary", size: ["md", "full"], class: "uppercase" }],
    defaultVariants: {
        intent: "primary",
        size: "md",
    },
});


// Button Props
export const buttonVars: ButtonVars = (intent, size, classes) => {

    const baseStyles = `
        rounded mr-auto
         ${classes ? classes : ''}
    `
    
    return {
        className: button({ 
            intent, 
            size, 
            className: baseStyles
        }),
    }
};


