---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "IBM DevOps Deploy"
  text: "Plugins Documentation"
  image:
    light: "/deploy-black.png"
    dark: "/deploy-white.png"
    alt: "DevOps Deploy"
  actions:
    - theme: brand
      text: Get started with IBM DevOps Deploy
      link: https://www.ibm.com/docs/en/devops-deploy/8.1.1?topic=getting-started

    - theme: alt
      text: Learn more about Plug-ins
      link: https://www.ibm.com/docs/en/devops-deploy/8.1.1?topic=function-plug-ins

    - theme: alt
      text: Build Your Own Plugin
      link: https://community.ibm.com/community/user/blogs/shabaz-kowthalam/2024/11/25/creating-an-automation-plugin-for-devops-deploy

    - theme: alt
      text: Get help
      link: https://www.ibm.com/mysupport/s/?language=en_US


features:
-
  title: 7-Zip  [community plugin]
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The 7-Zip plug-in is a community plug-in. Community plug-ins are open source projects that are developed and supported by the IBM DevOps development community."
  link: "plugin/7-zip/README"
-
  title: AccuRev SCM
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "AccuRev is a client/server based source configuration management tool developed by AccuRev Inc. and maintained by MicroFocus."
  link: "plugin/AccuRevSourceConfig/README"
-
  title: Actifio  [partner plugin]
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "This plugin allows process steps to be created that leverage the instant mount capabilities for databases that Actifio’s data management platform provides. Downloads"
  link: "plugin/actifio/README"
