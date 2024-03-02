pipeline {
    agent any
    environment {
        registryCredentials = credentials('nexus')
        registry = "192.168.33.10:8083"
    }
    stages {
        stage('Install dependencies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }
        
        stage('mongo install') {
            steps {
                script {
                    sh 'npm i mongoose'
                }
            }
        }
        
        stage('Building images (node and mongo)') {
            steps {
                script {
                    sh 'docker-compose build'
                }
            }
        }
        
        stage('Deploy to Nexus') {
            steps {
                script {
                    docker.withRegistry("http://${registry}", registryCredentials) {
                        sh 'docker push ${registry}/nodemongoapp:5.0'
                    }
                }
            }
        }
    }
}
