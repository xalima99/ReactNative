import styles from './styles';

export const getStyle = (disabled) => {
    const defaultStylesCont = [styles.button]

    if(disabled){
        defaultStylesCont.push(styles.disabled)
    }

    return defaultStylesCont
}

export const getText = (isSelected, disabled) => {
    const defaultText = [styles.text]

    if(isSelected && !disabled){
        defaultText.push(styles.selectText)
    }

    return defaultText
}

export const getCurrentSelected = (currText, label, current, value, isOn) => {
    const defaultCurr = [styles.itemText]

    if(currText && label === current || !currText && value === isOn){
        defaultCurr.push(styles.itemTextSelected)
    }

    return defaultCurr
}