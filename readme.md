## Repro steps:


```sh
pnpm install

pnpm test-wrangler
# now hit http://localhost:8787/

pnpm test-node
# see crash in console
```


## Two fixes:

### use @worker-tools/html-rewriter

See: https://github.com/IgorMinar/htmlrewriter-crash-repro/compare/fix


### use updated version of htmlrewriter

Depends on https://github.com/remorses/htmlrewriter/pull/5

See: https://github.com/IgorMinar/htmlrewriter-crash-repro/compare/fix2