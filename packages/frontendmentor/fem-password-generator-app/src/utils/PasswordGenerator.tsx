export default class PasswordGenerator {
  constructor(options) {
    this.options = options;
  }

  generatePassword(length) {
    const characterSets = [
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ", // Uppercase letters
      "abcdefghijklmnopqrstuvwxyz", // Lowercase letters
      "0123456789", // Numbers
      "!@#$%^&*()", // Symbols
    ];

    const selectedCharacterSets = characterSets.filter(
      (_, index) => this.options[index]
    );
    let characters = selectedCharacterSets.join("");

    let password = "";
    for (let i = 0; i < length; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    return password;
  }
}
