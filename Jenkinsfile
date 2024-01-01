pipeline {
    agent any

    stages {
        stage('Build') 
        {
            steps 
            {
                echo 'Build Step'
            }
        }
        stage('Test') 
        {
            steps 
            {
                echo 'Test Step'
            }
        }
        stage('Deploy') 
        {
            steps 
            {
                echo 'Deploy Step'
            }
        }
        
        }
        
    
    post 
        {
            always
            {
                emailext body: 'Pipelinedemo_status', subject: 'Pipelinedemo_status', to: 'thaephwayaung@gmail.com'
            }
        }
}
