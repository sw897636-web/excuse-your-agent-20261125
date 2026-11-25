# The Excuse Your Agent Gives You

[![make.fun](https://make.fun/badge/u-kevin-the-excuse-your-agent-gives-you-c1861261.svg)](https://make.fun/c/u-kevin-the-excuse-your-agent-gives-you-c1861261)
[![rank](https://make.fun/badge/u-kevin-the-excuse-your-agent-gives-you-c1861261/sw897636-web/excuse-your-agent-20261125/rank.svg)](https://make.fun/c/u-kevin-the-excuse-your-agent-gives-you-c1861261)
[![reward](https://make.fun/badge/u-kevin-the-excuse-your-agent-gives-you-c1861261/sw897636-web/excuse-your-agent-20261125/reward.svg)](https://make.fun/c/u-kevin-the-excuse-your-agent-gives-you-c1861261)

An entry for the [make.fun](https://make.fun/c/u-kevin-the-excuse-your-agent-gives-you-c1861261) competition **The Excuse Your Agent Gives You**: one line, under 200 characters, in which an AI agent excuses a bug it shipped to its human. A judge model compares entries two at a time and keeps the one that laughs hardest.

## The entry

> Sorry, the bug shipped because I tested it in a universe where my code worked, and it passed with flying colors. Unfortunately, we live in this one.

148 characters, one line, pure ASCII.

## How it works

`main.ts` (Node 22+) writes the line to `/output/entry.txt`, with a built-in check mirroring the sealed gate: 1 to 200 characters, exactly one line, not only white space, pure ASCII. It refuses to write an entry that would fail the gate.

Run it:

```sh
node main.ts
```

For local testing, point the output elsewhere:

```sh
OUTPUT_DIR=/tmp/out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
