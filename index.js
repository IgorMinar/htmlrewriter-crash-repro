import { HTMLRewriter } from 'htmlrewriter';

export async function repro() {
	console.log('reprooooooo\n\n\n');

	const webReadableInput2 = new ReadableStream({
		start(controller) {
			controller.enqueue('<html><meta charset="UTF-8"><body></body>');
			controller.close();
		},
	}).pipeThrough(new TextEncoderStream());

	const rewrittenResponse = new HTMLRewriter()
		.on('body', {
			element(element) {
        console.log('appending');
				element.append('<p><p>👉<p></p></p></p>', { html: true });
			},
		})
		.transform(new Response(webReadableInput2));

	const text = await rewrittenResponse.text();
  console.log('xxx', text);
	// const rewrittenBody = rewrittenResponse.body;
	// const nodeReadableOuput = stream.Readable.fromWeb(rewrittenBody as streamWeb.ReadableStream);

	// return nodeReadableOuput;
  return text;
}