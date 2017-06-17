
int isObstaclePin = 9; 
int isObstacle = HIGH; 

void setup() {
  pinMode(isObstaclePin, INPUT);
  Serial.begin(9600);
  
}

void loop() {
  isObstacle = digitalRead(isObstaclePin);
  if (isObstacle == HIGH)
  {
    if (Serial.available()){
      
    }
    else{
      Serial.println("Yes");
    }
  }
  else
  {
    if (Serial.available()){
      
    }
    else{
      Serial.println("No");
    }  
  }

  delay(1100);
}

