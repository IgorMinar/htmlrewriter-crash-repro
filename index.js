import { HTMLRewriter } from 'htmlrewriter';

export async function repro() {
	console.log('reprooooooo\n\n\n');

	const rewrittenResponse = new HTMLRewriter()
		.on('body', {
			element(element) {
        console.log('appending');
				element.append('<p><p>👉<p></p></p></p>', { html: true });
			},
		})
		.transform(new Response('<html><meta charset="UTF-8"><body></body>'));

	const text = await rewrittenResponse.text();
  console.log('xxx', text);
  return text;
}