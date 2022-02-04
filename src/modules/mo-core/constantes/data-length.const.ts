export const DTO_VALIDATION_CONST = {
  DEFAULT_PAYMENT_CURRENCY: '$',
  PRIVACY_TERMS_CONDITIONS_VERSION: '1.0.0', // temporary
  MO_USER_DOMAINS: [
    'mogenius.app',
    'mogenius.de',
    'mogenius.eu',
    'mogenius.info',
    'mogenius.io',
    'mogenius.net',
    'mogenius.org'
  ],
  MO_DOMAINS: [
    'http://localhost:4200',
    'https://mogenius.app',
    'https://mogenius.com',
    'https://mogenius.de',
    'https://mogenius.eu',
    'https://mogenius.info',
    'https://mogenius.io',
    'https://mogenius.net',
    'https://mogenius.org'
  ],
  CHANGELOG: {
    VERSION: {
      MIN: 5,
      MAX: 16,
      MATCHES: /^\d+(\.\d+)*$/
    },
    TITLE: {
      MIN: 5,
      MAX: 255
    },
    LOGTEXT: {
      MIN: 0,
      MAX: 8192
    }
  },
  NAMESPACE: {
    CNAME: {
      MAX_ENTRIES: 10,
      MAX_LENGTH: 100
    },
    NAME: {
      MIN: 3,
      MAX: 14,
      MATCHES: /^([a-z])([a-z0-9-])/
    },
    DISPLAY_NAME: {
      MIN: 3,
      MAX: 128
    },
    DOMAIN: {
      MAX: 128
    },
    HOSTNAME: {
      MIN: 3,
      MAX: 14,
      MATCHES: /^([a-z])([a-z0-9-])/
    },
    SHORT_ID: {
      MIN: 6,
      MAX: 6,
      MATCHES: /^[a-z0-9]/
    },
    DESCRIPTION: {
      MAX: 512
    },
    ICON: {
      MAX: 256
    },
    SERVICES: {
      ARRAY_MAX_SIZE: 100
    },
    STAGES: {
      ARRAY_MAX_SIZE: 10
    },
    STAGE: {
      DISPLAY_NAME: {
        MIN: 3,
        MAX: 128
      },
      NAME: {
        MIN: 1,
        MAX: 14,
        MATCHES: /^([a-z])([a-z0-9-])/
      },
      SUBDOMAIN: {
        MIN: 1,
        MAX: 14,
        MATCHES: /^([a-z])([a-z0-9-])/
      },
      DESCRIPTION: {
        MAX: 512
      }
    },
    KEY_VAULT: {
      NAME: {
        MIN: 5,
        MAX: 50,
        MATCHES: /^[a-zA-Z0-9-_]{6,50}$/
      },
      VALUE: {
        MIN: 1,
        MAX: 5000
      }
    },
    HTML: {
      DOCUMENT_ROOT: {
        MIN: 3,
        MAX: 256
      }
    },
    SERVICE: {
      BRANCH_NAME: {
        MIN: 1,
        MAX: 256
      },
      DISPLAY_NAME: {
        MIN: 3,
        MAX: 128
      },
      NAME: {
        MIN: 3,
        MAX: 14,
        MATCHES: /^([a-z])([a-z0-9-])/
      },
      DESCRIPTION: {
        MAX: 512
      },
      GIT_REPOSITORY: {
        MIN: 10,
        MAX: 1028
      },
      GROUPNAME: {
        MIN: 5,
        MAX: 100
      },
      ENVVAR_NAME: {
        MATCHES: /^[a-zA-Z0-9-_]{3,50}$/,
        MIN: 3,
        MAX: 50
      },
      ENVVAR_VALUE: {
        MIN: 0,
        MAX: 500
      },
      ENVVAR_CHOWN_USER_VALUE: {
        MIN: 1,
        MAX: 30,
        MATCHES: /^[a-zA-Z0-9_-]{1,30}$/
      },
      ENVVAR_CHOWN_GROUP_VALUE: {
        MIN: 1,
        MAX: 30,
        MATCHES: /^[a-zA-Z0-9_-]{1,30}$/
      },
      ENVVAR_CHOWN_FOLDER_VALUE: {
        MIN: 1,
        MAX: 256,
        MATCHES: /^[a-zA-Z0-9\/_]{1,256}$/
      }
    },
    NAMESPACE_COMMAND: {
      MESSAGE: {
        MAX: 4096
      }
    },
    CLUSTER: {
      NAME: {
        MIN: 3,
        MAX: 256,
        MATCHES: /^([a-z])([a-z0-9-_])/
      }
    }
  },
  EMAIL: {
    MIN: 5,
    MAX: 320
  },
  PASSWORD: {
    MIN: 5,
    MAX: 128,
    MATCHES: /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*?[^\w\s]|.*?_|.*?\.).{6,129}$/
  },
  PHONE_NUMBER_PREFIX: {
    MAX: 10
  },
  PHONE_NUMBER: {
    MAX: 128
  },
  REGISTER_BETA: {
    FULL_NAME: {
      MIN: 2,
      MAX: 256
    }
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
    VAT_ID: {
      MAX: 128
    }
  },
  ADDRESS: {
    ADDRESS_LINE1: {
      MIN: 2,
      MAX: 256
    },
    ADDRESS_LINE2: {
      MIN: 1,
      MAX: 16
    },
    ADDRESS_LINE3: {
      MIN: 1,
      MAX: 16
    },
    STATE: {
      MIN: 2,
      MAX: 128
    },
    ZIP: {
      MIN: 2,
      MAX: 128
    },
    CITY: {
      MIN: 2,
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
  FILE: {
    ALT_TEXT: {
      MAX: 256
    },
    TITLE: {
      MAX: 256
    },
    CAPTION: {
      MAX: 512000
    },
    COPYRIGHT: {
      MAX: 256
    },
    LANGUAGE_CODE: {
      MAX: 6
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
      MIN: 10
    },
    TEASER_CONTENT: {
      MIN: 10
    }
  },
  JOB: {
    TAG: {
      MAX: 128,
      MAX_TAGS: 100
    },
    TITLE: {
      MIN: 2,
      MAX: 512
    },
    CONTENT: {
      MIN: 10
    },
    TEASER_CONTENT: {
      MIN: 10
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
  },
  MISC: {
    DOCU: {
      NAV: {
        TITLE: {
          MIN: 2,
          MAX: 1024
        },
        TAGS: {
          MAX: 128
        }
      },
      ENTRY: {
        TITLE: {
          MIN: 2,
          MAX: 2048
        },
        CONTENT: {
          MIN: 2,
          MAX: 512000
        }
      }
    }
  }
};
