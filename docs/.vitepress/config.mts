import { defineConfig } from 'vitepress'

// Directory name for plugins
const PLUGIN_BASE_DIR = 'plugin';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/devops-velocity-plugin-docs/",
  title: "DevOps Velocity Plugins",
  description: "Documentation for IBM DevOps Velocity Plugins",
  appearance: "dark",
  lastUpdated: true,
  vite: {
    build: {
      chunkSizeWarningLimit: 4000, // Set your desired limit in KB
    },
    assetsInclude: ['**/*.PNG', '**/*.png']
  },
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/UrbanCode/devops-velocity-plugin-docs/edit/main/docs/:path'
    },
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    sidebar: {
      // This sidebar gets displayed when a user
      // is on `plugin/selenium-ucv` directory.
      '/plugin/selenium-ucv/': [
        {
          text: 'Selenium ucv',
          items: [
            { text: 'README', link: 'plugin/selenium-ucv/README' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/testcomplete-ucv` directory.
      '/plugin/testcomplete-ucv/': [
        {
          text: 'Testcomplete ucv',
          items: [
            { text: 'README', link: 'plugin/testcomplete-ucv/README' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-agility` directory.
      '/plugin/ucv-ext-agility/': [
        {
          text: 'Ucv ext agility',
          items: [
            { text: 'Downloads', link: 'plugin/ucv-ext-agility/downloads' },
            { text: 'Overview', link: 'plugin/ucv-ext-agility/overview' },
            { text: 'README', link: 'plugin/ucv-ext-agility/README' },
            { text: 'Usage', link: 'plugin/ucv-ext-agility/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-aha` directory.
      '/plugin/ucv-ext-aha/': [
        {
          text: 'Ucv ext aha',
          items: [
            { text: 'Downloads', link: 'plugin/ucv-ext-aha/downloads' },
            { text: 'Overview', link: 'plugin/ucv-ext-aha/overview' },
            { text: 'README', link: 'plugin/ucv-ext-aha/README' },
            { text: 'Usage', link: 'plugin/ucv-ext-aha/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-appscan` directory.
      '/plugin/ucv-ext-appscan/': [
        {
          text: 'Ucv ext appscan',
          items: [
            { text: 'Downloads', link: 'plugin/ucv-ext-appscan/downloads' },
            { text: 'Overview', link: 'plugin/ucv-ext-appscan/overview' },
            { text: 'README', link: 'plugin/ucv-ext-appscan/README' },
            { text: 'Usage', link: 'plugin/ucv-ext-appscan/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-asoc` directory.
      '/plugin/ucv-ext-asoc/': [
        {
          text: 'Ucv ext asoc',
          items: [
            { text: 'Downloads', link: 'plugin/ucv-ext-asoc/downloads' },
            { text: 'Overview', link: 'plugin/ucv-ext-asoc/overview' },
            { text: 'README', link: 'plugin/ucv-ext-asoc/README' },
            { text: 'Usage', link: 'plugin/ucv-ext-asoc/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-azure` directory.
      '/plugin/ucv-ext-azure/': [
        {
          text: 'Ucv ext azure',
          items: [
            { text: 'Downloads', link: 'plugin/ucv-ext-azure/downloads' },
            { text: 'Overview', link: 'plugin/ucv-ext-azure/overview' },
            { text: 'README', link: 'plugin/ucv-ext-azure/README' },
            { text: 'Usage', link: 'plugin/ucv-ext-azure/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-bitbucket-cloud` directory.
      '/plugin/ucv-ext-bitbucket-cloud/': [
        {
          text: 'Ucv ext bitbucket cloud',
          items: [
            { text: 'Downloads', link: 'plugin/ucv-ext-bitbucket-cloud/downloads' },
            { text: 'Overview', link: 'plugin/ucv-ext-bitbucket-cloud/overview' },
            { text: 'README', link: 'plugin/ucv-ext-bitbucket-cloud/README' },
            { text: 'Usage', link: 'plugin/ucv-ext-bitbucket-cloud/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-bitbucket-server` directory.
      '/plugin/ucv-ext-bitbucket-server/': [
        {
          text: 'Ucv ext bitbucket server',
          items: [
            { text: 'Downloads', link: 'plugin/ucv-ext-bitbucket-server/downloads' },
            { text: 'Overview', link: 'plugin/ucv-ext-bitbucket-server/overview' },
            { text: 'README', link: 'plugin/ucv-ext-bitbucket-server/README' },
            { text: 'Usage', link: 'plugin/ucv-ext-bitbucket-server/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-blackduck` directory.
      '/plugin/ucv-ext-blackduck/': [
        {
          text: 'Ucv ext blackduck',
          items: [
            { text: 'Downloads', link: 'plugin/ucv-ext-blackduck/downloads' },
            { text: 'Overview', link: 'plugin/ucv-ext-blackduck/overview' },
            { text: 'README', link: 'plugin/ucv-ext-blackduck/README' },
            { text: 'Usage', link: 'plugin/ucv-ext-blackduck/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-bottleneck-detection` directory.
      '/plugin/ucv-ext-bottleneck-detection/': [
        {
          text: 'Ucv ext bottleneck detection',
          items: [
            { text: 'Downloads', link: 'plugin/ucv-ext-bottleneck-detection/downloads' },
            { text: 'Overview', link: 'plugin/ucv-ext-bottleneck-detection/overview' },
            { text: 'README', link: 'plugin/ucv-ext-bottleneck-detection/README' },
            { text: 'Usage', link: 'plugin/ucv-ext-bottleneck-detection/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-build` directory.
      '/plugin/ucv-ext-build/': [
        {
          text: 'Ucv ext build',
          items: [
            { text: 'Downloads', link: 'plugin/ucv-ext-build/downloads' },
            { text: 'Overview', link: 'plugin/ucv-ext-build/overview' },
            { text: 'README', link: 'plugin/ucv-ext-build/README' },
            { text: 'Usage', link: 'plugin/ucv-ext-build/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-circleci` directory.
      '/plugin/ucv-ext-circleci/': [
        {
          text: 'Ucv ext circleci',
          items: [
            { text: 'Downloads', link: 'plugin/ucv-ext-circleci/downloads' },
            { text: 'Overview', link: 'plugin/ucv-ext-circleci/overview' },
            { text: 'README', link: 'plugin/ucv-ext-circleci/README' },
            { text: 'Usage', link: 'plugin/ucv-ext-circleci/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-control` directory.
      '/plugin/ucv-ext-control/': [
        {
          text: 'Ucv ext control',
          items: [
            { text: 'Downloads', link: 'plugin/ucv-ext-control/downloads' },
            { text: 'Overview', link: 'plugin/ucv-ext-control/overview' },
            { text: 'README', link: 'plugin/ucv-ext-control/README' },
            { text: 'Usage', link: 'plugin/ucv-ext-control/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-coverage-core` directory.
      '/plugin/ucv-ext-coverage-core/': [
        {
          text: 'Ucv ext coverage core',
          items: [
            { text: 'Downloads', link: 'plugin/ucv-ext-coverage-core/downloads' },
            { text: 'Overview', link: 'plugin/ucv-ext-coverage-core/overview' },
            { text: 'README', link: 'plugin/ucv-ext-coverage-core/README' },
            { text: 'Usage', link: 'plugin/ucv-ext-coverage-core/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-cucumber` directory.
      '/plugin/ucv-ext-cucumber/': [
        {
          text: 'Ucv ext cucumber',
          items: [
            { text: 'Downloads', link: 'plugin/ucv-ext-cucumber/downloads' },
            { text: 'Overview', link: 'plugin/ucv-ext-cucumber/overview' },
            { text: 'README', link: 'plugin/ucv-ext-cucumber/README' },
            { text: 'Usage', link: 'plugin/ucv-ext-cucumber/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-cypress` directory.
      '/plugin/ucv-ext-cypress/': [
        {
          text: 'Ucv ext cypress',
          items: [
            { text: 'Downloads', link: 'plugin/ucv-ext-cypress/downloads' },
            { text: 'Overview', link: 'plugin/ucv-ext-cypress/overview' },
            { text: 'README', link: 'plugin/ucv-ext-cypress/README' },
            { text: 'Usage', link: 'plugin/ucv-ext-cypress/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-dependabot` directory.
      '/plugin/ucv-ext-dependabot/': [
        {
          text: 'Ucv ext dependabot',
          items: [
            { text: 'Downloads', link: 'plugin/ucv-ext-dependabot/downloads' },
            { text: 'Overview', link: 'plugin/ucv-ext-dependabot/overview' },
            { text: 'README', link: 'plugin/ucv-ext-dependabot/README' },
            { text: 'Usage', link: 'plugin/ucv-ext-dependabot/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-ewm` directory.
      '/plugin/ucv-ext-ewm/': [
        {
          text: 'Ucv ext ewm',
          items: [
            { text: 'Downloads', link: 'plugin/ucv-ext-ewm/downloads' },
            { text: 'Overview', link: 'plugin/ucv-ext-ewm/overview' },
            { text: 'README', link: 'plugin/ucv-ext-ewm/README' },
            { text: 'Usage', link: 'plugin/ucv-ext-ewm/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-fortify-ssc` directory.
      '/plugin/ucv-ext-fortify-ssc/': [
        {
          text: 'Ucv ext fortify ssc',
          items: [
            { text: 'Downloads', link: 'plugin/ucv-ext-fortify-ssc/downloads' },
            { text: 'Overview', link: 'plugin/ucv-ext-fortify-ssc/overview' },
            { text: 'README', link: 'plugin/ucv-ext-fortify-ssc/README' },
            { text: 'Usage', link: 'plugin/ucv-ext-fortify-ssc/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-github` directory.
      '/plugin/ucv-ext-github/': [
        {
          text: 'Ucv ext github',
          items: [
            { text: 'Downloads', link: 'plugin/ucv-ext-github/downloads' },
            { text: 'Overview', link: 'plugin/ucv-ext-github/overview' },
            { text: 'README', link: 'plugin/ucv-ext-github/README' },
            { text: 'Usage', link: 'plugin/ucv-ext-github/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-gitlab` directory.
      '/plugin/ucv-ext-gitlab/': [
        {
          text: 'Ucv ext gitlab',
          items: [
            { text: 'Downloads', link: 'plugin/ucv-ext-gitlab/downloads' },
            { text: 'Overview', link: 'plugin/ucv-ext-gitlab/overview' },
            { text: 'README', link: 'plugin/ucv-ext-gitlab/README' },
            { text: 'Usage', link: 'plugin/ucv-ext-gitlab/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-handlebars-reporter` directory.
      '/plugin/ucv-ext-handlebars-reporter/': [
        {
          text: 'Ucv ext handlebars reporter',
          items: [
            { text: 'Downloads', link: 'plugin/ucv-ext-handlebars-reporter/downloads' },
            { text: 'Overview', link: 'plugin/ucv-ext-handlebars-reporter/overview' },
            { text: 'README', link: 'plugin/ucv-ext-handlebars-reporter/README' },
            { text: 'Usage', link: 'plugin/ucv-ext-handlebars-reporter/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-jenkins` directory.
      '/plugin/ucv-ext-jenkins/': [
        {
          text: 'Ucv ext jenkins',
          items: [
            { text: 'Downloads', link: 'plugin/ucv-ext-jenkins/downloads' },
            { text: 'Overview', link: 'plugin/ucv-ext-jenkins/overview' },
            { text: 'README', link: 'plugin/ucv-ext-jenkins/README' },
            { text: 'Usage', link: 'plugin/ucv-ext-jenkins/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-jira-service-management` directory.
      '/plugin/ucv-ext-jira-service-management/': [
        {
          text: 'Ucv ext jira service management',
          items: [
            { text: 'Downloads', link: 'plugin/ucv-ext-jira-service-management/downloads' },
            { text: 'Overview', link: 'plugin/ucv-ext-jira-service-management/overview' },
            { text: 'README', link: 'plugin/ucv-ext-jira-service-management/README' },
            { text: 'Usage', link: 'plugin/ucv-ext-jira-service-management/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-jira` directory.
      '/plugin/ucv-ext-jira/': [
        {
          text: 'Ucv ext jira',
          items: [
            { text: 'Downloads', link: 'plugin/ucv-ext-jira/downloads' },
            { text: 'Overview', link: 'plugin/ucv-ext-jira/overview' },
            { text: 'README', link: 'plugin/ucv-ext-jira/README' },
            { text: 'Usage', link: 'plugin/ucv-ext-jira/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-jmeter` directory.
      '/plugin/ucv-ext-jmeter/': [
        {
          text: 'Ucv ext jmeter',
          items: [
            { text: 'Downloads', link: 'plugin/ucv-ext-jmeter/downloads' },
            { text: 'Overview', link: 'plugin/ucv-ext-jmeter/overview' },
            { text: 'README', link: 'plugin/ucv-ext-jmeter/README' },
            { text: 'Usage', link: 'plugin/ucv-ext-jmeter/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-junit` directory.
      '/plugin/ucv-ext-junit/': [
        {
          text: 'Ucv ext junit',
          items: [
            { text: 'Downloads', link: 'plugin/ucv-ext-junit/downloads' },
            { text: 'Overview', link: 'plugin/ucv-ext-junit/overview' },
            { text: 'README', link: 'plugin/ucv-ext-junit/README' },
            { text: 'Usage', link: 'plugin/ucv-ext-junit/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-leankit` directory.
      '/plugin/ucv-ext-leankit/': [
        {
          text: 'Ucv ext leankit',
          items: [
            { text: 'Downloads', link: 'plugin/ucv-ext-leankit/downloads' },
            { text: 'Overview', link: 'plugin/ucv-ext-leankit/overview' },
            { text: 'README', link: 'plugin/ucv-ext-leankit/README' },
            { text: 'Usage', link: 'plugin/ucv-ext-leankit/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-milestone-risk-estimator` directory.
      '/plugin/ucv-ext-milestone-risk-estimator/': [
        {
          text: 'Ucv ext milestone risk estimator',
          items: [
            { text: 'Downloads', link: 'plugin/ucv-ext-milestone-risk-estimator/downloads' },
            { text: 'Overview', link: 'plugin/ucv-ext-milestone-risk-estimator/overview' },
            { text: 'README', link: 'plugin/ucv-ext-milestone-risk-estimator/README' },
            { text: 'Usage', link: 'plugin/ucv-ext-milestone-risk-estimator/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-njs-unit` directory.
      '/plugin/ucv-ext-njs-unit/': [
        {
          text: 'Ucv ext njs unit',
          items: [
            { text: 'Downloads', link: 'plugin/ucv-ext-njs-unit/downloads' },
            { text: 'Overview', link: 'plugin/ucv-ext-njs-unit/overview' },
            { text: 'README', link: 'plugin/ucv-ext-njs-unit/README' },
            { text: 'Usage', link: 'plugin/ucv-ext-njs-unit/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-onetest-server` directory.
      '/plugin/ucv-ext-onetest-server/': [
        {
          text: 'Ucv ext onetest server',
          items: [
            { text: 'Downloads', link: 'plugin/ucv-ext-onetest-server/downloads' },
            { text: 'Overview', link: 'plugin/ucv-ext-onetest-server/overview' },
            { text: 'README', link: 'plugin/ucv-ext-onetest-server/README' },
            { text: 'Usage', link: 'plugin/ucv-ext-onetest-server/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-onetest` directory.
      '/plugin/ucv-ext-onetest/': [
        {
          text: 'Ucv ext onetest',
          items: [
            { text: 'Downloads', link: 'plugin/ucv-ext-onetest/downloads' },
            { text: 'Overview', link: 'plugin/ucv-ext-onetest/overview' },
            { text: 'README', link: 'plugin/ucv-ext-onetest/README' },
            { text: 'Usage', link: 'plugin/ucv-ext-onetest/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-plan` directory.
      '/plugin/ucv-ext-plan/': [
        {
          text: 'Ucv ext plan',
          items: [
            { text: 'Downloads', link: 'plugin/ucv-ext-plan/downloads' },
            { text: 'Overview', link: 'plugin/ucv-ext-plan/overview' },
            { text: 'README', link: 'plugin/ucv-ext-plan/README' },
            { text: 'Usage', link: 'plugin/ucv-ext-plan/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-rally` directory.
      '/plugin/ucv-ext-rally/': [
        {
          text: 'Ucv ext rally',
          items: [
            { text: 'Downloads', link: 'plugin/ucv-ext-rally/downloads' },
            { text: 'Overview', link: 'plugin/ucv-ext-rally/overview' },
            { text: 'README', link: 'plugin/ucv-ext-rally/README' },
            { text: 'Usage', link: 'plugin/ucv-ext-rally/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-release-summary-ibm` directory.
      '/plugin/ucv-ext-release-summary-ibm/': [
        {
          text: 'Ucv ext release summary ibm',
          items: [
            { text: 'Downloads', link: 'plugin/ucv-ext-release-summary-ibm/downloads' },
            { text: 'Overview', link: 'plugin/ucv-ext-release-summary-ibm/overview' },
            { text: 'README', link: 'plugin/ucv-ext-release-summary-ibm/README' },
            { text: 'Usage', link: 'plugin/ucv-ext-release-summary-ibm/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-release-summary-openai` directory.
      '/plugin/ucv-ext-release-summary-openai/': [
        {
          text: 'Ucv ext release summary openai',
          items: [
            { text: 'Downloads', link: 'plugin/ucv-ext-release-summary-openai/downloads' },
            { text: 'Overview', link: 'plugin/ucv-ext-release-summary-openai/overview' },
            { text: 'README', link: 'plugin/ucv-ext-release-summary-openai/README' },
            { text: 'Usage', link: 'plugin/ucv-ext-release-summary-openai/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-rtas` directory.
      '/plugin/ucv-ext-rtas/': [
        {
          text: 'Ucv ext rtas',
          items: [
            { text: 'Downloads', link: 'plugin/ucv-ext-rtas/downloads' },
            { text: 'Overview', link: 'plugin/ucv-ext-rtas/overview' },
            { text: 'README', link: 'plugin/ucv-ext-rtas/README' },
            { text: 'Usage', link: 'plugin/ucv-ext-rtas/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-sap-charm` directory.
      '/plugin/ucv-ext-sap-charm/': [
        {
          text: 'Ucv ext sap charm',
          items: [
            { text: 'Downloads', link: 'plugin/ucv-ext-sap-charm/downloads' },
            { text: 'Overview', link: 'plugin/ucv-ext-sap-charm/overview' },
            { text: 'README', link: 'plugin/ucv-ext-sap-charm/README' },
            { text: 'Usage', link: 'plugin/ucv-ext-sap-charm/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-servicenow` directory.
      '/plugin/ucv-ext-servicenow/': [
        {
          text: 'Ucv ext servicenow',
          items: [
            { text: 'Downloads', link: 'plugin/ucv-ext-servicenow/downloads' },
            { text: 'Overview', link: 'plugin/ucv-ext-servicenow/overview' },
            { text: 'README', link: 'plugin/ucv-ext-servicenow/README' },
            { text: 'Usage', link: 'plugin/ucv-ext-servicenow/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-shell` directory.
      '/plugin/ucv-ext-shell/': [
        {
          text: 'Ucv ext shell',
          items: [
            { text: 'Automation task', link: 'plugin/ucv-ext-shell/Automation-task' },
            { text: 'Downloads', link: 'plugin/ucv-ext-shell/downloads' },
            { text: 'Overview', link: 'plugin/ucv-ext-shell/overview' },
            { text: 'README', link: 'plugin/ucv-ext-shell/README' },
            { text: 'Usage', link: 'plugin/ucv-ext-shell/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-snyk` directory.
      '/plugin/ucv-ext-snyk/': [
        {
          text: 'Ucv ext snyk',
          items: [
            { text: 'Downloads', link: 'plugin/ucv-ext-snyk/downloads' },
            { text: 'Overview', link: 'plugin/ucv-ext-snyk/overview' },
            { text: 'README', link: 'plugin/ucv-ext-snyk/README' },
            { text: 'Usage', link: 'plugin/ucv-ext-snyk/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-sonarqube` directory.
      '/plugin/ucv-ext-sonarqube/': [
        {
          text: 'Ucv ext sonarqube',
          items: [
            { text: 'Certificate', link: 'plugin/ucv-ext-sonarqube/certificate' },
            { text: 'Downloads', link: 'plugin/ucv-ext-sonarqube/downloads' },
            { text: 'Overview', link: 'plugin/ucv-ext-sonarqube/overview' },
            { text: 'README', link: 'plugin/ucv-ext-sonarqube/README' },
            { text: 'Scripts', link: 'plugin/ucv-ext-sonarqube/scripts' },
            { text: 'Usage', link: 'plugin/ucv-ext-sonarqube/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-testng` directory.
      '/plugin/ucv-ext-testng/': [
        {
          text: 'Ucv ext testng',
          items: [
            { text: 'Downloads', link: 'plugin/ucv-ext-testng/downloads' },
            { text: 'Overview', link: 'plugin/ucv-ext-testng/overview' },
            { text: 'README', link: 'plugin/ucv-ext-testng/README' },
            { text: 'Usage', link: 'plugin/ucv-ext-testng/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-twistlock` directory.
      '/plugin/ucv-ext-twistlock/': [
        {
          text: 'Ucv ext twistlock',
          items: [
            { text: 'Downloads', link: 'plugin/ucv-ext-twistlock/downloads' },
            { text: 'Overview', link: 'plugin/ucv-ext-twistlock/overview' },
            { text: 'README', link: 'plugin/ucv-ext-twistlock/README' },
            { text: 'Usage', link: 'plugin/ucv-ext-twistlock/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-ucd` directory.
      '/plugin/ucv-ext-ucd/': [
        {
          text: 'Ucv ext ucd',
          items: [
            { text: 'Downloads', link: 'plugin/ucv-ext-ucd/downloads' },
            { text: 'Overview', link: 'plugin/ucv-ext-ucd/overview' },
            { text: 'README', link: 'plugin/ucv-ext-ucd/README' },
            { text: 'Usage', link: 'plugin/ucv-ext-ucd/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-versionone` directory.
      '/plugin/ucv-ext-versionone/': [
        {
          text: 'Ucv ext versionone',
          items: [
            { text: 'Downloads', link: 'plugin/ucv-ext-versionone/downloads' },
            { text: 'Overview', link: 'plugin/ucv-ext-versionone/overview' },
            { text: 'README', link: 'plugin/ucv-ext-versionone/README' },
            { text: 'Usage', link: 'plugin/ucv-ext-versionone/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-vs-quality` directory.
      '/plugin/ucv-ext-vs-quality/': [
        {
          text: 'Ucv ext vs quality',
          items: [
            { text: 'Downloads', link: 'plugin/ucv-ext-vs-quality/downloads' },
            { text: 'Overview', link: 'plugin/ucv-ext-vs-quality/overview' },
            { text: 'README', link: 'plugin/ucv-ext-vs-quality/README' },
            { text: 'Usage', link: 'plugin/ucv-ext-vs-quality/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-whitesource` directory.
      '/plugin/ucv-ext-whitesource/': [
        {
          text: 'Ucv ext whitesource',
          items: [
            { text: 'Downloads', link: 'plugin/ucv-ext-whitesource/downloads' },
            { text: 'Overview', link: 'plugin/ucv-ext-whitesource/overview' },
            { text: 'README', link: 'plugin/ucv-ext-whitesource/README' },
            { text: 'Usage', link: 'plugin/ucv-ext-whitesource/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-yaml-executor` directory.
      '/plugin/ucv-ext-yaml-executor/': [
        {
          text: 'Ucv ext yaml executor',
          items: [
            { text: 'Downloads', link: 'plugin/ucv-ext-yaml-executor/downloads' },
            { text: 'Overview', link: 'plugin/ucv-ext-yaml-executor/overview' },
            { text: 'README', link: 'plugin/ucv-ext-yaml-executor/README' },
            { text: 'Steps', link: 'plugin/ucv-ext-yaml-executor/steps' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/urbancode-velocity` directory.
      '/plugin/urbancode-velocity/': [
        {
          text: 'Urbancode velocity',
          items: [
            { text: 'Downloads', link: 'plugin/urbancode-velocity/downloads' },
            { text: 'Overview', link: 'plugin/urbancode-velocity/overview' },
            { text: 'README', link: 'plugin/urbancode-velocity/README' },
            { text: 'Usage', link: 'plugin/urbancode-velocity/usage' }
          ]
        }
      ]

    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/UrbanCode/devops-velocity-plugin-docs' }
    ],
    footer: {
      copyright: "©️ IBM Corp. 2011, 2017. <br> ©️ HCL Technologies Limited 2018, 2025.",

    }
  }
})
