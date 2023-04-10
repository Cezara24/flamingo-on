import React from "react"
import styles from "./Button.module.css"

export default function Button(props) {
    const text = props.text
    const type = props.type

    return (
        <div>
            <button
                className={`
                    ${styles.Button}
                    ${type === "withoutBorder" && styles.button__withoutBorder}
                    ${type === "empty" && styles.button__empty}
                    ${type === "full" && styles.button__full}
                `}
            >
            {text}
            </button>
        </div>
    )
}