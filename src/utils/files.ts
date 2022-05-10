/**
 * 下载文件的方法 
 * @param baseurl 基本域名与端口
 * @param id 文件id
 * @returns 
 */
export const downloadFileUrl: (baseurl: string, id: string) => string = (baseurl, id) => {
	return `${baseurl}/files/${id}/download`;
};

/**
 * 获取文件预览的方法
 * @param baseurl 基本域名与端口
 * @param id 文件id
 * @returns 
 */
export const getFileUrl : (baseurl: string, id: string) => string = (baseurl, id) => {
	return `${baseurl}/files/${id}/get`;
};