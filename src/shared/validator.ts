import validator from 'validator/index'

export default {
    checkEmail(email:any){    
        return validator.isEmail(email)   
    },
    checkSenhaSize(senha:any){
        return validator.isLength(senha,{min:8})
    },
    checkIgual(um:any,dois:any){
        return validator.equals(um,dois)
    }
}