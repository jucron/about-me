pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'jucron/about-me:latest'
    }

    stages {
        stage('Pull Docker Image') {
            steps {
                script {
                    // Pull the Docker image from Docker Hub
                    sh 'docker pull ${DOCKER_IMAGE}'
                }
            }
        }

        stage('Cleanup existing Docker Container') {
            steps {
                script {
                    // Stop and remove the existing container if it exists
                    catchError(buildResult: 'SUCCESS', stageResult: 'ABORTED') {
                        sh '''
                            docker stop about-me-container
                            docker rm about-me-container
                        '''
                    }
                }
            }
        }
      stage('Run new Docker Container') {
            steps {
                script {
                    // Run the Docker container
                    sh 'docker run -d -p 80:80 -p 443:443 --name about-me-container ${DOCKER_IMAGE}'
                }
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
