pipeline {
  agent any
  stages {
    stage('Checkout') {
        steps {
            script {
                  git branch: 'master',
                  credentialsId: 'jenkins',
                  url: 'git@github.com:jucron/pizza-auth-server.git'
              }
          }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Build') {
      steps {
        sh 'ng build --prod'
      }
    }

    stage('Deploy') {
      steps {
        sh 'cp -r dist/about-me/* /var/www/about-me-app/'
      }
    }

  }
  environment {
    GIT_CREDENTIALS_ID = 'jenkins'
  }
  post {
    always {
      cleanWs()
    }

  }
}
