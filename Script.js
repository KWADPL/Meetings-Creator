class Meeting{
    constructor(date, time, name){
      this.date = date;
      this.time = time;
      this.name = name;
    }
    sendNotification(){
      console.log("This is a reminder that your meeting with " + this.name + " is on " + this.date + " at " + this.time + ".");
    }
  }
  class VideoCall extends Meeting{
    constructor(date,time,name,link){
      super(date,time,name);
      this.link = link;
    }
    sendNotificationLink(){
      super.sendNotification();
      console.log("This is the link to your video meeting: " + this.link);
    }
    test(){
      console.log("Testing audio and video...success!");
    }
  }
  const firstMeeting = new Meeting("13.07.2024", "18:33", "Karolina");
  firstMeeting.sendNotification();
  const firstVideo = new VideoCall("13.07.2024", "18:33", "Karolina", "#");
  firstVideo.sendNotificationLink();
  firstVideo.test();