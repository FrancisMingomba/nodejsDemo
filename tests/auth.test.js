const auth = require('../routes/auth');

describe(' Method generatePassword', () => {
    it('returns a generated password of the set pattern', ()=>{
      password = auth.generatePassword('12345');
      expect(password).toMatch(pattern);
    })
    it('returns a new value different from the previous one', ()=>{
      password2 = auht.generatePassword('12345');
      expect(password2).not.toEqual(password);
    });
  });