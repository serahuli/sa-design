/**
 * @description: 获取随机头像颜色值
 * @param {*} string
 * @return {*}
 */
 export const _getRandomAvatarColor: (id?: string) => string = (id) => {
	const colorsArr = [
		'#FF9A1F',
		'#FFAB00',
		'#FF5630',
		'#DE350A',
		'#00B9D9',
		'#00A3C0',
		'#4AC6C6',
		'#2684FF',
		'#35B37F',
		'#6555C1',
	];
	const length = colorsArr.length;
	let randomnum = 0;
	if (id && parseInt(id, 16) > 0) {
		randomnum = Math.floor(parseInt(id, 16) % length);
	}
	const color: string = colorsArr[randomnum];
	return color;
};

interface IGetAvatarName {
  name1: string;
  name2: string;
  mobile: string;
}
 
export const getAvatarName: (props: IGetAvatarName) => string = ({ name1, name2, mobile }) => {
	return name2 ? name2.substring(0, 1) : name1 ? name1.substring(0, 1) : mobile.substring(0, 1);
};
