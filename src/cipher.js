const cipher = {
  encode: function (plaintext, shift) {
    let ciphertext = "";
    if(!plaintext && !shift){
      throw new TypeError('Valores incorretos');
    }
    if(shift === null && typeof plaintext!==String){
      throw new TypeError('Valores incorretos');
    }
    for (let i = 0; i < plaintext.length; i++) {
      const char = plaintext[i];
      if (char.match(/[A-Z]/)) {
        const code = ((plaintext.charCodeAt(i) - 65 + (Number(shift) % 26) + 26) % 26 + 65);
        ciphertext += String.fromCharCode(code);
      }
      else if (char.match(/[a-z]/)) {
        const code = ((plaintext.charCodeAt(i) - 97 + (Number(shift) % 26) + 26) % 26 + 97);
        ciphertext += String.fromCharCode(code);
      }
      else {
        ciphertext += char;
      }
    }
    return ciphertext;
  },
  decode: function (ciphertext, shift) {
    let plaintext = "";
    if(!ciphertext && !shift){
      throw new TypeError('Valores incorretos');
    }
    if(shift === null && typeof ciphertext!==String){
      throw new TypeError('Valores incorretos');
    }
    for (let i = 0; i < ciphertext.length; i++) {
      const char = ciphertext[i];
      if (char.match(/[A-Z]/)) {
        const code = ((ciphertext.charCodeAt(i) - 65 - (Number(shift) % 26) + 26) % 26 + 65);
        plaintext += String.fromCharCode(code);
      }
      else if (char.match(/[a-z]/)) {
        const code = ((ciphertext.charCodeAt(i) - 97 - (Number(shift) % 26) + 26) % 26 + 97);
        plaintext += String.fromCharCode(code);
      }
      else {
        plaintext += char;
      }
    }
    return plaintext;
  }
};
export default cipher