export const checkValidity = (value, rules, name) => {
    const errorsBag = new Array()
    let isValid = true
    if (!rules) {
        return true
    }
    if (rules.required) {
        isValid = value.trim() !== '' && isValid
        if (!isValid) {
            errorsBag.push(`* ${name} is required`)
        }
    }
    if (rules.minLength) {
        isValid = value.length >= rules.minLength && isValid
        if (!isValid) {
            errorsBag.push(`* Min length for ${name} is ${rules.minLength}`)
        }
    }
    if (rules.maxlength) {
        isValid = value.length <= rules.maxlength && isValid
        if (!isValid) {
            errorsBag.push(`* Max length for ${name} is ${rules.maxlength}`)
        }
    }
    if (rules.isEmail) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
        isValid = pattern.test(value) && isValid
        if (!isValid) {
            errorsBag.push(`* Please Enter a Valid ${name} `)
        }
    }
    if (rules.isNumeric) {
        const pattern = /^\d+$/
        isValid = pattern.test(value) && isValid
    }
    if (rules.url) {
        const urlPattern = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/
        isValid = urlPattern.test(value) && isValid
        if (!isValid) {
            errorsBag.push(`* Please Enter a Valid ${name} `)
        }
    }
    if (rules.phoneNumber) {
        const phonePattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
        isValid = phonePattern.test(value) && isValid
        if (!isValid) {
            errorsBag.push(`* Please Enter a Valid ${name} `)
        }
    }
    if (rules.isArray) {
        isValid = Array.isArray(value) && value.length !== 0 && isValid
        if (!isValid) {
            errorsBag.push(`* Please Add Atleast One ${name} `)
        }
    }
    if (isValid === true) {
        return true
    } else {
        return errorsBag
    }
}

export const updateObject = (oldObject , updatedProperties) =>{
    return{
        ...oldObject,
        ...updatedProperties
    }
}
const generateString = (length) =>{
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
    }
export const generateKey = (pre) => {
    return `${ pre }_${ new Date().getTime() }_${generateString(10)}`;
}
