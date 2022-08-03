export const createLoadObserver = (handler: () => void) => {
	let waiting = 0;

	const onload = (el) => {
		waiting++;
		console.log(waiting);
		el.addEventListener('load', () => {
			waiting--;
			console.log('waiting ' + waiting);
			if (waiting === 0) {
				handler();
			}
		});
	};

	return onload;
};
