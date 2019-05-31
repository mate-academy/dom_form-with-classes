class Input{
  setName(name) {
    this.name = name;
    this.value;
  }

  getName() {
    return this.name;
  }

  setRequired(boolean){
    this.required = boolean;
  };

  validate() {
    if (this.name !== 'name') {
      return true;
    }
    const regex = FULL_NAME_CHECK;
    return this.value.match(regex);
  }
}