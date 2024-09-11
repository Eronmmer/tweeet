export const isStringEmpty = (str: string) => {
	const regex = /\S/;
	return !regex.test(str);
};
