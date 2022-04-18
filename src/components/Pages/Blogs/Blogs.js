import React from "react";

const Blogs = () => {
  return (
    <div>
      <h2 className="mt-5">
        Q1. Difference between authorization and authentication
      </h2>
      <div className="d-flex mt-5">
        <div>
          <h3 className="text-center">Authentication</h3>
          <p>
            1. Authentication verifies who the user is. <br /> 2. Authentication
            works through passwords, one-time pins, biometric information, and
            other information provided or entered by the user.
            <br />
            3. Authentication is the first step of a good identity and access
            management process. <br />
            4. Authentication is visible to and partially changeable by the
            user. <br />
            5.Example: By verifying their identity, employees can gain access to
            an HR application that includes their personal pay information,
            vacation time, and 401K data.
          </p>
        </div>
        <div>
          <h3 className="text-center">Authorization</h3>
          <p>
            1.Authorization determines what resources a user can access. <br />
            2. Authorization works through settings that are implemented and
            maintained by the organization. <br />
            3.Authorization always takes place after authentication. <br />
            4. Authorization isn’t visible to or changeable by the user. <br />
            5.Example: Once their level of access is authorized, employees and
            HR managers can access different levels of data based on the
            permissions set by the organization.
          </p>
        </div>
      </div>
      <hr />
      <h3>
        Q2: Why are you using firebase? What other options do you have to
        implement authentication?
      </h3>
      <p>
        Most apps need to know the identity of a user. Knowing a user's identity
        allows an app to securely save user data in the cloud and provide the
        same personalized experience across all of the user's devices. Firebase
        Authentication provides backend services, easy-to-use SDKs, and
        ready-made UI libraries to authenticate users to your app. It supports
        authentication using passwords, phone numbers, popular federated
        identity providers like Google, Facebook and Twitter, and more.
      </p>
      <hr />

      <div>
        <h3>
          Q3: What other services does firebase provide other than
          authentication.
        </h3>
        <p>
          1. Parse – Open Source Backend Platform; <br />
          2. Back4app – Parse Hosting Platform; <br />
          3. Kinvey – Mobile Backend as a Service (mBaaS) for the Enterprise;{" "}
          <br />
          4. Backendless – Mobile Backend and API Services Platform; Kuzzle –
          Backend for web, hybrid, or native mobile apps and IoT projects;{" "}
          <br />
          5. Pubnub – Real-time APIs and Global Messaging; Kumulos – App
          Performance Management; <br />
          6. Game Sparks – Game Backend Platform; Hoodie – Generic backend with
          a client API for Offline First applications; <br />
          7. Appwrite – Open-Source backend for Flutter developers Deployd –
          Simple core library, with a modular API for your application; <br />
          8. NHost – Accelerates development and provides full control; Amplify
          JS – Open-source Javascript framework; <br />
          10. Heroku – Platform as a service backed by Salesforce.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
