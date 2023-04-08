import {  toast } from 'react-toastify';

export const toaster = (type='error', msg) => {
    console.log(type);
    switch (type) {
        case 'warn':         
        return toast.warn(msg)
        case 'succ':         
        return toast.success(msg)
        case 'err':         
        return toast.error(msg)
    
        default:
            break;
    }
}