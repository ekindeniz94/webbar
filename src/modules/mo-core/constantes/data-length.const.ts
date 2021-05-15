
export const DTO_VALIDATION_CONST = {
  EMAIL: {
    MIN: 5,
    MAX: 320
  },
  PASSWORD: {
    MIN: 5,
    MAX: 128,
    MATCHES: /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*?[^\w\s]|.*?_|.*?\.).{6,20}$/
  },
  PHONE_NUMBER: {
    MAX: 128
  },
  FIRST_NAME: {
    MIN: 2,
    MAX: 256
  },
  LAST_NAME: {
    MIN: 2,
    MAX: 256
  },
  USER_API_KEY_NAME: {
    MIN: 5,
    MAX: 256
  },
  COMPANY: {
    NAME: {
      MAX: 256
    },
    TAX_NUMBER: {
      MAX: 128
    }
  },
  ADDRESS: {
    STREET: {
      MAX: 256
    },
    ZIP: {
      MAX: 128
    },
    COUNTRY: {
      MAX: 128
    },
    CITY: {
      MAX: 128
    }
  },
  GROUP: {
    NAME: {
      MAX: 256
    },
    DESCRIPTION: {
      MAX: 512
    }
  },
  MISC: {
    KEYVAULT: {
      NAME: {
        MIN: 5,
        MAX: 50,
        MATCHES: /^[a-zA-Z0-9-_]{6,}$/
      },
      VALUE: {
        MIN: 1,
        MAX: 500
      }
    },
    BLOG: {
      TAG: {
        MAX: 128,
        MAX_TAGS: 100
      },
      TOPIC: {
        MIN: 2,
        MAX: 512
      },
      TITLE: {
        MIN: 2,
        MAX: 512
      },
      CONTENT: {
        MIN: 10,
        MAX: 512000
      },
      TEASER_TEXT: {
        MIN: 10,
        MAX: 256000
      }
    },
    JOB: {
      TAG: {
        MAX: 128,
        MAX_TAGS: 100
      },
      NAME: {
        MIN: 2,
        MAX: 512
      },
      BG_COLOR: {
        MAX: 8
      },
      TEXT_COLOR: {
        MAX: 8
      },
      SHORT_NAME: {
        MIN: 2,
        MAX: 256
      },
      CONTENT: {
        MIN: 10,
        MAX: 512000
      },
      TEASER_TEXT: {
        MIN: 10,
        MAX: 256000
      }
    },
    FILE: {
      NAME: {
        MAX: 256
      },
      ALT_TEXT: {
        MAX: 256
      }
    },
    CONTACT: {
      INTEREST: {
        MAX: 256
      },
      SUBJECT: {
        MIN: 5,
        MAX: 256
      },
      MESSAGE: {
        MIN: 10,
        MAX: 3000
      }
    }
  }
};
