export const PROJECT_CONST = {
  NAME: {
    MIN: 3,
    MAX: 20,
    MATCHES: /^([a-z])([a-z0-9-])/
  },
  K8S_NAME: {
    MIN: 3,
    MAX: 63
  },
  CNAME: {
    MAX_ENTRIES: 10,
    MAX_LENGTH: 100
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
      MIN: 1,
      MAX: 50,
      MATCHES: /^[a-zA-Z0-9-_]{1,50}$/
    },
    VALUE: {
      MIN: 1,
      MAX: 5000
    }
  },
  SERVICE: {
    DISPLAY_NAME: {
      MIN: 3,
      MAX: 128
    },
    CONTAINER_IMAGE_COMMAND_ARGS: {
      MAX: 10000
    },
    NAME: {
      MIN: 3,
      MAX: 14,
      MATCHES: /^([a-z])([a-z0-9-])/
    },
    ENVVAR_NAME: {
      // MATCHES: /^[a-zA-Z0-9-_]{1,50}$/,
      MIN: 1,
      MAX: 255
    },
    ENVVAR_VALUE: {
      // MATCHES: /^[\w\-_:.\/%@][\w\-_:.\/%@; ]{0,256}$/,
      MIN: 0,
      MAX: 10240
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
      MATCHES: /^[a-zA-Z0-9\/_-]{1,256}$/
    }
  },
  NAMESPACE_COMMAND: {
    MESSAGE: {
      MAX: 4096
    }
  }
};
