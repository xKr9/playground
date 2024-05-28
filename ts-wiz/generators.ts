function* naturals() {
  let n = 0;
  while (true) {
    yield n;
    n++;
  }
}
