pipeline {
    agent any
    tools {
        // Install the Maven version configured as "M3" and add it to the path.   bat 'npm install'
        nodejs "node"
    }
    stages {
        stage('copiando repositorio'){
            steps{
                git branch: 'main', credentialsId: 'ghp_kfHUhRBWGRT8DlAX', url: 'https://github.com/AbelCornejo/calculadoradetesis.git'
            }
        }
        stage('install dependencias'){
            steps{
                bat 'npm install'
            }
        }
        stage('prueba unitaria'){
            steps{
                bat 'npm test'
            }
        }
   
       
    }
}


//git branch: 'main', credentialsId: 'ghp_kfHUhRBWGRT8DlAX',
