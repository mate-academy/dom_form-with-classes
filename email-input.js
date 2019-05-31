class EmailInput extends Input {
  validate() {
    const regex = EMAIL_CHECK;
    return this.value.match(regex);
  }
}