AccountsTemplates.removeField('email');
AccountsTemplates.removeField('password');
AccountsTemplates.addFields([{
  _id: 'username_and_email',
  type: 'text',
  placeholder: "Email o Nome Utente",
  displayName: "Email o Nome Utente",
  required: true,
}, {
  _id: 'name',
  type: 'text',
  displayName: 'Nome',
  placeholder: 'Nome',
  required: true,
}, {
  _id: 'lastname',
  type: 'text',
  displayName: 'Cognome',
  placeholder: 'Cognome',
  required: true
}, {
  _id: 'dob',
  type: 'select',
  displayName: 'Anno di nascita',
  required: true,
  select: AppCommon.utils.yearsList("value", "text"),
}, {
  _id: "gender",
  type: "select",
  displayName: "Sesso",
  select: [{
    text: "Uomo",
    value: "male",
  }, {
    text: "Donna",
    value: "female",
  }, ],
}, {
  _id: 'username',
  type: 'text',
  displayName: 'Username',
  re: /[a-z0-9]{5,}/,
  errStr: 'L\'username deve contenere almeno 5 caratteri minuscoli.',
  required: true,
  func: function(username) {
    var self = this;
    if (Meteor.isClient) {
      Meteor.call('checkUsername', username, function(err, notTakenUsername) {
        if (notTakenUsername) {
          self.setSuccess();
        } else {
          self.setError('Username già registrato. Scegline un altro.');
        }
        self.setValidating(false);
      });
      return;
    }
    return Meteor.call('checkUsername', username);
  }
}, {
  _id: 'email',
  type: 'text',
  displayName: 'Email',
  required: true,
  re: /.+@(.+){2,}\.(.+){2,}/,
  errStr: 'Email non valida.',
  func: function(email) {
    var self = this;
    if (Meteor.isClient) {
      Meteor.call('checkEmail', email, function(err, notTakenEmail) {
        if (notTakenEmail) {
          self.setSuccess();
        } else {
          self.setError('Email già registrata. Scegline un\'altra.');
        }
        self.setValidating(false);
      });
      return;
    }
    return Meteor.call('checkEmail', email);
  }
}, {
  _id: 'password',
  type: 'password',
  required: true,
  re: /[A-Za-z0-9#?!@$%^&*-_\.,]{6,}/,
  errStr: 'La password deve contenere almeno 6 caratteri.'
}, {
  _id: 'password_again',
  type: 'password',
  displayName: 'Conferma password',
  required: true,
  placeholder: 'Conferma password',
}]);
