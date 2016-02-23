Schemas = {};

Schemas.User = new SimpleSchema({
  username: {
    type: String
  },
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  name: {
    type: String
  },
  lastname: {
    type: String
  },
  dob: {
    type: String,
    autoform: {
      type: "select",
      options: AppCommon.utils.yearsList("value", "label")
    }
  },
  gender: {
    type: String,
    autoform: {
      type: "select",
      options: [{
        label: "Uomo",
        value: "male",
      }, {
        label: "Donna",
        value: "female",
      }, ]
    }
  },
});
