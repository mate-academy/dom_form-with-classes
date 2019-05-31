class PhoneInput extends Input {
  validate() {
    const regex = NUMBER_CHECK;
    return this.value.match(regex);
  }
}