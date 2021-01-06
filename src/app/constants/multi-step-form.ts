const ANSWERS_LIST = [
  { name: 'YES'},
  { name: 'NO'},
];

const DATA_STEP_1 = {
  firstName: {
    disabled: null,
    type: 'text',
    validations: {
      required: true,
      pattern: /^([a-zA-Z ]){2,30}$/,
    },
    errors: {
      pattern: 'Provided name should contain only letters.'
    },
    placeholder: ''
  }
};

const DATA_STEP_2 = {
  email: {
    type: 'email',
    validations: {
      required: true,
      pattern: /^([^@]+)@([^@]+)\.([^0-9@.]{2,6})$/
    },
    errors: {
      pattern: 'Provided email is not recognized, please check the format.'
    },
    placeholder: ''
  }
};

const DATA_STEP_3 = {
  loanAmount: {
    type: 'number',
    validations: {
      required: true,
      pattern: /^[1-9][0-9]*$/,
    },
    errors: {
      pattern: 'Only positive digits greater than 0 are allowed.'
    },
    placeholder: ''
  }
};

const DATA_STEP_4 = {
  dependantInFamily: {
    type: 'select',
    options: ANSWERS_LIST,
    validations: {
      required: true,
    },
    errors: {},
  }
};

const STEP_ITEMS = [
  { label: 'Name', data: DATA_STEP_1 },
  { label: 'Email', data: DATA_STEP_2 },
  { label: 'Amount', data: DATA_STEP_3 },
  { label: 'Family', data: DATA_STEP_4 },
  { label: 'Summary', data: {} }
];

export { STEP_ITEMS }