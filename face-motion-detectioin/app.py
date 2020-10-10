import cv2


#classifier object
face_cascade = cv2.CascadeClassifier("haarcascade_frontalface_default.xml")
img = cv2.imread("./MS-Dhoni.jpg", 1) 

#converting RGB image to gray image
gray_image = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

#finding co-rodinates of faces
faces = face_cascade.detectMultiScale(gray_image, scaleFactor = 1.05, minNeighbors = 5)


for x, y, w, h in faces:
    image = cv2.rectangle(img, (x, y), (x + w, y + h), (0, 255, 0), 3)

resized_image = cv2.resize(img, (int(img.shape[1] / 7), int(img.shape[0] / 7)))



# print (img)
cv2.imshow("Face Detected", resized_image)
cv2.waitKey(0) 
cv2.destroyAllWindows()