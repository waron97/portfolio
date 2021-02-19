import * as random from "random";

export const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

function pprint(s: string) {
  console.log(s);
}

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function range(iter: number): number[] {
  let arr: number[] = [];
  for (let i = 0; i < iter; i++) {
    arr.push(0);
  }
  return arr;
}

export async function scrambleIntro(
  memory: string[],
  action: Function,
  target: string
) {
  pprint("initting");
  for (let i = 0; i < target.length; i++) {
    const letter = target[i];
    for (let _ in range(10)) {
      await sleep(200);
      const index = random.int(0, alphabet.length - 1);
      memory[i] = alphabet[index];
      action(memory);
    }
    memory[i] = letter;
    action(memory);
  }
}
