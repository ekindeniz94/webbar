import { IDockerTemplate } from '../../../modules/mo-namespace/interfaces/docker-template';
import { NamespaceServiceEnvVarTypeEnum } from '../../mo-namespace/enums/namespace-envvar-type.enum';

export const DOCKER_TEMPLATES: IDockerTemplate[] = [
  {
    name: 'nginx',
    id: 'nginx-1.19',
    version: '1.19',
    description:
      'Nginx (pronounced "engine-x") is an open source reverse proxy server for HTTP, HTTPS, SMTP, POP3, and IMAP protocols, as well as a load balancer, HTTP cache, and a web server (origin server). The nginx project started with a strong focus on high concurrency, high performance and low memory usage. It is licensed under the 2-clause BSD-like license and it runs on Linux, BSD variants, Mac OS X, Solaris, AIX, HP-UX, as well as on other *nix flavors. It also has a proof of concept port for Microsoft Windows.',
    folder: 'nginx-latest',
    lastUpdate: '2021-02-01T09:50:31+01:00',
    internalPort: 80,
    expose: true
  },
  {
    name: 'Vapor4 (Swift)',
    id: 'vapor4-swift-5.3-focal',
    version: '5.3-focal',
    description:
      'Swift is a high-performance system programming language. It has a clean and modern syntax, offers seamless access to existing C and Objective-C code and frameworks, and is memory safe by default. Although inspired by Objective-C and many other languages, Swift is not itself a C-derived language. As a complete and independent language, Swift packages core features like flow control, data structures, and functions, with high-level constructs like objects, protocols, closures, and generics. Swift embraces modules, eliminating the need for headers and the code duplication they entail.',
    folder: 'vapor-swift',
    lastUpdate: '2021-02-01T09:50:31+01:00',
    internalPort: 8080,
    expose: true
  },
  {
    name: 'httpd (Apache 2.4)',
    id: 'httpd-2.4.46',
    version: '2.4.46',
    description:
      'The Apache HTTP Server, colloquially called Apache, is a Web server application notable for playing a key role in the initial growth of the World Wide Web. Originally based on the NCSA HTTPd server, development of Apache began in early 1995 after work on the NCSA code stalled. Apache quickly overtook NCSA HTTPd as the dominant HTTP server, and has remained the most popular HTTP server in use since April 1996.',
    folder: 'httpd-apache-2.4',
    lastUpdate: '2021-02-01T09:50:31+01:00',
    internalPort: 80,
    expose: true
  },
  {
    name: 'WordPress',
    id: 'wordpress-php8.0-apache',
    version: 'php8.0-apache',
    description:
      'WordPress is a free and open source blogging tool and a content management system (CMS) based on PHP and MySQL, which runs on a web hosting service. Features include a plugin architecture and a template system. WordPress is used by more than 22.0% of the top 10 million websites as of August 2013. WordPress is the most popular blogging system in use on the Web, at more than 60 million websites.',
    folder: 'wordpress',
    lastUpdate: '2021-07-12T10:50:31+01:00',
    internalPort: 80,
    expose: true,
    envVars: [
      {
        name: 'WORDPRESS-DB-HOST',
        value: '',
        type: NamespaceServiceEnvVarTypeEnum.PLAINTEXT
      },
      {
        name: 'WORDPRESS-DB-USER',
        value: '',
        type: NamespaceServiceEnvVarTypeEnum.PLAINTEXT
      },
      {
        name: 'WORDPRESS-DB-PASSWORD',
        value: '',
        type: NamespaceServiceEnvVarTypeEnum.KEY_VAULT
      },
      {
        name: 'WORDPRESS-DB-NAME',
        value: '',
        type: NamespaceServiceEnvVarTypeEnum.PLAINTEXT
      },
      {
        name: 'SEED-PATH',
        value: 'wordpress:wordpress',
        type: NamespaceServiceEnvVarTypeEnum.VOLUME_MOUNT_SEED,
        deactivateName: true,
        deactivateValue: true,
        deactivateType: true
      },
      {
        name: 'VOLUME-MOUNT',
        value: 'wordpress:/var/lib/html',
        type: NamespaceServiceEnvVarTypeEnum.VOLUME_MOUNT,
        deactivateName: true,
        deactivateValue: true,
        deactivateType: true,
        dependsOn: 'SEED-PATH',
        dependsOnMethod: 'SEED_PATH__TO___VOLUME_MOUNT__FROM'
      }
    ]
  },
  {
    name: 'MySQL',
    id: 'mysql-8.0.23',
    version: '8.0.23',
    description:
      "MySQL is the world's most popular open source database. With its proven performance, reliability and ease-of-use, MySQL has become the leading database choice for web-based applications, covering the entire range from personal projects and websites, via e-commerce and information services, all the way to high profile web properties including Facebook, Twitter, YouTube, Yahoo! and many more.",
    folder: 'mysql',
    lastUpdate: '2021-02-01T09:50:31+01:00',
    envVars: [
      {
        name: 'VOLUME-MOUNT',
        value: 'mysql:/var/lib/mysql',
        type: NamespaceServiceEnvVarTypeEnum.VOLUME_MOUNT
      },
      {
        name: 'MYSQL-ROOT-PASSWORD',
        value: '',
        type: NamespaceServiceEnvVarTypeEnum.KEY_VAULT
      },
      {
        name: 'MYSQL-ROOT-HOST',
        value: '%',
        type: NamespaceServiceEnvVarTypeEnum.PLAINTEXT
      },
      {
        name: 'MYSQL-USER',
        value: 'mysqluser',
        type: NamespaceServiceEnvVarTypeEnum.PLAINTEXT
      },
      {
        name: 'MYSQL-PASSWORD',
        value: '###_REPLACE_###',
        type: NamespaceServiceEnvVarTypeEnum.KEY_VAULT
      },
      {
        name: 'MYSQL-DATABASE',
        value: 'wordpress',
        type: NamespaceServiceEnvVarTypeEnum.PLAINTEXT
      }
    ],
    internalPort: 3306,
    expose: false
  },
  {
    name: 'MongoDB',
    id: 'mongo-4.4.3-bionic',
    version: '4.4.3-bionic',
    description:
      'MongoDB is a free and open-source cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schemata. MongoDB is developed by MongoDB Inc., and is published under a combination of the Server Side Public License and the Apache License. First developed by the software company 10gen (now MongoDB Inc.) in October 2007 as a component of a planned platform as a service product, the company shifted to an open source development model in 2009, with 10gen offering commercial support and other services. Since then, MongoDB has been adopted as backend software by a number of major websites and services, including MetLife, Barclays, ADP, UPS, Viacom, and the New York Times, among others. MongoDB is the most popular NoSQL database system.',
    folder: 'mongo',
    lastUpdate: '2021-02-01T09:50:31+01:00',
    internalPort: 27017,
    expose: false
  },
  {
    name: 'Python-Flask',
    id: 'python-3.8-flask-1.1.1',
    version: '3.8',
    description:
      'Python is an interpreted, interactive, object-oriented, open-source programming language. It incorporates modules, exceptions, dynamic typing, very high level dynamic data types, and classes. Python combines remarkable power with very clear syntax. It has interfaces to many system calls and libraries, as well as to various window systems, and is extensible in C or C++. It is also usable as an extension language for applications that need a programmable interface. Finally, Python is portable: it runs on many Unix variants, on the Mac, and on Windows 2000 and later.<br> Flask is a lightweight WSGI web application framework. It is designed to make getting started quick and easy, with the ability to scale up to complex applications.',
    folder: 'python3.8-flask',
    lastUpdate: '2021-07-06T08:09:31+01:00',
    internalPort: 1337,
    expose: true
  }
];
