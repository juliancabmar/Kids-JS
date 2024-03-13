global.getString = async function () {
  let str = "";
  await new Promise((resolve, reject) => {
    process.stdin.setRawMode(false);
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    process.stdin.on("data", (value) => {
      str = value;
      process.stdin.pause();
      resolve();
    });
  });
  return str.split("\n")[0];
};

global.getKey = async function () {
  let str = "";
  await new Promise((resolve, reject) => {
    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    process.stdin.on("data", (value) => {
      str = value;
      process.stdin.pause();
      resolve();
    });
  });
  return str;
};

global.print = function (value) {
  process.stdout.write(value);
};
