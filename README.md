# SwagLabs
End-to-end test of Swag Labs test automation practice website.

Introduction to Cypress
Cypress is a relatively new automated tests tool which is gaining popularity at a very rapid pace

Here is the home page for Cypress if someone wants to look it up

https://www.cypress.io/

Cypress has very strong documentation so a new comer could find most of the information from their own site

https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell

Also as a starting point it would be good to go through these tutorial videos

https://docs.cypress.io/examples/examples/tutorials.html#Best-Practices

---------------------------------------------------------

Srating a test
To start this automated test, first you are going to need Node.js, Node modules and Cypress.

---------------------------------------------------------

To install Node.js, you can follow these steps:

Visit the official Node.js website: Go to the official Node.js website at https://nodejs.org.

Choose the appropriate Node.js version: On the Node.js website, you'll see two versions available for download: LTS (Long Term Support) and Current.
It is generally recommended to choose the LTS version, as it provides a stable and reliable platform for most projects. Click on the "LTS" button to download the latest LTS version.

Select your operating system: Node.js is available for various operating systems.
Choose the version suitable for your operating system (e.g., Windows, macOS, Linux) by clicking on the corresponding download button.

Download the Node.js installer: After selecting your operating system, the website will initiate the download of the Node.js installer file specific to your platform.
Once the download is complete, locate the installer file in your downloads folder or the specified destination.

Run the Node.js installer: Double-click on the downloaded installer file and follow the installation wizard instructions to install Node.js on your system.
The installation process may vary slightly depending on your operating system.

Verify the installation: After the installation is complete, open a terminal or command prompt and run the following commands
to verify that Node.js and npm (Node Package Manager) are installed successfully:

node --version
npm --version

These commands will display the versions of Node.js and npm installed on your system if the installation was successful.

Node.js is now installed on your machine, allowing you to run JavaScript code on the server-side and leverage the vast ecosystem of npm packages for your projects.

Remember to consult the Node.js documentation for further guidance on using Node.js and npm: https://nodejs.org/en/docs/

---------------------------------------------------------

To install Node modules for a project, you can use npm (Node Package Manager) or yarn. Both npm and yarn are popular package managers
for JavaScript and Node.js projects. Here's how you can install Node modules using npm or yarn:

Using npm:
Open a terminal or command prompt.
Navigate to the root directory of your project where the package.json file is located.
Run the following command to install the dependencies listed in the package.json file:


npm install

This command will read the package.json file and install all the required Node modules into a folder
named node_modules in your project directory.

Using yarn:

Open a terminal or command prompt.
Navigate to the root directory of your project where the package.json file is located.
Run the following command to install the dependencies listed in the package.json file:


yarn install

This command will read the package.json file and install all the required Node modules into a folder named node_modules in your project directory.

After executing the installation command, npm or yarn will download and install the specified packages and their dependencies. 
The installed modules will be saved in the node_modules directory, which will contain all the necessary code for your project to run.

Make sure you have a stable internet connection when running the installation command, as it requires downloading packages from the npm or yarn registry.
Note: It's important to include the package.json file in your project, as it lists the dependencies required by your project. 
If you don't have a package.json file, you can create one using npm init or yarn init before installing the modules.

Remember to run the installation command whenever you add or modify dependencies in your package.json file to ensure that all the required modules are installed correctly.

---------------------------------------------------------

To install Cypress, you can follow these steps:

Make sure you have Node.js installed: Cypress requires Node.js to be installed on your system.
You can download and install Node.js from the official website: https://nodejs.org

Set up a new project or navigate to an existing project: Choose a directory where you want to set up your Cypress project,
or navigate to an existing project directory using a terminal or command prompt.

Initialize your project: In the project directory, run the following command to initialize a new Node.js project:

npm init -y

This command will create a package.json file in your project directory.

Install Cypress: Run the following command to install Cypress as a dev dependency in your project:

npm install cypress --save-dev

This command will download and install the Cypress package into your project.

Verify the installation: After the installation is complete, you can verify that Cypress has been installed successfully by running the following command:

npx cypress --version

This command will display the version of Cypress installed in your project.

With Cypress successfully installed, you can proceed to set up and write your Cypress tests.

Additionally, Cypress provides a Test Runner GUI for executing and managing your tests. To open the Test Runner, run the following command in your project directory:

npx cypress open

This command will launch the Cypress Test Runner, where you can run your tests, select browsers, and view test results.

Remember to consult the Cypress documentation for further guidance on configuring and using Cypress for your specific testing needs: https://docs.cypress.io
