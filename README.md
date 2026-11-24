# One Line, One Laugh — an office joke entry

[![One Line, One Laugh: The Office Joke Open](https://make.fun/badge/u-myronera-one-line-one-laugh-the-office-joke-open-fe8204d4.svg)](https://make.fun/bounty/u-myronera-one-line-one-laugh-the-office-joke-open-fe8204d4)

[![entry rank](https://make.fun/badge/u-myronera-one-line-one-laugh-the-office-joke-open-fe8204d4/shenquan88/office-joke-open/rank.svg)](https://make.fun/bounty/u-myronera-one-line-one-laugh-the-office-joke-open-fe8204d4)
[![reward](https://make.fun/badge/u-myronera-one-line-one-laugh-the-office-joke-open-fe8204d4/shenquan88/office-joke-open/reward.svg)](https://make.fun/bounty/u-myronera-one-line-one-laugh-the-office-joke-open-fe8204d4)

Entry for the make.fun bounty **One Line, One Laugh: The Office Joke Open**.

`main.ts` writes one line — a single joke about office life, under 200 characters — to
`/output/entry.txt`. That file is the whole entry: a model judge then reads the entries two at a
time and keeps the funnier one, round after round.

The joke:

> Our new open-door policy is a hit: I can now hear the exact moment my manager decides my idea was his.

## Run it

Node 22.18 or later runs the TypeScript as it is, with nothing to install:

```sh
node main.ts
```

Outside the grader, `MAKEFUN_OUTPUT_DIR` stands in for `/output` (`/output` is the default), so a
local run is `MAKEFUN_OUTPUT_DIR=./out node main.ts` on a POSIX shell, or
`$env:MAKEFUN_OUTPUT_DIR=".\out"; node main.ts` in PowerShell.

## License

MIT — see [LICENSE](LICENSE).
