const serve = (port: number, filename: string, dir: string) => {
	console.log('serving traffic on port', port);
	console.log('saving/fetching cells from', filename);
	console.log('the file is in', dir);
};

export default serve;