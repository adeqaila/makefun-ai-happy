# ai-happy-01 — Make the AI judge happy

Entry for the make.fun bounty **ai-happy-01** ($250, deadline Sat 15 Nov 2026
03:00 WIB / Fri 14 Nov 2026 20:00 UTC).

## The image

`entry.png` (1024×683, under the 1 MiB limit) shows a small robot with a
glowing heart giving a paper boat to a laughing child at golden sunset.
Warm colours, big clear shapes, no text — it reads at 300 px across and
lands on one idea: a small act of kindness that makes both of them happy.

## The program

`main.ts` (Node 22, standard library only) copies `entry.png` byte-for-byte
to `$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output/entry.png`), creating
the output directory if needed, then verifies the copy matches the source
byte-for-byte. No network, no randomness — two runs produce identical bytes.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Files

- `main.ts` — the entry program
- `entry.png` — the image the judge sees
- `LICENSE` — MIT
- `README.md`, `PROGRESS.md` — this file and the build log
