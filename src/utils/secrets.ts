import CryptoJS from 'crypto-js';

const keyStr: string = 'paretoolipo666';
const ivStr: string = 'ipo888';

const key: CryptoJS.lib.WordArray = CryptoJS.enc.Utf8.parse(keyStr);
const iv: CryptoJS.lib.WordArray = CryptoJS.enc.Utf8.parse(ivStr);

// 加密
export const encrypted: (str: string) => string = (str) => {
	const en: CryptoJS.lib.CipherParams = CryptoJS.RC4.encrypt(str, key, { iv });

	// 转换为字符串
	const encrypt = en.toString();

	return encrypt;
};

// 解密
export const decrypted: (str: string) => string = (str) => {
	const de = CryptoJS.RC4.decrypt(str, key, { iv });

	// 转换为 utf8 字符串
	const decrypt = CryptoJS.enc.Utf8.stringify(de);

	return decrypt;
};
