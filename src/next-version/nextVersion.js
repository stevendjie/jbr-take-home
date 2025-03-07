export default function nextVersion(version) {
  let parts = version.split('.').map(Number);
  let i = parts.length - 1;

  while (i > 0 && parts[i] === 9) {
    parts[i] = 0;
    i--;
  }
  parts[i]++;

  return parts.join('.');
}
