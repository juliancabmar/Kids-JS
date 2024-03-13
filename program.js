async function main() {
  await getString();
  print("Terminaste!!!");
  clearLine(2);
}
main().catch((e) => console.log(e));
