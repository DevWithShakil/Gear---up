import React from "react";

const Blogs = () => {
  return (
    <div>
      <h2 className="mt-5">
        Q1. Difference between javascript and nodejs:
      </h2>
      <div className="d-flex mt-5">
        <div>
          <h3 className="text-center">JavaScript</h3>
          <p>
            1.JavaScript is a programming language. It is running in any web browser with a proper browser engine. <br />
            2. Mainly using for any client-side activity for a web application, like possible attribute validation or refreshing the page in a specific interval or provide some dynamic changes in web pages without refreshing the page. <br />
            3.JavaScript running any engine like Spider monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome).



          </p>
        </div>
        <div>
          <h3 className="text-center">Node JS</h3>
          <p>

            1.It is an interpreter and environment for JavaScript with some specific useful libraries which JavaScript programming can use separately. <br />
            2. It mainly used for accessing or performing any non-blocking operation of any operating system, like creating or executing a shell script or accessing any hardware-specific information or running any backend job. <br />
            3.Node JS only run in a V8 engine which mainly used by google chrome. And javascript program which will be written under this Node JS will be always run in V8 Engine.


          </p>
        </div>
      </div>
      <hr />
      <h3>
        Q2: When should you use nodejs and when should you use mongodb?
      </h3>
      <p>
        Any project needs a programming environment and a runtime library that offers you basic programming tools/support and can compile and/or interpret your code. Nodejs is such as tool for the Javascript programming language. There are other similar tools for other languages such as Python, Java, PHP, C#, C++, Go, etc...

        So, if you want to write some kind of stand-alone program or server in Javascript, then you can use nodejs for it. <br /> <br />

        If your application needs the ability to persistently store data in a way that you can efficiently query or update it later, then you would typically use some form of database. There are dozens of popular databases. MongoDB is one such database. MariaDB, MySql, CouchDB, DynamoDB (on AWS), Postgres are examples of other databases. Different databases have different strengths (things they are best at) and different ways of using them so it's a whole different question to choose the right/best database for what you're doing.

      </p>
      <hr />

      <div>
        <h3>
          Q3: What is the purpose of jwt and how does it work?
        </h3>
        <p>
          JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. <br /> <br />

          JWT's differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

          A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.

          Once decoded, you will get two JSON strings:

          The header and the payload.
          The signature.
          The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.

          The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.

          There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others.

          The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.



        </p>
      </div>
    </div>
  );
};

export default Blogs;
