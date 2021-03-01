export const CONTAINER_TEMPLATES: IContainerTemplateData[] = [
  {
    name: 'nginx',
    id: 'nginx-1.19',
    version: '1.19',
    description:
      'Nginx (pronounced "engine-x") is an open source reverse proxy server for HTTP, HTTPS, SMTP, POP3, and IMAP protocols, as well as a load balancer, HTTP cache, and a web server (origin server). The nginx project started with a strong focus on high concurrency, high performance and low memory usage. It is licensed under the 2-clause BSD-like license and it runs on Linux, BSD variants, Mac OS X, Solaris, AIX, HP-UX, as well as on other *nix flavors. It also has a proof of concept port for Microsoft Windows.',
    folder: 'nginx-latest',
    lastUpdate: '2021-02-01T09:50:31+01:00',
    needsPvc: false
  },
  {
    name: 'Vapor4 (Swift)',
    id: 'vapor4-swift-5.3-focal',
    version: '5.3-focal',
    description:
      'Swift is a high-performance system programming language. It has a clean and modern syntax, offers seamless access to existing C and Objective-C code and frameworks, and is memory safe by default. Although inspired by Objective-C and many other languages, Swift is not itself a C-derived language. As a complete and independent language, Swift packages core features like flow control, data structures, and functions, with high-level constructs like objects, protocols, closures, and generics. Swift embraces modules, eliminating the need for headers and the code duplication they entail.',
    folder: 'vapor-swift',
    lastUpdate: '2021-02-01T09:50:31+01:00',
    needsPvc: false
  },
  {
    name: 'httpd (Apache 2.4)',
    id: 'httpd-2.4.46',
    version: '2.4.46',
    description:
      'The Apache HTTP Server, colloquially called Apache, is a Web server application notable for playing a key role in the initial growth of the World Wide Web. Originally based on the NCSA HTTPd server, development of Apache began in early 1995 after work on the NCSA code stalled. Apache quickly overtook NCSA HTTPd as the dominant HTTP server, and has remained the most popular HTTP server in use since April 1996.',
    folder: 'httpd-apache-2.4',
    lastUpdate: '2021-02-01T09:50:31+01:00',
    needsPvc: false
  },
  {
    name: 'MySQL',
    id: 'mysql-8.0.23',
    version: '8.0.23',
    description:
      "MySQL is the world's most popular open source database. With its proven performance, reliability and ease-of-use, MySQL has become the leading database choice for web-based applications, covering the entire range from personal projects and websites, via e-commerce and information services, all the way to high profile web properties including Facebook, Twitter, YouTube, Yahoo! and many more.",
    folder: 'mysql',
    lastUpdate: '2021-02-01T09:50:31+01:00',
    needsPvc: true
  },
  {
    name: 'MongoDB',
    id: 'mongo-4.4.3-bionic',
    version: '4.4.3-bionic',
    description:
      'MongoDB is a free and open-source cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schemata. MongoDB is developed by MongoDB Inc., and is published under a combination of the Server Side Public License and the Apache License. First developed by the software company 10gen (now MongoDB Inc.) in October 2007 as a component of a planned platform as a service product, the company shifted to an open source development model in 2009, with 10gen offering commercial support and other services. Since then, MongoDB has been adopted as backend software by a number of major websites and services, including MetLife, Barclays, ADP, UPS, Viacom, and the New York Times, among others. MongoDB is the most popular NoSQL database system.',
    folder: 'mongo',
    lastUpdate: '2021-02-01T09:50:31+01:00',
    needsPvc: true
  }
];

export interface IContainerTemplateData {
  name: string;
  id: string;
  version: string;
  description: string;
  folder: string;
  lastUpdate: string;
  needsPvc: boolean;
}
