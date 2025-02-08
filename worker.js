import { repro } from './index.js';

export default {
  fetch: async () => {
    return new Response(await repro());
    //return new Response('done');
  }
}