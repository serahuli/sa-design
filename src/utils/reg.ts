import { IPOMessage } from "../styles/index";
import { IPOAccount } from "../components";
import { IMobileInfo, AREACODE } from "../components/MobileInput/mobileInput";

export enum RegTypeEnum {
  EMAIL = 'email',
  MOBILE = 'mobile',
}

export const emailReg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/

export const regFuns:(type: RegTypeEnum, regInfo: unknown) => boolean = (type, regInfo) => {
  let flag:boolean = true

  switch (type) {
    case RegTypeEnum.EMAIL:
      if(!emailReg.test(regInfo as string)) {
        flag = false
      }
      break;
    case RegTypeEnum.MOBILE:
      let codeInfo = AREACODE[(regInfo as IMobileInfo).areaCode];
      if(!codeInfo.reg.test((regInfo as IMobileInfo).phoneNum)) {
        flag = false
      }
      break;
  }

  return flag
}

export const regAccount:(user: IPOAccount.IAddAccount | IPOAccount.IEditAccount, regMobile?: boolean) => Promise<void> = (user, regMobile) => {
  regMobile = regMobile ?? true
  return new Promise((res, rej) => {
    if(regMobile && user) {
      if(!(user as IPOAccount.IAddAccount).areaCode || !(user as IPOAccount.IAddAccount).mobile) {
        return rej(IPOMessage.error('手机号不能为空'))
      }
      if(!regFuns(RegTypeEnum.MOBILE, { phoneNum: (user as IPOAccount.IAddAccount).mobile, areaCode: (user as IPOAccount.IAddAccount).areaCode })) {
        return rej(IPOMessage.error('手机号格式有误， 请检查'))
      }
    }

    if(user.name1 && user.name1.length > 24) {
      return rej(IPOMessage.error('英文名不可超过24个字符'))
    }
    if(user.name2 && user.name2.length > 12) {
      return rej(IPOMessage.error('中文名不可超过12个字'))
    }
    if(user.email && !regFuns(RegTypeEnum.EMAIL, user.email)) {
      return rej(IPOMessage.error('邮件格式有误， 请检查'))
    }
    res()
  })
}

export const regMember:(user: IPOAccount.IAddAccount & { teams: string[]; ability: string[] }) => Promise<void> = (user) => {
  return new Promise((res, rej) => {
    regAccount(user)
      .then(() => {
        if(user.ability.length === 0) {
          return rej(IPOMessage.error('专业标签必填'))
        }
        if(user.teams.length === 0) {
          return rej(IPOMessage.error('团队标签必填'))
        }
        res()
      })
  })
}