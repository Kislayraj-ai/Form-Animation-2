let get = (select) => {
	const element = document.querySelector(select);
	if (element) return element;
	throw new Error(`Please check ${select} selector`);
};

const signIn = get('.signin');
const signUp = get('.login');
const logDiv = get('.logDiv');
const signDiv = get('.signDiv');
const image1 = get('.img1');
const image2 = get('.img2');

signIn.addEventListener('click', () => {
	signDiv.style.top = '0%';
	image2.style.top = '0%';
	logDiv.style.top = '-100%';
	image1.style.top = '100%';
});
signUp.addEventListener('click', () => {
	signDiv.style.top = '-100%';
	image2.style.top = '100%';
	logDiv.style.top = '0%';
	image1.style.top = '0%';
});
