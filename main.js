fetch('data.json')
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		//console.log(data);
		display_info(data.basics);
	});
function display_info(info) {
	//Card View
	let card = document.createElement('div');
	card.classList.add('card');

	let bodyElement = document.querySelector('#root');

	//heading
	let heading = document.createElement('h2');
	heading.textContent = info.name;
	card.append(heading);
	bodyElement.append(card);

	let line = document.createElement('hr');
	card.append(line);

	let a = document.createElement('h2');
	a.textContent = info.role;
	card.append(a);

	let email = document.createElement('a');
	email.href = 'mailto:' + info.email;
	email.textContent = info.email;
	card.append(email);

	let br = document.createElement('br');
	card.append(br);
	let br1 = document.createElement('br');
	card.append(br1);

	let mobile = document.createElement('a');
	mobile.href = 'tel:' + info.mobile;
	mobile.textContent = info.mobile;
	card.append(mobile);

	let br2 = document.createElement('br');
	card.append(br2);

	let br3 = document.createElement('br');
	card.append(br3);

	var bu1 = document.createElement("button");
	bu1.href="www.google.com";
	bu1.textContent = "View Profile";
	bu1.classList.add('btn');
	card.append('bu1');
}
