export const DTO_VALIDATION_CONST = {
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
  SUBSCRIPTION: {
    PRODUCT: {
      NAME: {
        MIN: 5,
        MAX: 255
      },
      DESCRIPTION: {
        MIN: 0,
        MAX: 4096
      },
      ICON: {
        MIN: 0,
        MAX: 4096
      }
    }
  },
  SUBSCRIPTION_POOL: {
    MAX_SUBSCRIPTIONS: 100
  },
  NAMESPACE: {
    CNAME: {
      MAX_ENTRIES: 10,
      MAX_LENGTH: 100
    },
    NAME: {
      MIN: 5,
      MAX: 30,
      MATCHES: /^[a-zA-Z0-9-]{6,30}$/
    },
    HOSTNAME: {
      MIN: 5,
      MAX: 30,
      MATCHES: /^[a-zA-Z0-9-]{6,30}$/
    },
    SHORT_ID: {
      MIN: 6,
      MAX: 6,
      MATCHES: /^[a-z0-9]{6,6}$/
    },
    DESCRIPTION: {
      MAX: 2048
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
      NAME: {
        MIN: 5,
        MAX: 50
      },
      BRANCH: {
        MIN: 5,
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
      NAME: {
        MIN: 5,
        MAX: 256
      },
      DESCRIPTION: {
        MAX: 2048
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
        MATCHES: /^[a-zA-Z0-9-_]{4,256}$/
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
    MATCHES: /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*?[^\w\s]|.*?_|.*?\.).{6,20}$/
  },
  PHONE_NUMBER_PREFIX: {
    MAX: 3,
    IS_IN_STRING_LIST: ['+49']
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
    DOCU: {
      NAV: {
        TITLE: {
          MIN: 512,
          MAX: 2
        },
        TAGS: {
          MAX: 128
        }
      },
      SECTION: {
        TITLE: {
          MAX: 1024,
          MIN: 2
        },
        CONTENT: {
          MIN: 2,
          MAX: 512000
        }
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
