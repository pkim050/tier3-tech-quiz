function oopsie() {
  setTimeout(oopsie, 10000);
  // I will just have the logs show up instead of deleting it, I believe you wanted me to fix
  // the error itself and that's it.
  console.log("just saying hello - is this thing on?");
  return true;
}

setTimeout(oopsie, 3000);
