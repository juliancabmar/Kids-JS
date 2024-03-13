async function main() {
  print("presione una tecla: ");
  let key = await getKey();
  print("\ningresaste " + key + "\n");
  print("ingrese un string: ");
  let data = await getString();
  print("ingresaste " + data + "\n");
  clean();
}
main().catch((e) => console.log(e));
