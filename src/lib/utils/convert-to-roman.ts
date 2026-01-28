export default function convertToRoman(number: number = 0): string {
  if (!number) {
    return '';
  }
  const map: Record<string, number> = {
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let roman = '';

  for (const key in map) {
    while (number >= map[key]) {
      roman += key;
      number -= map[key];
    }
  }

  return roman;
}
