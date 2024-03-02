pipeline {
    agent any
    
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
    }
}
