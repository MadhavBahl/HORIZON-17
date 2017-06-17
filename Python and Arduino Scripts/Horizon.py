import serial
import time
import requests
import json
from firebase import firebase
from time import sleep

firebase_url = 'https://project-hospital.firebaseio.com/'

#Connect to Serial Port for communication

ser = serial.Serial(port='/dev/cu.usbmodem1411', timeout = None, baudrate=9600)


fixed_interval = 1
while 1:
  ser.flushInput()
  hand = ser.readline()
  hand = hand.strip()

  bed1Url = firebase_url + 'hospital/bed1'
    
  db = firebase.FirebaseApplication(firebase_url)
  db.put(bed1Url, 'callStatus', hand)

  print 'Result Code = ' + hand
  sleep(0.4)  