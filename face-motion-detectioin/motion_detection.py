import cv2, time

video = cv2.VideoCapture(0)

frame_count = 1
first_frame = None
while True:
    frame_count += 1
    read_flag, frame = video.read()
    print (read_flag)
    gray_image = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    blurred_image = cv2.GaussianBlur(gray_image, (21, 21), 0)

    if first_frame is None:
        first_frame = blurred_image

    cv2.imshow("frame", first_frame)
    cv2.waitKey(0)

    delta = cv2.absdiff(first_frame, blurred_image)

    thresold_delta = cv2.threshold(delta, 30, 255, cv2.THRESH_BINARY)[1]
    thresold_delta = cv2.dilate(thresold_delta, None, iterations = 0)

    print (cv2.findContours(thresold_delta.copy(), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE))

    (_,contors,_) = cv2.findContours(thresold_delta.copy(), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    for c in contors:
        if cv2.contourArea(c) < 1000:
            continue
        (x, y, w, h) = cv2.boundingRect(c)
        cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 3)

    cv2.imshow("captured image", gray_image)
    cv2.imshow("delta", delta)
    cv2.imshow("thresold", thresold_delta)

    key_break = cv2.waitKey(1)

    if key_break == ord('q'):
        break


print (frame_count)


video.release()
cv2.destroyAllWindows()