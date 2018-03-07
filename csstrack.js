const listSelectors = require('list-selectors');
const argv = require('minimist')(process.argv.slice(2));
const queryString = require('querystring');
const fs = require('fs');

function main() {
	listSelectors(argv._, {include: 'selectors'}, data => buildStyleSheet(argv.f, data));
}

function buildStyleSheet(file, data) {

	data.selectors.forEach(selector => {
		let rule = `${selector}{background:url('${pixelPath}?selector=${queryString.escape(selector)}')}`;

		fs.appendFile(file, rule, err => {
			if (err) throw err;
		});
	});
		
	console.log('Tracking stylesheet built!');
}

main();