-
  title: Amazon EC2
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Amazon Elastic Compute Cloud (EC2) provides virtual compute resources to users for running their own applications and allows scalable deployments. This plug-in provides steps for launching instances, terminating instances, associating IP addresses, waiting for instances, creating a security group, and getting the public DNS for the Amazon EC2 tool. The Amazon [AWS SDK](http://aws.amazon.com/sdkforjava/) is required and must be downloaded from Amazon separately. The[DevOps Deploy Blueprint Designer](/product/deploy/blueprint-designer/) can interact with AWS in a more declarative manner, and should be considered as a possible alternative to this plugin."
  link: "plugin/AmazonEC2/README"
-
  title: Amazon Web Services (AWS) Lambda  [community plugin]
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Amazon Web Services (AWS) Lambda provides on demand computing power for any application or service. Amazon manages the provisioning environments or servers. The AWS Lambda plugin enables you to create, delete, and invoke Lambda functions. The [AWS command line interface](https://aws.amazon.com/cli/) is required to run this plug-in and must be downloaded and installed separately. Source Code:"
  link: "plugin/aws-lambda/README"
-
  title: Ansible
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The Ansible plugin enables seamless integration of Ansible environment into the DevOps Deploy deployment process, allowing you to execute various commands. It offers a wide range of modules, each of which can be used as discrete steps within your automation pipeline. For any missing commands, you can execute them through the AShell plugin step."
  link: "plugin/ansible/README"
-
  title: Apache Ant
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Apache Ant is a command line tool that is used to automate the build and deployment of applications. This plug-in calls the Ant executable to run one or more targets defined in a specified Ant script file, and is very useful for quickly integrating legacy automation into your DevOps Deploy Processes. IBM DevOps Deploy agents include a distribution of Ant, which is used by default, but other versions can be used by providing the path to the Ant installation directory in your Process Step."
  link: "plugin/Ant/README"
-
  title: Apache HTTP Server
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The Apache HTTP Server is an open-source HTTP server that can be used on UNIX and Microsoft Windows operating systems. The Apache HTTP Server was developed by the Apache Software Foundation. The Apache HTTP Server provides a secure, efficient and extensible server that provides HTTP services that are compatible with the current HTTP standards. With the steps that this plug-in provides IBM DevOps Deploy processes can start and stop the Apache web servers."
  link: "plugin/Apache/README"
-
  title: Apache Hadoop  [community plugin]
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The Apache Hadoop software library is a framework that allows for the distributed processing of large data sets across clusters of computers using simple programming models. It is designed to scale up from single servers to thousands of machines, each offering local computation and storage. Rather than rely on hardware to deliver high-availability, the library itself is designed to detect and handle failures at the application layer, so delivering a highly-available service on top of a cluster of computers, each of which may be prone to failures. This plug-in enables you to run a Hadoop application on a NamedNode as part of an DevOps Deploy process."
  link: "plugin/apache-hadoop/README"
-
  title: Apache Tomcat
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Apache Tomcat is an open source web server and servlet container that is developed by the Apache Software Foundation (ASF). Tomcat implements the Java Servlet and the JavaServer Pages (JSP) specifications from Oracle Corporation, and provides a pure Java HTTP web server environment for Java code to run."
  link: "plugin/Tomcat/README"
-
  title: App Connect Enterprise
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "IBM App Connect Enterprise (ACE) combines the technologies of IBM Integration Bus with IBM App Connect Professional and cloud native technologies, creating a platform that supports the full breadth of integration needs across a modern digital enterprise. The ACE plug-in allows you to automate an integration bus environment."
  link: "plugin/ibm-ace/README"
-
  title: Apple Xcode  [community plugin]
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Overview The Apple Xcode plug-in includes steps that manage the continuous delivery of Apple iOS applications by interacting with simulators and devices. These steps include tasks that are related to installing and removing the application on devices and simulators, and running tests as part of a DevOps solution. The plug-in also includes steps for creating and deleting simulators."
  link: "plugin/apple-xcode/README"
-
  title: Apprenda  [partner plugin]
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The Apprenda plugin for IBM DevOps Deploy enables deployment of applications to Apprenda private PaaS and binding of Bluemix applications and services for Hybrid Cloud deployments. The plugin can be obtained on the releases tab of the GitHub project."
  link: "plugin/apprenda/README"
-
  title: ArgoCD
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Argo CD is a declarative, GitOps continuous delivery tool for Kubernetes. The Argo CD plug-in provides the ability to interact with Argo CD applications within IBM DevOps Deploy."
  link: "plugin/argocd/README"
-
  title: Artifactory
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Artifactory provides repository management for various types of resources. The Artifactory plug-in integrates with the Artifactory repository to import Maven, Gradle, Ivy, and NuGet artifacts, add properties to files and folders, modify build status, and more."
  link: "plugin/Artifactory/README"
-
  title: Artifactory Source Config
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The Artifactory source configuration plug-in includes steps to complete the following tasks:"
  link: "plugin/ArtifactorySourceConfig/README"
-
  title: ASOC [community plugin]
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The AppScan On Cloud plug-in includes steps to complete the following tasks:"
  link: "plugin/ASOC/README"
-
  title: Aspera
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Overview The Aspera plug-in uses the Aspera ascp (Aspera secure copy) client to upload and download files to and from an Aspera server. The Aspera ascp client uses the FASP transfer protocol, which can outperform TCP-based file transfer protocols such as FTP and HTTP. For more information about FASP transfer technology, see the [Aspera website](https://www.ibm.com/products/aspera)."
  link: "plugin/aspera/README"
-
  title: Autosys
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "CA Workload Automation AutoSys Edition is a workload automation tool. Previous versions of the tool were released as Unicenter AutoSys Job Management."
  link: "plugin/Autosys/README"
-
  title: Avnet Talos  [partner plugin]
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Talos is a middleware configuration automation tool that integrates with a variety of cloud providers as well as IBM DevOps Deploy and is intended to automate configuration changes and application deployments across both commercial and open source middleware platforms and appliances eliminating the need to write custom scripts for each type of middleware. Talos includes:"
  link: "plugin/avnet-talos/README"
-
  title: Azure DevOps Sourceconfig
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The Microsoft Azure DevOps source configuration plugin automates importing version artifacts from a Azure DevOps server."
  link: "plugin/AzureDevopsSourceconfig/README"
-
  title: BMC Remedy Action Request System
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Create, update, and check entries in BMC Remedy Action Request System. The plug-in depends on the arapi.jar file that is installed with BMC Remedy Action Request System and the path to that file must be specified as a step property (the plug-in should be run on the same system BMC Remedy Action Request System is installed on)."
  link: "plugin/Remedy/README"
-
  title: Box  [community plugin]
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Box is a file sharing and management cloud service. Using Box you can create, edit, review, and securely share documents and files on any device. This plug-in is developed and supported by the DevOps Deploy Community on the IBM® DevOps Services platform. Click **Visit Project** at the top of the page to navigate to the project for further information."
  link: "plugin/box/README"
-
  title: CA SCM (formerly Harvest)
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The CA SCM plug-in enables you to import artifacts as component version This DevOps Deploy plug-in works with all current supported versions of CA Harvest SCM."
  link: "plugin/air-plugin-CASCM/README"
-
  title: CICS CM (Beta)
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "**Note:** This plug-in is a beta release. The functionality and compatibility are subject to change. This information is for planning purposes only. The information herein is subject to change or removal without notice before the products described may become available."
  link: "plugin/CICS-CM/README"
-
  title: CICS TS
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "CICS® Transaction Server for z/OS provides scalable, general-purpose, transaction processing solutions for high-volume updates to shared data. Businesses have used CICS to differentiate themselves by creating, extending, and evolving their critical applications."
  link: "plugin/CICS/README"
-
  title: Chef
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "This plug-in provides steps that enable you to integrate existing automation for Chef into your IBM DevOps Deploy Processes. The plug-in ships with an embedded version of Chef Solo (11.16.4-1), which can be installed and used to execute a node or you can specify a different installation of Chef to use, but the plug-in step must execute on a system where Chef is accessible locally."
  link: "plugin/Chef/README"
-
  title: Citrix NetScaler
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Citrix NetScaler is a platform that includes the following features: load balancing and content switching, data compression, content caching, SSL acceleration, network optimization, application visibility and application security. The NetScaler plug-in includes steps to enable and disable servers, server groups, and services on NetScaler servers."
  link: "plugin/Netscaler/README"
-
  title: Cloud Foundry [community plugin]
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The Cloud Foundry plug-in uses the CloudFoundry command line utility to interact with applications in a target Cloud Foundry system."
  link: "plugin/cloud-foundry/README"
-
  title: Cloudant  [community plugin]
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The Cloudant Plugin is an automation based plugin. It is used to manage documents stored in Cloudant. This plug-in is developed and supported by the DevOps Deploy Community on the IBM DevOps Services platform. Click the “Visit Project” button at the top of the page to navigate to the project for further information."
  link: "plugin/cloudant/README"
-
  title: CyberArk  [partner plugin]
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "CyberArk Application Identity Manager, part of the CyberArk Privileged Account Security Solution, enables organizations to protect critical business systems by eliminating hard-coded credentials from application scripts, configuration files and software code, and removing SSH keys from servers where they are used by applications and scripts. Application Identity Manager offers agent and agentless deployment options to best meet the security and availability requirements of various business applications. The product is built on the CyberArk Shared Technology Platform, delivering scalability, high availability and centralized management and reporting."
  link: "plugin/cyberark/README"
-
  title: DBmaestro [partner plugin]
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "![DBmaetro Logo](logo-300x74.png)DBmaestro TeamWork is the leading DevOps for Database solution that brings true continuous delivery – complete with the best practices proven effective for application development – to the database. DBmaestro TeamWork integration with IBM DevOps Deploy, can help your team to safely include the database component within the existing deployment processes of the application tiers from building (generating the upgrade SQL scripts) to verifying the environments are identical (no drifts) to deploying (executing the planned upgrade SQL scripts) while documenting the changes. Benefits:"
  link: "plugin/dbmaestro/README"
-
  title: Datical DB  [partner plugin]
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Datical DB automates and simplifies deployment and configuration of database schema updates for organizations that struggle with database schema change across the Application Release Lifecycle. Datical DB is used by people who develop, deploy, and maintain applications and/or have DevOps, Agile, Cloud or Big Data initiatives."
  link: "plugin/datical-db/README"
-
  title: Dimensions
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The Dimensions Source Config plug-in enables you to manually or automatically import artifacts from a Dimensions CM into an IBM DevOps Deploy Component version."
  link: "plugin/DimensionsSourceConfig/README"
-
  title: Docker
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Docker automates the deployment of applications inside Linux containers. This plug-in maps Docker images to components in IBM DevOps Deploy. The included component template provides a process for running Docker containers. This automation plug-in requires the Docker source configuration plug-in. The IBM-supported source config plug-in is available [here](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/DockerSourceConfig/)."
  link: "plugin/docker-plugin/README"
-
  title: Docker Compose
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The Docker Compose plug-in for IBM DevOps Deploy automates deployment and resource creation for services. Unsure where to begin? Visit [Getting Started with IBM DevOps Deploy and Containers](https://community.ibm.com/community/user/wasdevops/blogs/osman-burucu/2022/07/22/getting-started-with-devops-deploy-and-containe/)."
  link: "plugin/docker-compose/README"
-
  title: Docker Registry
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Use the Docker source configuration plug-in to manually or automatically create component versions from a Docker registry or the IBM Container Service. The plug-in works by detecting Docker registry image tags and creating associated component versions for the tag. Unsure where to begin? Visit [Getting Started with IBM DevOps Deploy and Containers](https://community.ibm.com/community/user/wasdevops/blogs/osman-burucu/2022/07/22/getting-started-with-devops-deploy-and-containe/)."
  link: "plugin/DockerSourceConfig/README"
-
  title: F5 BIG-IP
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "This plug-in provides steps to interact with F5’s BIG-IP family of products. The plug-in communicates with the BIG-IP systems by using the iControl API."
  link: "plugin/F5/README"
-
  title: File System
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The File System source config plug-in enables one to manually import artifacts from the file system into a folder. The artifacts are not stored into version folder, using this plug-in you must manually create versions. To import artifacts into version folders, use the [File System (Versioned)](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/FileSystemVersionedSourceConfig/) plug-in. Compatibility"
  link: "plugin/FileSystemSourceConfig/README"
-
  title: File System (Versioned)
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The File System (Versioned) source config plug-in imports source artifacts with versions from a file system. You can manually or automatically import artifacts from the file system into a directory structure that represents the artifact versions. Compatibility"
  link: "plugin/FileSystemVersionedSourceConfig/README"
-
  title: File Utils
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The File Utils plug-in provides useful steps for manipulating files and directories."
  link: "plugin/FileUtils/README"
-
  title: FileNet - IBM Case Manager
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "IBM Case Manager simplifies the job of designing and building a case management system and provides a graphical user interface for case workers to easily manage cases. IBM Case Manager is deployed in an application server, and uses FileNet P8 to access and store content and solution assets. The IBM Case Manager plug-in for DevOps deploy utilizes the configmgr\_cl command-line interface to automate the tasks normally completed via the configmgr UI.All of the steps were tested with IBM Case Manager version 5.3.1. In order for all commands to function properly, version 5.2.1 or later is required."
  link: "plugin/FileNet-CaseManager/README"
-
  title: Git
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The Git source config plug-in enables you to manually or automatically import artifacts from a Git source-code management (SCM) repository into an IBM DevOps Deploy Component version. This plug-in interacts with Git by using the git command line interface, which must be available locally."
  link: "plugin/GitSourceConfig/README"
-
  title: Git Install  [community plugin]
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency. Leverage this plugin to install Git on a target server."
  link: "plugin/git-install/README"
-
  title: GitLab-Generic-Packages
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Gitlab Generic Packages automation plufgin. Initial release of this plugin."
  link: "plugin/gitlab-generic-packages/README"
-
  title: GitLab-Sourceconfig-Generic-Packages
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Gitlab Generic Packages Initial release of this plugin."
  link: "plugin/gitlab-sourceconfig-generic-packages/README"
-
  title: GitHub-Release
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The GitHub Release plug-in is a source configuration plug-in that creates a component version on the DevOps Deploy server for a specified GitHub repository release being imported. The plug-in can be used to import ZIP and TAR artifacts from GitHub."
  link: "plugin/sourceconfig-github-release/README"
-
  title: Google Android SDK
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "View a demo of this plug-in [here](https://www.youtube.com/watch?v=Qrw8hz8Jv9c) The Android SDK plug-in includes steps to achieve continuous delivery of Android applications by interacting with emulators and physical devices. Refer to the PDF documentation for details on software requirements and usage. The plug-in includes process steps that are related to the following categories:"
  link: "plugin/plugin-air-Android/README"
-
  title: Groovy
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Groovy is an object-oriented programming language for the Java platform and the language of choice for writing IBM DevOps Deploy plug-ins. The DevOps Deploy agent comes with a version of Groovy that is preinstalled, which can be used to run your script or you can specify a different installation to use. Platform Support"
  link: "plugin/Groovy/README"
-
  title: HCL DevOps Test Hub
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "HCL DevOps Test Hub (Test Hub) brings together test data, test environments, and test runs and reports into a single, web-based browser for testers and non-testers. This plug-in integrate Test Hub with DevOps Deploy to automate the process of test runs."
  link: "plugin/HCLDevOpsTestHub/README"
-
  title: HCL DevOps Test Performance
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "HCL DevOps Test Performance is a performance testing solution that validates the scalability of web and server applications. Test Performance identifies the presence and cause of system performance bottlenecks and reduces load testing complexity. The HCL DevOps Test Performance plug-in for DevOps Deploy provides a step to run performance tests on the same system in which Test Performance is installed."
  link: "plugin/HCLDevOpsTestPerf/README"
-
  title: HCL DevOps Test UI
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "HCL DevOps Test UI (Test UI) is an automated functional testing and regression testing tool. This software provides automated testing capabilities for functional, regression, GUI, and data-driven testing. You can use the Functional Test perspective to test the Java, SAP, and other HTML applications. The IBM DevOps Deploy plug-in for Test UI includes process steps for running the Functional test scripts on DevOps Deploy agent computers remotely."
  link: "plugin/HCLDevOpsTestUI/README"
-
  title: HCL DevOps Test UI-WebUI
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "HCL DevOps Test UI is an automated functional testing and regression testing tool. This software provides automated testing capabilities for functional, regression, GUI, and data-driven testing. You can use the Functional Test perspective to test the Java, SAP, and other HTML applications. The IBM DevOps Deploy plug-in for HCL DevOps Test UI - WebUI includes process steps for running the Web UI tests on DevOps Deploy agent computers remotely."
  link: "plugin/HCLDevOpsTestUIWebUI/README"
-
  title: HCL DevOps Test Virtualization
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "HCL DevOps Test Virtualization is a software that is used for creating, maintaining, publishing, and running message-based stubs and database stubs. You can use this plug-in to integrate DevOps Test Vitualization server with DevOps Deploy to execute virtual services from the DevOps Deploy server."
  link: "plugin/HCLDevOpsTestVirtualization/README"
-
  title: HCL OneTest API
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The HCL OneTest API plug-in for DevOps Deploy provides a step to run integration tests on the same system in which HCL OneTest API is installed."
  link: "plugin/HCLOneTestAPI/README"
-
  title: HCL OneTest Performance
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The HCL OneTest Performance plug-in for DevOps Deploy provides a step to run performance tests on the same system in which HCL OneTest Performance is installed."
  link: "plugin/HCLOneTestPerf/README"
-
  title: HCL OneTest Server
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The HCL OneTest Server plug-in for DevOps Deploy provides a step to Run HCL OneTest Server test."
  link: "plugin/onetest-server/README"
-
  title: HCL OneTest UI
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The HCL OneTest UI plug-in for DevOps Deploy provides a step to run functional tests on the same system in which HCL OneTest UI is installed."
  link: "plugin/HCLOneTestUI/README"
-
  title: HCL OneTest Virtualization
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The HCL OneTest Virtualization plug-in for DevOps Deploy provides a step to Run HCL OneTest virtualization."
  link: "plugin/HCLOneTestVirtualization/README"
-
  title: HCL OneTest WebUI
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The HCL OneTest WebUI plug-in for DevOps Deploy provides a step to run functional tests on the same system in which HCL OneTest WebUI is installed."
  link: "plugin/HCLOneTestWebUI/README"
-
  title: HP LoadRunner
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The HP LoadRunner plugin provides steps to integrate with HP LoadRunner. Using this plugin you can run test scenarios, analyze the results, and generate a reports."
  link: "plugin/hp-loadrunner/README"
-
  title: HP Unified Functional Testing (QTP)
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "HP QuickTest Professional provides functional and regression test automation for software applications and environments, and can be used for enterprise quality assurance. The QTP plugin executes QTP tests and can set a status of fail on a deployment if a test fails."
  link: "plugin/QTP/README"
-
  title: IBM API Connect
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "IBM API Connection is an application programming interface (API) management platform that uses Loopback to create, assemble, and manage web APIs. The IBM API Connection plug-in provides steps to publish API Definitions and Loopback Apps to an API Connect server. This plug-in communicates to API Connect through the use of the API command-line toolkit(apic)."
  link: "plugin/apiconnect/README"
-
  title: IBM AppScan Enterprise
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "IBM AppScan Enterprise enables organizations to mitigate application security risk and achieve regulatory compliance. This plug-in includes steps to run AppScan Enterprise scans and retrieve scan results in IBM DevOps Deploy processes."
  link: "plugin/appscan/README"
-
  title: IBM BigFix
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "IBM BigFix helps reduce the time, cost and risk of managing virtually any mix of endpoints leveraging out-of-the-box automation scripts. It streamlines asset discovery, software distribution, and power management. It also provides the critical capability to manage and secure servers–whether they’re physical, virtual or remotely located. Use the IBM BigFix plug-in to start BigFix actions from IBM DevOps Deploy processes."
  link: "plugin/bigfix/README"
-
  title: IBM Bluemix Auto-Scaling
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "This plug-in provides steps to interact with the Auto-Scaling for Bluemix service by using the REST API. Currently the plug-in supports attaching an Auto-Scaling policy to a Bluemix application with authorization support from the IBM Containers plug-in."
  link: "plugin/bluemix-autoscale/README"
-
  title: IBM Business Process Manager (WebSphere BPM)
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "IBM Business Process Manager is a comprehensive business process management platform, providing full visibility and insight to managing business processes. It provides tooling and a runtime environment for process design, execution, monitoring and optimization, along with basic system integration support. The product can be configured to support various levels of complexity and involvement with business process management."
  link: "plugin/WebSphereBPMSourceConfig/README"
-
  title: IBM Business Process Manager (WebSphere BPM) for IBM DevOps Deploy
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "IBM Business Process Manager is a comprehensive business process management platform, providing full visibility and insight to managing business processes. It provides tooling and a runtime environment for process design, execution, monitoring and optimization, along with basic system integration support. The product can be configured to support various levels of complexity and involvement with business process management. Plugin to deploy process application snapshots on an online or offline Process Server. Refer to the Documentation Usage page for walkthroughs."
  link: "plugin/WebSphereBPM/README"
-
  title: IBM Cognos
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The IBM Cognos plug-in exports and imports content to and from a Cognos content store. This plug-in is based on the Cognos 10.2 SDK."
  link: "plugin/Cognos/README"
-
  title: IBM Cognos Analytics
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The Cognos Analytics plug-in provides integration with a Cognos Analytics server to automate importing and exporting Cognos store content. This plug-in supports Cognos Analytics 11.1."
  link: "plugin/cognos-analytics/README"
-
  title: IBM Containers
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The IBM Containers plug-in uses the Cloud Foundry IBM® Containers command-line utility (cf ic) to interact with containers running in IBM Bluemix®."
  link: "plugin/cloud-foundry-ibm-containers/README"
-
  title: IBM DataPower Configuration Manager
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The IBM DevOps Deploy plugin for DataPower Configuration Manager provides the ability to automate updates to DataPower configuration as part of the software delivery process. Configuration information is stored in DataPower export files, which contain the “golden” version of services or objects, along with simple XML files that define the changes necessary for each service in each environment. These XML files can be created or modified using an XML editor. The plugin also allows easy upload of files, including keys and certificates, as well as easy customization of validation credential objects and load balancer groups, among others. The component-level and application-level processes provided by Deploy fit naturally into the requirements for DataPower configuration management:"
  link: "plugin/datapower/README"
-
  title: IBM Db2 for z/OS Package
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "This package includes a white paper and an importable sample template that describes a process to deploy applications that use Db2 for z/OS. The deployment process covers the tasks for the following activities:"
  link: "plugin/ibm-db2-for-z-os-package/README"
-
  title: IBM DevOps Test Hub
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "IBM DevOps Test Hub (Test Hub) brings together test data, test environments, and test runs and reports into a single, web-based browser for testers and non-testers. This plug-in integrate Test Hub with DevOps Deploy to automate the process of test runs."
  link: "plugin/IBMDevOpsTestHub/README"
-
  title: IBM DevOps Test Performance
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "IBM DevOps Test Performance is a performance testing solution that validates the scalability of web and server applications. Test Performance identifies the presence and cause of system performance bottlenecks and reduces load testing complexity. The IBM DevOps Test Performance plug-in for DevOps Deploy provides a step to run performance tests on the same system in which Test Performance is installed."
  link: "plugin/IBMDevOpsTestPerf/README"
-
  title: IBM DevOps Test UI
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "IBM DevOps Test UI (Test UI) is an automated functional testing and regression testing tool. This software provides automated testing capabilities for functional, regression, GUI, and data-driven testing. You can use the Functional Test perspective to test the Java, SAP, and other HTML applications. The IBM DevOps Deploy plug-in for Test UI includes process steps for running the Functional test scripts on DevOps Deploy agent computers remotely."
  link: "plugin/IBMDevOpsTestUI/README"
-
  title: IBM DevOps Test UI-WebUI
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "IBM DevOps Test UI is an automated functional testing and regression testing tool. This software provides automated testing capabilities for functional, regression, GUI, and data-driven testing. You can use the Functional Test perspective to test the Java, SAP, and other HTML applications. The IBM DevOps Deploy plug-in for IBM DevOps Test UI - WebUI includes process steps for running the Web UI tests on DevOps Deploy agent computers remotely."
  link: "plugin/IBMDevOpsTestUIWebUI/README"
-
  title: IBM DevOps Test Virtualization
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "IBM DevOps Test Virtualization is a software that is used for creating, maintaining, publishing, and running message-based stubs and database stubs. You can use this plug-in to integrate DevOps Test Vitualization server with DevOps Deploy to execute virtual services from the DevOps Deploy server."
  link: "plugin/IBMDevOpsTestVirtualization/README"
-
  title: IBM Globalization Pipeline  [community plugin]
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "IBM Globalization Pipeline is an IBM Bluemix service that provides rapid machine translation for application developers. IBM Globalization Pipeline plugin for DevOps Deploy is a component for you to integrate IBM Globalization Pipeline into your build and deploy process. It takes English resource files as input, and provides real time machine translation for the following languages: Simplified Chinese, Traditional Chinese, French, German, Italian, Japanese, Korean, Portuguese, Spanish, and Arabic. It allows application developers to leverage the machine translation output by invoking the restful API or downloading the translation."
  link: "plugin/ibm-globalization-pipeline/README"
-
  title: IBM IMS
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "IBM Information Management System (IMS), built on IBM System z, is the lowest cost transaction and hierarchical database management system for mission critical OLTP. This plug-in facilitates the simplification of IMS-related operations and automation of IMS application deployment, ultimately allowing you to take advantage of the design process, versioning, and approvals support in IBM DevOps Deploy for continuous delivery in an agile environment."
  link: "plugin/IMSz/README"
-
  title: IBM InfoSphere DataStage
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "IBM InfoSphere DataStage integrates data across multiple systems using a high performance parallel framework, and it supports extended metadata management and enterprise connectivity. The scalable platform provides more flexible integration of all types of data, including big data at rest (Hadoop-based) or in motion (stream-based), on distributed and mainframe platforms. This InfoSphere DataStage plugin allows for the import and export of .isx and .dsx files."
  link: "plugin/datastage/README"
-
  title: IBM InfoSphere Optim
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "IBM InfoSphere Optim Test Data Management allows users to extract and mask test data from production to safely test their code. This plugin runs test data management commands through InfoSphere Optim."
  link: "plugin/optim/README"
-
  title: IBM Installation Manager
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "IBM Installation Manager is a tool that you can use to install and maintain IBM software packages. Wizards guide you through the steps to install, modify, update, roll back, or uninstall IBM products. Use Installation Manager to install individual software packages on your local computer, or in conjunction with the IBM Packaging Utility to install software for an enterprise scenario. See the [IBM Installation Manager product help](http://www.ibm.com/support/knowledgecenter/SSDV2W/) to review feature details for all versions of Installation Manager and Packaging Utility."
  link: "plugin/ibm-installation-manager/README"
-
  title: IBM Instana
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Instana is an automated Application Performance Management (APM) solution designed specifically for the challenges of managing microservice and cloud-native applications."
  link: "plugin/ibm-instana/README"
-
  title: IBM Integration Bus (IIB) plugin Deploy step for zOS
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "IBM Integration Bus, from the WebSphere product family, enables business information to flow between disparate applications across multiple hardware and software platforms. The plug-in includes only deploy step from original [IBM Integration plugin](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/WebSphereMessageBroker-CMP/) optimized to improve CPU time."
  link: "plugin/zos-ibm-integration-bus-ucd/README"
-
  title: IBM Integration Bus (formerly WebSphere Message Broker) - CMP
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "IBM Integration Bus, from the WebSphere product family, enables business information to flow between disparate applications across multiple hardware and software platforms. The plug-in includes steps that can be used when designing a component process to deploy broker archives and to start, stop or delete message flows by using the IBM Integration API. For information on usage, including a sample of how to install IBM Integration Bus using IBM DevOps Deploy, see [How to automate IBM Integration Bus installation and deployments using IBM DevOps Deploy and Chef](https://www.urbancode.com/resource/how-to-automate-ibm-integration-bus-installation-and-deployments-using-ibm-devops-deploy-and-chef/). This plugin supports versions 9 & 10 of IBM Integration Bus (IIB). We no longer support WebSphere Message Broker (Versions 7 & 8). If you are looking for support for WebSphere Message Broker, please download a version of this plugin that is less than version 40."
  link: "plugin/WebSphereMessageBroker-CMP/README"
-
  title: IBM MQ for z/OS - Generate MQSC Commands \[community plugin\]
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "IBM MQ for z/OS – Generate MQSC Commands"
  link: "plugin/ibm-mq-for-z-os-generate-mqsc-commands/README"
-
  title: IBM MaaS360  [community plugin]
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "This plug-in provides access to utilities that are related to integrating with IBM MaaS360 via web services. For example, you can use this plug-in to request an authentication token. This plug-in is developed and supported by the DevOps Deploy Community on the IBM® DevOps Services platform. Click **Visit Project** at the top of the page to navigate to the project for further information."
  link: "plugin/ibm-maas360/README"
-
  title: IBM Maximo
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The Maximo plugin allows the user to upload and deploy configuration using migration manager."
  link: "plugin/ibm-maximo/README"
-
  title: IBM MobileFirst Platform (formerly Worklight)
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The IBM MobileFirst Platform plug-in provides functionality for deploying artifacts to an IBM MobileFirst Platform Server. Provides support for deploying mobile application artifacts to an IBM MobileFirst Platform Server. You can use IBM DevOps Deploy to define a DevOps deployment solution for IBM MobileFirst mobile artifacts. By defining a deployment using IBM DevOps Deploy with the IBM MobileFirst Platform plugin, mobile teams can respond to feedback faster and have a repeatable process with reduced risk. Check out how to go from manual to continuous automated deployment of mobile MobileFirst Platform applications in this [article](http://www.ibm.com/developerworks/rational/library/worklight-mobile-devops/index.html)."
  link: "plugin/air-worklight/README"
-
  title: IBM MobileFirst Platform Foundation on IBM Containers
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The IBM MobileFirst Platform Foundation on IBM Containers plug-in includes steps to create database dependencies, build containers, run containers, and deploy artifacts to an IBM MobileFirst Server that is running in a container. You can use IBM DevOps Deploy to define a DevOps deployment solution for your MobileFirst Platform Foundation artifacts. Using this type of solution, mobile teams can typically respond to feedback faster and have a repeatable process with reduced risk."
  link: "plugin/MFPFC/README"
-
  title: IBM Operational Decision Manager (ODM)
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Overview IBM® Operational Decision Manager (ODM) is a full-featured, easy-to-use platform for capturing, automating, and governing frequent, repeatable business decisions. It consists of two components, IBM Decision Center and IBM Decision Server. They form the platform for managing and executing business rules and business events to help you make decisions faster, improve responsiveness, minimize risks, and seize opportunities."
  link: "plugin/ibm-odm/README"
-
  title: IBM Operational Decision Manager (ODM) Source Config
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The IBM Operational Decision Manager (ODM) source configuration plug-in includes steps to complete the following tasks:"
  link: "plugin/ibm-odm-source-config/README"
-
  title: IBM Rational Asset Manager
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "This plug-in provides steps that enable you to work with Rational Asset Manager assets in your IBM DevOps Deploy Processes."
  link: "plugin/RAM/README"
-
  title: IBM Rational Asset Manager for IBM DevOps Deploy
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "IBM Rational Asset Manager (RAM) is a collaborative software development asset management tool used to identify, manage and govern the design, development and consumption of software assets. The IBM Rational Asset Manager plug-in automates importing artifacts from Rational Asset Manager projects."
  link: "plugin/RAMSourceConfig/README"
-
  title: IBM Rational Automation Framework for WebSphere  [community plugin]
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "IBM Rational Automation Framework for WebSphere provides capabilities to accomplish the complex tasks involved in managing your WebSphere environment. The product is designed specifically to automate installation and patching, configuration change management, and application deployment. It supports WebSphere Application Server, IBM HTTP Server, and WebSphere Portal products as target systems. This plugin exposes steps to call a Rational Automation Framework action or automation plan."
  link: "plugin/ibm-rational-automation-framework-for-websphere/README"
-
  title: IBM Rational ClearCase
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The IBM Rational Clearcase plug-in enables you to manually or automatically import artifacts from a ClearCase respository into an IBM DevOps Deploy Component version, using either Dynamic or Snapshot Views. The plug-in supports both Base ClearCase and Unified Change Management (UCM) source-code management system."
  link: "plugin/ClearCaseSourceConfig/README"
-
  title: IBM Rational ClearQuest  [community plugin]
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "IBM Rational ClearQuest is a fully customizable database workflow application development and production system. It provides flexible change and defect tracking, customizable processes, near real-time reporting and lifecycle traceability for better visibility and control of the software development lifecycle. IBM Rational ClearQuest provides scalable, multiplatform support to any size organization so you can continue to customize processes as your development needs evolve. The IBM Rational ClearQuest plug-in contains a simple step to add Related Change Requests to records."
  link: "plugin/ibm-rational-clearquest/README"
-
  title: IBM Rational Functional Tester (RFT)
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "IBM Rational Functional Tester is an automated functional testing and regression testing tool. This software provides automated testing capabilities for functional, regression, GUI, and data-driven testing. With the Web UI Test perspective, you can test the modern Web UI applications that use HTML5, Dojo, and jQuery frameworks. You can use the Functional Test perspective to test the Java, SAP, and other HTML applications."
  link: "plugin/RFT-UCD/README"
-
  title: IBM Rational Integration Tester (RIT)
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The Green Hat plug-in for IBM DevOps Deploy that was shipped earlier has been split into the following two parts in the current release:"
  link: "plugin/RIT-UCD/README"
-
  title: IBM Rational Performance Tester (RPT)
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "IBM® Rational® Performance Tester is a performance testing solution that validates the scalability of web and server applications. Rational Performance Tester identifies the presence and cause of system performance bottlenecks and reduces load testing complexity. With the IBM Rational Test Workbench – Performance Tester plugin for DevOps Deploy, you can automate the execution of tests, compound tests, and schedules."
  link: "plugin/RPT-UCD/README"
-
  title: IBM Rational Quality Manager (RQM)
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The Rational Quality Manager plugin invokes Rational Quality Manager test suites or test cases to run automatic test scripts."
  link: "plugin/ibm-rational-quality-manager-rqm/README"
-
  title: IBM Rational Team Concert - Build
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "No source configuration plug-in is required to use Rational Team Concert builds in IBM DevOps Deploy.  View a demo of this capability [here](https://youtu.be/1WSpLKsekr0). Read about a full deployment architecture and process using WAS, BPM, and RTC [here](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/07/20/bpserver)."
  link: "plugin/ibm-rational-team-concert-build/README"
-
  title: IBM Rational Team Concert - SCM
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The Rational Team Concert SCM source configuration extracts files from the Rational Team Concert SCM into an DevOps Deploy component version. The source files can be pulled from a snapshot or live stream. For supported platforms, and additional information, refer to the plug-in documentation link on the right."
  link: "plugin/air-plugin-RTC-scm/README"
-
  title: IBM Rational Team Concert Work Items
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The RTC Work Items plugin provides steps for the build to comment and change the status of work items found in RTC."
  link: "plugin/plugin-air-RTC-WorkItems/README"
-
  title: IBM Rational Test Automation Server (RTAS)
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The Rational Test Automation Server plug-in provides for integration with an Rational Test Automation Server server to automate tests within a deployment process using DevOps Deploy."
  link: "plugin/RTAS-UCD/README"
-
  title: IBM Rational Test Virtualization Server (RTVS)
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The Green Hat plug-in for DevOps Deploy that was shipped earlier has been split into the following two parts in the current release:"
  link: "plugin/RTVS-UCD/README"
-
  title: IBM Rational Test Workbench Web UI Tester
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "IBM® Rational® Test Workbench provides a comprehensive test automation solution for functional testing, regression testing, integration technologies and performance and scalability testing. It helps you build intelligent and interconnected enterprise applications that can be deployed on traditional and cloud infrastructures.  With the IBM Rational Test Workbench Web UI Tester plugin for DevOps Deploy, you can automate the execution of functional tests and compound tests. This plugin cannot be used with the Rational Test Workbench Web UI Tester Starter Edition."
  link: "plugin/RFT-WebUI-UCD/README"
-
  title: IBM Security Access Manager (WebSEAL)  [community plugin]
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "IBM Security Access Manager enables businesses to more securely adopt web, mobile, and cloud technologies and simplifies user access management for employees and consumers. It simplifies and secures user experiences with single sign-on across applications and protects critical assets using strong multi-factor authentication and risk-based access. It also enables the mobile enterprise with mobile access control policies that integrate with mobile device management, mobile application development and malware detection solutions. Furthermore, it helps bridge the access control gap between on-premise and cloud environments. This community supported plug-in will update a Reverse Proxy’s configuration entry."
  link: "plugin/webseal/README"
-
  title: IBM Sterling B2B Integrator  [community plugin]
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "IBM Sterling B2B Integrator integrates critical B2B processes, transactions, and relationships. This plug-in includes steps to manage and automate the functionality and configuration of an IBM Sterling B2B Integrator server."
  link: "plugin/ibm-sterling-b2b-integrator/README"
-
  title: IBM DevOps Build
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Get artifacts from IBM DevOps Build."
  link: "plugin/uBuildSourceConfig/README"
-
  title: IBM DevOps DBUpgrader
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The DBUpgrader plug-in helps to manage database changes including schema updates and rollbacks. The plug-in uses a proprietary formatted XML file in conjunction with a version table in your database that tracks what changes have been applied. This plug-in is used when performing upgrades of IBM DevOps Deploy Applications."
  link: "plugin/DBUpgrader/README"
-
  title: IBM DevOps Deploy Agent Package for Dynamic Cloud Environments
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The Install IBM® DevOps Deploy Agent package automatically installs agents on cloud resources. When you provision an environment from the cloud system, this script package installs an agent on each node in the cloud resource request. Then, these agents contact the IBM DevOps Deploy server and the server adds them to the environment."
  link: "plugin/AgentScript/README"
-
  title: IBM DevOps Deploy Applications
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "IBM DevOps Deploy is an *Application Deployment Automation* tool that provides facilities for modeling your applications, including its components, run-time environments and automated processes. Applications are the central point of focus of IBM DevOps Deploy and this plug-in provides steps for interacting with Applications on the Deploy server.  **Platform Support:**"
  link: "plugin/uDeploy-Application/README"
-
  title: IBM DevOps Deploy Components
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "DevOps Deploy application release automation tool. For more information, see [DevOps Deploy](https://www.ibm.com/cloud/urbancode) Component for creating and managing IBM DevOps Deploy components."
  link: "plugin/uDeploy-Component/README"
-
  title: IBM DevOps Deploy Configuration Management
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Configuration templating system built into DevOps Deploy. Configuration Templates are text files held within DevOps Deploy that have placeholders for variable configuration. This plugin writes out these configuration files at deployment time substituting in environment or target specific properties. This plugin will also read in properties from a file."
  link: "plugin/uDeployConfigManagement/README"
-
  title: IBM DevOps Deploy Environments
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "IBM DevOps Deploy is an application release automation tool. For more information, see [DevOps Deploy](https://www.ibm.com/cloud/urbancode). Plugin for creating and managing IBM DevOps Deploy environments."
  link: "plugin/uDeploy-Environment/README"
-
  title: IBM DevOps Deploy General Utilites
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "This plugin provides various utilities for use in your DevOps Deploy process."
  link: "plugin/general-utilities/README"
-
  title: IBM DevOps Deploy Process
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "This IBM® DevOps Deploy Process plug-in supports interaction with processes and process requests within IBM DevOps Deploy. Using this plug-in, you can create or remove a link on a process request that can direct users to supplementary information related to the process execution."
  link: "plugin/uDeploy-Process/README"
-
  title: IBM DevOps Deploy Resources
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "IBM DevOps Deploy is an application release automation tool. For more information, see [DevOps Deploy](https://www.ibm.com/cloud/urbancode). This plug-in manages resources in IBM DevOps Deploy."
  link: "plugin/uDeploy-Resource/README"
-
  title: IBM DevOps Deploy System
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "IBM DevOps Deploy application release automation tool. For more information, see [DevOps Deploy](https://www.ibm.com/cloud/urbancode) Plugin for managing IBM DevOps Deploy system properties and global settings."
  link: "plugin/uDeploy-System/README"
-
  title: IBM DevOps Deploy Tools
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The Deploy Tools plug-in provides several steps that help verify the successful deployment of an application."
  link: "plugin/DeployTools/README"
-
  title: IBM DevOps Deploy Versioned File Storage
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The IBM DevOps Versioned File Storage plug-in includes steps to upload and download artifacts. Use this plug-in with IBM DevOps Deploy to upload artifacts to an DevOps Deploy versioned file storage repository."
  link: "plugin/UrbancodeVFS/README"
-
  title: IBM DevOps Deploy Versions
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "This plugin provides capabilities for editing Component Versions in IBM DevOps Deploy."
  link: "plugin/uDeploy-Version/README"
-
  title: IBM DevOps PHP CLI Tool  [community plugin]
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The IBM Urban Code PHP CLI tool provides the following capabilities:"
  link: "plugin/PHPCLI/README"
-
  title: IBM DevOps Package Manager
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Plugin integration for DevOps Package Manager."
  link: "plugin/UrbanCodePackageManager/README"
-
  title: IBM DevOps Release
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "This plug-in provides several steps for retrieving and updating information in IBM DevOps Release from your IBM DevOps Deploy processes, allowing for tighter integration and easier tracking of release status."
  link: "plugin/ucr-plugin/README"
-
  title: IBM DevOps uBuild
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The IBM DevOps Build plugin for Deploy provides steps to download artifacts from DevOps Build and run uBuild workflows."
  link: "plugin/uBuild/README"
-
  title: IBM VDP  [partner plugin]
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The plugin allows process steps to be created that leverage the instant mount capabilities for Microsoft SQL Server and Oracle that IBM’s VDP data management platform provides. Downloads:"
  link: "plugin/ibm-vdp/README"
-
  title: IBM WebSphere Commerce
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The WebSphere Commerce plug-in enables you to do the following on the WebSphere Commerce cells: Download, configure and deploy a server deployment package to a WebSphere Commerce server."
  link: "plugin/WebSphereCommerce/README"
-
  title: IBM WebSphere Liberty
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "This plug-in includes steps for installing and updating applications in the IBM WebSphere Liberty Profile, working with the profile configuration and managing Liberty collectives."
  link: "plugin/WebSphereLiberty/README"
-
  title: IBM WebSphere Portal
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "WebSphere Portal is a framework that includes a runtime server, services, tools, and other features. WebSphere Portal is used to integrate enterprises into a single, customizable interface called a portal. An enterprise portal combines components, applications, processes, and content from a wide variety of sources into a unified presentation, which users can access from a wide variety of devices. The WebSphere Portal plug-in deploys WebSphere Portal artifacts such as themes, skins, portlets, and Portal Application Archive files."
  link: "plugin/WebSpherePortal/README"
-
  title: IBM WebSphere Service Registry and Repository
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "This WSRR (WebSphere Service Registry and Repository) plug-in enables you to do the following:"
  link: "plugin/WSRR/README"
-
  title: IBM Workload Automation  [community plugin]
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The IBM Workload Automation plug-in is a facility provided to help you moving workload automation definitions from one environment to another, in a distributed or z/OS environment. You can download a job stream definition from the Dynamic Workload Console, then IBM DevOps Deploy applies the appropriate environment parameters for the importing process that is performed by the plug-in’s steps. The IBM Workload Automation plug-in is a community plug-in. Community plug-ins are open source projects that are developed and supported by the IBM DevOps Development Community. Click Visit Project at the top of the page to go to the project for further information."
  link: "plugin/ibm-workload-automation/README"
-
  title: IBM-MQ
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "IBM® MQ is robust messaging middleware that simplifies and accelerates the integration of diverse applications and business data across multiple platforms. IBM MQ facilitates the assured, secure and reliable exchange of information between applications, systems, services and file by sending and receiving message data via messaging queues, thereby simplifying the creation and maintenance of business applications. It delivers Universal Messaging with a broad set of offerings to meet enterprise-wide messaging needs, as well as connectivity for the internet of things and mobile devices. With this plugin, you can directly interact with WebSphere MQ with dozens of out of the box steps."
  link: "plugin/WebSphereMQ/README"
-
  title: InfoSphere-ISD
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The InfoSphere Information Services Director (ISD) plugin integrates with IBM InfoSphere Information Services Director to allow exporting and importing projects, applications, and/or services."
  link: "plugin/infosphere-isd/README"
-
  title: Informatica  [community plugin]
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Overview Informatica PowerCenter is an enterprise data integration platform. This is a community plugin."
  link: "plugin/Informatica/README"
-
  title: JBoss Application Server
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "JBoss Application Server is a open-source application server for Java EE. This plug-in interacts with the jboss-cli command line tool to provide access to JBoss operational and configuration tasks through the IBM DevOps Deploy process designer."
  link: "plugin/JBoss/README"
-
  title: JBoss-ON  [community plugin]
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "JBoss Operations Network (JBoss ON) is network management software for deploying, managing, and monitoring JBoss middleware as well as Apache Tomcat, Apache HTTP Server, and other applications and services. The JBoss ON plug-in interacts with the rhq-cli command-line tool to provide access to JBoss ON management tasks. The rhq-cli tool is typically installed in your server’s management GUI. For details on how the plug-in is constructed, how it works internally, or how to extend it yourself, see the README.md file that is contained in the project. Downloads:"
  link: "plugin/jboss-on/README"
-
  title: JIRA for IBM DevOps Deploy
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "JIRA is an issue tracking tool. You can use the tool to capture and organize issues, assign work, and track activities. Issues can be anything from development tasks, code errors, project tasks, help-desk tickets, or human resource request forms. The JIRA product is developed by Atlassian. For JIRA version older than v5.0, please use plugin v5. The JIRA plug-in provides integrations with JIRA. You can create and update issues, add comments to an issue, and create reports."
  link: "plugin/JIRA/README"
-
  title: Jenkins Job Manager  [community plugin]
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "This IBM DevOps Deploy Jenkins Job Manager plug-in provides support to manage Jenkins Jobs."
  link: "plugin/jenkins-job-manager/README"
-
  title: Jenkins Pipeline
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The Jenkins Pipeline plug-in allows for interaction with DevOps Deploy components, such as creating a component and publish artifacts to version."
  link: "plugin/jenkins-pipeline-ud-plugin/README"
-
  title: Jenkins Publisher
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Jenkins is a continuous integration server that supports interactions with other technologies by using a plug-in model. This plug-in is installed into the Jenkins server and provides the ability to publish artifacts into an IBM DevOps Deploy component as a post-build action."
  link: "plugin/jenkins-ud-plugin/README"
-
  title: Kubernetes
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Kubernetes is an open-source system for automating deployment, operations, and scaling of containerized applications. The Kubernetes plug-in provides the ability to interact with Kubernetes resources within IBM DevOps Deploy."
  link: "plugin/kubernetes/README"
-
  title: Linux System Tools
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Developed by DevOps deploy, the Linux Tools plugin allows Urban CodeDeploy to automate various Linux system commands; such as rebooting the operating system and setting file permissions."
  link: "plugin/LinuxSystemTools/README"
-
  title: Liquibase  [community plugin]
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Liquibase is an open source tool that brings source control for tracking, managing and applying database schema changes. This plug-in is developed and supported by the DevOps Deploy Community on IBM DevOps GitHub organization. Click the “Visit Project” button at the top of the page to navigate to the project for source code, the plug-in distributable, and further information."
  link: "plugin/liquibase/README"
-
  title: LogiGear TestArchitect  [community plugin]
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The LogiGear TestArchitect plug-in for IBM DevOps Deploy and Build provides steps to run tests using the TestArchitect command line interface."
  link: "plugin/logigear-testarchitect/README"
-
  title: Maven
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Apache Maven provides developers a complete build lifecycle framework. It is used to automate the build process based on a project object model (POM). Maven also generates reports and stores documents with its POM repository. The Maven plug-in automates downloading artifacts from Maven repositories."
  link: "plugin/MavenSourceConfig/README"
-
  title: Maven Resolve
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Maven is a software project management and comprehension tool. Based on the concept of a project object model (POM), Maven can manage a project’s build, reporting, and documentation from a central piece of information. The Maven plug-in supports resolving artifacts from a maven repository."
  link: "plugin/Maven/README"
-
  title: Mesos Marathon
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The Mesos Marathon plug-in uses the Marathon REST API to interact with and manipulate applications and tasks within a Marathon instance."
  link: "plugin/mesos-marathon/README"
-
  title: MicroFocus ALM (formerly HP Quality Center)
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The HP Quality Center Plugin enables you to add interactions with an HP Quality Center server into your IBM DevOps Deploy Processes. Typically, this is for the purpose of running tests and adding a status to a Component Version that will either allow or deny it from being promoted to the next Environment in your SDLC. This plug-in uses Visual Basic scripts to connect to the HP Quality Center server and must run on a system that has access to OTAClient.dll."
  link: "plugin/HPQualityCenter/README"
-
  title: Microsoft BizTalk
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Microsoft’s BizTalk Server is an Enterprise Service Bus. It is designed to enable remote systems to communicate based on business rules defined in the BizTalk application. The BizTalk Plugin is an automation based plugin. It is used during deployment to import both Biztalk applications as well as bindings, uninstall Biztalk applications, remove Biztalk applications, and execute Biztalk run-book automations.The BizTalk plugin relies on powershell and the bts executable to import new or updated BizTalk applications, start and stop BizTalk applications, and remove or uninstall BizTalk Applications."
  link: "plugin/BizTalk/README"
-
  title: Microsoft IIS - Configure
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "To get started with the plug-in, read the [plug-in documentation](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/iis-configuration/overview.html) and watch the tutorial video: You can use the Microsoft IIS – Configure plug-in to manage Microsoft’s Internet Information Services (IIS) configurations and applications. The plug-in includes steps to discover configurations and package them into .zip files by using Microsoft Web Deploy, which must be installed on the agent computer. You can modify the configuration files that are produced in the .zip archive file that the plug-in creates. The .zip file created by the plug-in is the same format that is created by the Microsoft Web Deploy package provider. You can use the tokenization steps that the plug-in provides to modify the configuration files to work with multiple environments. After you modify a configuration, you can apply it to the original environment or to a different environment. You can work with entire Microsoft IIS configurations, or at a specific scope such as Sites, Apps, or App Pools."
  link: "plugin/iis-configuration/README"
-
  title: Microsoft IIS AdminScripts
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Microsoft’s IIS 6 is a web server application packaged with Windows server 2003. The IIS-AdminScripts plugin allows IBM DevOps Deploy to automate IIS6 configuration changes during a deployment."
  link: "plugin/IIS-AdminScripts/README"
-
  title: Microsoft IIS AppCmd
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The IIS-AppCmd plugin is an automation based plugin. It is used during the deployment to automate configuration changes to IIS versions 7 – 8. Microsoft’s IIS 7 is packaged with Windows Server 2008. Microsoft’s IIS 7.5 is packaged with Windows Server 2008r2. Microsoft’s IIS 8 is packaged with Windows Server 2010."
  link: "plugin/IIS-AppCmd/README"
-
  title: Microsoft IIS MS-Deploy (Azure App Service)
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The Web Deploy tool (msdeploy) simplifies the migration, management and deployment of IIS web servers, web applications, websites, and Azure App Service websites. The MSDeploy plug-in automates synchronizing and deleting servers, sites, applications, packages, and starting, stopping and recycling application pools by using the msdeploy tool."
  link: "plugin/IIS-MSDeploy/README"
-
  title: Microsoft SQL Server SQLCmd
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "With the sqlcmd utility, you can enter Transact-SQL statements, system procedures, and script files at the command prompt. You can enter these statements in Query Editor in SQLCMD mode, in a Windows script file, or in an operating system (Cmd.exe) job step of an SQL Server Agent job. This utility uses OLE DB to execute Transact-SQL batches. SQLCMD is a command line application that comes with Microsoft SQL Server, and exposes the management features of SQL Server."
  link: "plugin/SQLCmd/README"
-
  title: Microsoft SSIS
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The Microsoft SSIS plug-in provides deployment automation of packages to SQL database servers that can work alone or with other deployed packages to provide solutions to complex business needs. The testing was done using DevOps Deploy 6.1.0.1."
  link: "plugin/MicrosoftSSIS/README"
-
  title: Microsoft SharePoint
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Microsoft SharePoint is a web application platform for common enterprise web requirements. The Microsoft SharePoint plug-in for IBM DevOps Deploy includes steps to deploy .wsp and .cmp files. It is compatible with SharePoint Server 2007, 2010, 2013, and 2016."
  link: "plugin/Sharepoint/README"
-
  title: Microsoft Software Installer (MSI)
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Microsoft Software Installer (MSI) is a software component that is used for the installation, maintenance, and removal of software on Microsoft Windows systems. The Microsoft Software Installer plug-in installs and uninstalls MSI and runs MSIexec."
  link: "plugin/MSI/README"
-
  title: Microsoft TFS (Team Foundation Server)
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Microsoft Team Foundation Server (TFS) is a software development collaboration tool. It includes source control, data collection, reporting, and project tracking.The Microsoft TFS plug-in imports versioned source artifacts from a TFS server. See the [Microsoft TFS\_SCM (Team Foundation Server) plug-in](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/TFS_SCM-SourceConfig/)to import deployable artifacts from the TFM server. Requirements"
  link: "plugin/TFS-SourceConfig/README"
-
  title: Microsoft TFS Work Items
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "This plug-in provides steps that enable one to create and update work items in a Microsoft Team Foundation Server from within an IBM DevOps Deploy process. Typically, one would add a comment, update the status, or even open a new work item depending on the outcome of a deploy (i.e. success of failure). The plug-in must be run on an agent where the Microsoft Visual Studio and Team Foundation Server plug-in for Visual Studio have been installed."
  link: "plugin/plugin-air-TFS-WorkItems/README"
-
  title: Microsoft TFS_SCM (Team Foundation Server)
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The Microsoft TFS\_SCM plug-in imports version artifacts from a Team Foundation Server (TFS) server. TFS is supported both as a source of builds with the [TFS plug-in](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/TFS-SourceConfig/), and by direct retrieval of deployable artifacts from source control."
  link: "plugin/TFS_SCM-SourceConfig/README"
-
  title: Microsoft Visual Studio Team Services (VSTS)  [partner plugin]
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The Microsoft Visual Studio Team Services (VSTS) extension provides the ability to import artifacts into IBM DevOps Deploy from Team Foundation Server (TFS). This extension is installed into TFS or VSO, not IBM DevOps Deploy."
  link: "plugin/microsoft-visual-studio-team-services-vsts/README"
-
  title: Microsoft Windows Failover Clusters
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "A failover cluster is a group of independent computers that work together to increase the availability of applications and services. The clustered servers (called nodes) are connected by physical cables and by software. If one of the cluster nodes fails, another node begins to provide service (a process known as failover)."
  link: "plugin/WindowsFailoverCluster/README"
-
  title: Microsoft Windows Services
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "This plugin manipulates Windows Services. On Microsoft Windows operating systems, a Windows service is a long-running executable that performs specific functions and which is designed not to require user intervention. Windows services can be configured to start when the operating system is booted and run in the background as long as Windows is running, or they can be started manually when required. This plugin makes this easy. The Service Control Manager plugin is an automation based plugin. It is used during the deployment to automate Windows Services."
  link: "plugin/ServiceControlManager/README"
-
  title: Microsoft Windows System Tools
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "This is an DevOps developed plugin for performing various Windows tasks. The Windows System Tools Plugin automates various Windows system tasks."
  link: "plugin/WindowsSystemTools/README"
-
  title: Mulesoft
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "MuleSoft is a middleware technology that connects an enterprise. It provides secure connectivity between multiple applications, data, and devices with an application programming interface to create a single user interface. The MuleSoft plug-in automates the deployment of MuleSoft applications to a Mulesoft target."
  link: "plugin/mulesoft/README"
-
  title: NPM
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "NPM (Node Package Manager) is a package manager for the JavaScript programming language. NPM includes command-line client that interacts with a remote registry. Using the command-line interface, you can use and distribute JavaScript modules that are available on the registry. The Node Package Manager (NPM) source configuration plug-in uses the NPM command-line interface to import NPM packages as TAR files into component versions."
  link: "plugin/sourceconfig-npm/README"
-
  title: New Relic  [community plugin]
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "New Relic provides application performance management, allowing you to monitor, troubleshoot, and configure applications. This plugin sends deployment notifications to New Relic. This plug-in is developed and supported by the DevOps Deploy Community on the IBM DevOps Services platform. Click the “Visit Project” button at the top of the page to navigate to the project for further information."
  link: "plugin/new-relic/README"
-
  title: Nexus
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Nexus is a repository manager, developed by SonaType, designed to store artifacts and cache remote repositories while providing universal package support. This plug-in integrates with Nexus to interact with artifacts hosted in the Nexus repository."
  link: "plugin/nexus/README"
-
  title: Nexus Repository Manager V3
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Nexus is a repository manager, developed by SonaType, designed to store artifacts and cache remote repositories while providing universal package support. This plug-in integrates with Nexus to retrieve artifacts hosted in a Maven repository using IBM DevOps Deploy’s import mechanism."
  link: "plugin/sourceconfig-nexus-v3/README"
-
  title: Nexus Source Config
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Nexus is a repository manager, developed by SonaType, designed to store artifacts and cache remote repositories while providing universal package support. This plug-in integrates with Nexus to retrieve artifacts hosted in a Maven repository using IBM DevOps Deploy’s import mechanism."
  link: "plugin/nexus-source-config/README"
-
  title: Node-RED  [community plugin]
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Node-RED provides a browser-based flow editor that makes it easy to wire together flows using the wide range nodes in the palette. Flows can be then deployed to the runtime in a single-click. JavaScript functions can be created within the editor using the rich capabilities of the embedded Eclipse Orion. Upload this plugin to support the management of Node-RED."
  link: "plugin/node-red/README"
-
  title: Node.js  [community plugin]
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Node.js is a platform built on Chrome’s JavaScript runtime for easily building fast, scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices. Upload this plugin to IBM DevOps Deploy to install and configure Nodejs."
  link: "plugin/node-js/README"
-
  title: NuGet
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "NuGet is an open-source package manager designed by Microsoft Corporation. The NuGet source configuation plug-in imports versioned source artifacts from a NuGet repository."
  link: "plugin/nuget-source-config/README"
-
  title: OpenShift
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Use the OpenShift source configuration plug-in to manually or automatically create component versions from an OpenShift registry. The plug-in works by detecting OpenShift registry image tags and creating associated component versions for the tag."
  link: "plugin/OpenShiftSourceConfig/README"
-
  title: OpenShift for IBM DevOps Deploy
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "OpenShift provides application lifecycle management functionality and DevOps tooling, and is built around a core of Docker container packaging and Kubernetes container cluster management. Origin provides a complete open source application container platform. This plug-in provides the ability to interact with OpenShift applications within IBM DevOps Deploy."
  link: "plugin/openshift/README"
-
  title: Oracle SQLPlus
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "SQL*Plus (commonly known as sqlplus) is an Oracle database client that can run SQL and PL/SQL commands and display their results. SQLPlus is the default, the simplest and the most basic Oracle utility, with a basic command-line interface, commonly used by users, administrators, and programmers. The SQL*Plus plugin allows uDeploy to execute SQL scripts during a deployment."
  link: "plugin/SQLPlus/README"
-
  title: Oracle Service Bus Configuration Management
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Oracle Service Bus connects, mediates, and manages interactions between services and applications. The plug-in provides steps to support automated application and import of Oracle Service Bus configurations. Use the provided steps in your processes. They are self-contained."
  link: "plugin/plugin-air-OSB-Configuration-Management/README"
-
  title: Oracle WebLogic Application Deployment
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The Oracle Weblogic Server is an application server for building and deploying enterprise JAVA application programs. The Oracle WebLogic Application Deployment plug-in provides processes to deploy, redeploy, and undeploy applications on a WebLogic server. Steps are also provided to start and stop deployed applications. The plug-in includes a component template to assist in setting up deployment automation."
  link: "plugin/plugin-air-WebLogic-Application-Deployment/README"
-
  title: Oracle WebLogic Integration Resource Management
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The WebLogic Integration Resource Management plug-in includes steps that allow you to create, update, and delete WebLogic Integration objects. This plug-in allows you to automate the creation, update, and deletion of objects within WebLogic Integration:"
  link: "plugin/plugin-air-WLI-Resource-Management/README"
-
  title: Oracle WebLogic Scripting Tool (WLST)
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The WebLogic Scripting Tool (WLST) plug-in provides steps to automate the following deployment and management operations:"
  link: "plugin/WebLogic-WLST/README"
-
  title: Oracle WebLogic Server Resource Management
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "This plug-in provides steps to support automated deployment of various WebLogic server resources, such as connection factories, quotas, templates, queues, JDBC data sources, file stores, and subdeployments. Each step is self-contained. That is, connection credentials that are required to connect to the WebLogic server is contained in each step. All Step properties include location information for the following required files:"
  link: "plugin/plugin-air-WLS-Resource-Management/README"
-
  title: Oracle WebLogic Server Security Management
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The Oracle WebLogic Server security features provide end-to-end security for applications on the WebLogic server. The Oracle WebLogic Server Security Management plug-in provides processes to work with WebLogic Server security configurations. Steps are provided to create and manage role mappers, roles, realms, and authentication providers."
  link: "plugin/WebLogicSecurityMgmt/README"
-
  title: Oracle WebLogic WLDeploy
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The **wldeploy** Ant task is used to complete **weblogic.Deployer** functions by using attributes that are specified in an Ant XML file. You can use the **wldeploy** Ant task with other WebLogic Server Ant tasks to create a single Ant build script. With the Oracle WeblLogic WLDeploy plug-in, you can run a **wldeploy** Ant task as part of a deployment process. This plug-in also provides steps for other deployment actions such as: undeploy, deploy, and redeploy. It also can be used to start and stop WebLogic servers and clusters."
  link: "plugin/WLDeploy/README"
-
  title: PVCS
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Serena PVCS is a version management tool that provides a built-in file server and configuration control. The PVCS source configuration plug-in automates downloading artifacts from PVCS, creating new component versions, and importing artifacts."
  link: "plugin/PvcsSourceConfig/README"
-
  title: Perforce Helix
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Perforce is a commercial, proprietary, centralized revision control system developed by Perforce Software, Inc. Use this source configuration plug-in to manually or automatically import artifacts from the Perforce Helix server into an IBM DevOps Deploy component version."
  link: "plugin/PerforceSourceConfig/README"
-
  title: PowerShell
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The PowerShell plug-in provides a step for running user-defined PowerShell scripts. The following features are included in the initial release:"
  link: "plugin/powershell-integration/README"
-
  title: Property Utils  [community plugin]
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The Property Utils plug-in is an automation based plugin that provides steps for collecting IBM DevOps properties. The Property Utils plug-in is a community plug-in. Community plug-ins are open source projects that are developed and supported by the IBM DevOps development community. Click **Visit Project** at the top of the page to go to the project for further information."
  link: "plugin/property-utils/README"
-
  title: Puppet  [community plugin]
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Puppet is a declarative, model-based approach to IT automation, helping you manage infrastructure throughout its lifecycle, from provisioning and configuration to orchestration and reporting. Using Puppet, you can easily automate repetitive tasks, quickly deploy critical applications, and proactively manage change, scaling from 10s of servers to 1000s, on-premise or in the cloud. This plug-in enables you to apply puppet manifests, or call a puppet agent."
  link: "plugin/puppet/README"
-
  title: RPM
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The RPM Package Manager (RPM) is a toolset used to install a single package, track files added by the package on the system, and remove files using a single command. Distributed with the Red Hat Linux distribution and its derivatives. The RPM plug-in automates installing, updating, and uninstalling RPM packages."
  link: "plugin/RPM/README"
-
  title: Rally for IBM DevOps Deploy
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Rally is an agile project management tool for the enterprise. This plug-in includes steps to update Rally issues for bug or feature tracking."
  link: "plugin/Rally/README"
-
  title: Resource Utilities
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The Resource Utilities plug-in supplements the existing IBM DevOps Deploy resources plugin with additional steps to help manage large resource trees and the properties on resources in large trees. This is an open source plug-in and is developed and supported by the IBM DevOps Deploy Community on GitHub. At this time, not all the required jars are available for public use and therefore, are missing from the GitHub repository. To retrieve a working plugin, please use the ‘download’ link at the top of this page."
  link: "plugin/resource-utilities/README"
-
  title: SAP Change and Transport System (CTS)
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "This plug-in is designed to interact with the SAP Change and Transport System."
  link: "plugin/SAP-CTS/README"
-
  title: SQL-JDBC
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The SQL-JDBC plugin is a database-independent plug-in. It allows users to run SQL scripts in a specific order using JDBC drivers. The SQL-JDBC plugin is an automation based plugin. It is executed as part of the deployment to help manage database changes."
  link: "plugin/SQL-JDBC/README"
-
  title: Salesforce
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The Salesforce plug-in for IBM DevOps Deploy uses the Force.com Migration Tool to perform file-based deployment of metadata changes and Apex classes. These artifacts typically progress through a lifecycle in which IBM DevOps Deploy environments are mapped to Salesforce.com organizations."
  link: "plugin/salesforce/README"
-
  title: Selenium
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Selenium is a testing tool which automates web applications.It can also be used to automate basic browser functions and administration tasks. The Selenium plug-in runs Selenese HTML files with Selenium RC or WebDriver."
  link: "plugin/Selenium/README"
-
  title: Send SMTP Email
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "This community plugin provides a mechanism to send SMTP emails in your deployment process."
  link: "plugin/send-smtp-email/README"
-
  title: ServiceNow
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "- Check Records"
  link: "plugin/ServiceNow/README"
-
  title: Shell
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "A shell is software that provides an interface for users of an operating system that provides access to the services of a kernel.Operating system shells typically fall into 1 of 2 categories: command line and graphical. Command-line shells provide a command-line interface (CLI) to the operating system, while graphical shells provide a graphical user interface (GUI). In either category, the primary purpose of the shell is to call or start another program. Shells frequently have more capabilities such as viewing the contents of directories. With the Shell plug-in, you can run custom shell scripts during the deployment process."
  link: "plugin/Shell/README"
-
  title: Siebel  [community plugin]
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Siebel is a customer relationship management (CRM) system that is produced by Oracle. The Siebel plug-in is a community supported plug-in. Community plug-ins are open source projects that are developed and supported by the IBM DevOps development community. Click **Visit Project** at the top of the page to go to the project for further information."
  link: "plugin/siebel/README"
-
  title: Skytap Automation Pack  [partner plugin]
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Skytap expands the devops flexibility of IBM DevOps Deploy with the Skytap Automation Pack for DevOps Deploy. The integration with IBM DevOps Deploy enables customers to use scalable, elastic, on-demand cloud resources to meet fluctuating and unpredictable demand for IBM DevOps Deploy workflows."
  link: "plugin/skytap-automation-pack/README"
-
  title: Slack  [community plugin]
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Slack is a team collaboration tool. This plug-in sends deployment notifications to Slack in a specified channel."
  link: "plugin/slack/README"
-
  title: Subversion
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Subversion is an open source version control software. It is used to maintain current and previous versions of source code, web pages, and documentation. The Subversion source configuration plug-in automates importing artifacts from a Subversion repository."
  link: "plugin/SubversionSourceConfig/README"
-
  title: Subversion-Export
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Subversion is an open source version control system. Developers use Subversion to maintain current and historical versions of files such as source code, web pages, and documentation. This plug-in allows IBM DevOps Deploy to checkout and export code from Subversion."
  link: "plugin/Subversion-export/README"
-
  title: Sybase
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "This plugin integrates with SAP ASE, originally known as Sybase SQL Server, which is a relational database server. The plugin uses the Interactive SQL parser (isql) utility to integrate with Sybase and execute SQL commands."
  link: "plugin/sybase/README"
-
  title: System Information
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The System Information plugin includes a variety of checks to perform against the operating system. These steps can be used to verify that a deployment can succeed or has succeeded."
  link: "plugin/SystemInformation/README"
-
  title: TIBCO  [partner plugin]
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "A plugin for management of TIBCO applications – includes steps for deployment, configuration, export etc. The plugin to provides smooth and transparent interaction between TIBCO Administrator and IBM DevOps Deploy tool. It automates the app management process for TIBCO applications by providing simplified process."
  link: "plugin/tibco/README"
-
  title: TeamCity
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "TeamCity is a build management and continuous integration tool which supports a variety of version control systems and build runners. The TeamCity server manages committed code changes, builds, real-time build information received from build agents, and build artifacts. The TeamCity plug-in automates downloading artifacts from TeamCity projects."
  link: "plugin/TeamCitySourceConfig/README"
-
  title: Text Utility  [community plugin]
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The Text-Utils plug-in for IBM DevOps Deploy offers various ways to modify files."
  link: "plugin/text-utility/README"
-
  title: VMware AirWatch  [community plugin]
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The VMWare AirWatch allows a user to access work applications and data from a mobile phone. This plug-in enables IBM DevOps Deploy to deploy an IPA to an AirWatch instance and assign an IPA to a group."
  link: "plugin/vmware-airwatch/README"
-
  title: Venafi  [community plugin]
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The Venafi Trust Protection Platform provides continuous monitoring and control over keys and certificates across different devices. The Venafi plug-in for IBM DevOps Deploy contains various steps to control Venafi certificates."
  link: "plugin/venafi/README"
-
  title: Web Utilities
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The Web Utilities plug-in includes steps for interacting with web sites and web services."
  link: "plugin/web-utilities/README"
-
  title: WebSphere Application Server - Configure
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "To learn more about different solutions for WebSphere Application Server, see [Frequently Asked Questions about IBM DevOps Deploy solutions for WebSphere Application Server](https://community.ibm.com/community/user/wasdevops/blogs/osman-burucu/2023/03/03/frequently-asked-questions-about-ibm-devops-dep/).  Starting with version 14 of the WebSphere Application Server – Configure plug-in for IBM DevOps Deploy, you can use JSON files to manage WebSphere Application Server configuration."
  link: "plugin/WebSphereConfiguration/README"
-
  title: WebSphere Application Server - Deployment
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The WebSphere Application Server – Deployment plug-in provides a number of steps for deploying application files to and performing administrative tasks for WebSphere Application Server. The plug-in also contains a number of steps that are related to configuration management, such as creating data sources and JMS requests. These configuration steps are deprecated; instead, use the WebSphere Application Server – Configure plug-in for all configuration-related activities. To learn more about different solutions for WebSphere Application Server, see [Frequently Asked Questions about IBM DevOps Deploy solutions for WebSphere Application Server](https://community.ibm.com/community/user/wasdevops/blogs/osman-burucu/2023/03/03/frequently-asked-questions-about-ibm-devops-dep/)."
  link: "plugin/Websphere/README"
-
  title: WebSphere Application Server - Install
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The IBM WebSphere Application Server – Install plug-in includes a sample application that automates a standard installation of WebSphere Application Server Network Deployment. This application is provided as an example and must be modified or used as a guide for creating your own installation process. The plug-in also includes steps that are related to installing WebSphere Application Server."
  link: "plugin/websphere-install/README"
-
  title: WinRS Agent Install
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Plugin for installing agent to remote windows machine using WinRS."
  link: "plugin/WinRSAgentInstall/README"
-
  title: eggPlant  [partner plugin]
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The eggPlant Functional test tool from TestPlant enables you to execute synthetic transactions or functional tests from an IBM DevOps Deploy Process"
  link: "plugin/eggplant/README"
-
  title: z/OS Dataset Writer
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Apart from copying content to a mainframe dataset, this plug-in provides the following features:"
  link: "plugin/zos-dataset-writer/README"
-
  title: z/OS External Artifact Repository
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The zOS External Artifact Utility plug-in includes steps to integrate with external repositories like Nexus or JFrog for zOS."
  link: "plugin/zOS-external-artifact-download/README"
-
  title: z/OS FTP Utility
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The zOS FTP plug-in automates the importing of hierarchical file system (HFS) artifacts from another z/OS logical partition (LPAR)."
  link: "plugin/zos-ftp/README"
-
  title: z/OS File Source Config
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The z/OS File Source Config plug-in automates uploading data sets, UNIX files and generic artifacts from a z/OS system into a component version. New component versions are created based on the input [ship list](http://www.ibm.com/support/knowledgecenter/SS4GSP_6.2.2/com.ibm.udeploy.doc/topics/zos_shiplistfiles.html). The  z/OS File Source Config plug-in provides a Web UI to run the version import commands from the the z/OS deployment tools."
  link: "plugin/zOSFileSourceConfig/README"
-
  title: z/OS Management Facility
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The z/OS Management Facility (zOSMF) plug-in provides functions to discover software instances provisioned by [z/OSMF Cloud Provisioning](https://www.ibm.com/systems/z/os/zos/features/zosmf/) or [z/OS Provisioning Toolkit](https://developer.ibm.com/mainframe/products/zospt/).  The zOS Management Facility plug-in includes steps to create and manage z/OSMF workflows and software service templates."
  link: "plugin/zosmf/README"
-
  title: z/OS Multi Generate Artifact Information
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The z/OS Multi Generate Artifact Information plug-in scans version artifacts and generates text based on a template. The output text can be used as an input property to subsequent steps. Use this plug-in to process data sets or members in a component version. You can also use the **Generate Artifact Information** step to select a set of artifacts to process by applying filters on data set names, member names, deployment types, and custom properties on each output property."
  link: "plugin/zos-multi-generate-artifact-info/README"
-
  title: z/OS Shell [Deprecated]
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "> **Deprecation Notice**: The z/OS Shell plugin is deprecated. It is recommended to use the [Shell plugin](#Shell) instead. The z/OS Shell plug-in is for the z/OS only operating system. It performs the same functions as the [Shell plug-in](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/Shell/) for DevOps Deploy. The plug-in reduces the CPU consumption in the z/OS environment by using Java code instead of Groovy code."
  link: "plugin/java-shell/README"
-
  title: z/OS USS Utility [Deprecated]
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "> **Deprecation Notice**: The z/OS USS Utility plugin is deprecated. It is recommended to use `Replace Tokens` step from [File Utils](#file-utils) plugin instead. The z/OS USS Utility plug-in automates working with USS files on the z/OS operating system. This plug-in supports working with the IBM z/OS version 2.2 and later and requires DevOps Deploy agent on the z/OS server."
  link: "plugin/zos-replacetokens-uss/README"
-
  title: z/OS Utility
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The z/OS Utility plug-in includes steps for retrieving and deploying IBM z/OS artifacts. It is installed and upgraded as part of the IBM DevOps Deploy server. This plugin will work with all the supported versions of UCD server/agents. There are some new features that are only supported if the agent is upgraded to those versions. If you attempt to use the feature that is not enabled for a version, process might fail with the message to upgrade the agent.  This plug-in requires agents that run on the z/OS platform."
  link: "plugin/zos-deploy/README"
-
  title: z/OS Rexx Executor
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The z/OS Rexx Executor plugin executes REXX program from a Dataset (or) specified inline in the plugin."
  link: "plugin/zos-rexx/README"
---

