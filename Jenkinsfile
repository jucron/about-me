pipeline {
    agent any

    environment {
        GIT_CREDENTIALS_ID = 'jenkins' // Replace with your actual SSH credentials ID
    }

    stages {
        stage('Checkout') {
            steps {
                script {
                    // Checkout the code using SSH key
                    checkout([
                        $class: 'GitSCM',
                        branches: [[name: '*/main']],
                        doGenerateSubmoduleConfigurations: false,
                        extensions: [],
                        submoduleCfg: [],
                        userRemoteConfigs: [[
                            credentialsId: env.GIT_CREDENTIALS_ID,
                            url: 'git@github.com:jucron/about-me.git'
                        ]]
                    ])
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install project dependencies
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                // Build the Angular application
                sh 'ng build --prod'
            }
        }

        stage('Deploy') {
            steps {
                // Copy the build artifacts to the target directory
                // Adjust the target directory path as needed
                sh 'cp -r dist/about-me/* /var/www/about-me-app/'
            }
        }
    }

    post {
        always {
            // Clean up the workspace after the build
            cleanWs()
        }
    }
}
