const express = require("express");
const router = express.Router();
const ScheduledCourseSchema = require("../Models/ScheduleCourseModel");
const Course = require("../Models/CourseModel");

router.post("/scheduledcoursedata", (req, res) => {
  ScheduledCourseSchema.create(req.body)
    .then((course) => {
      res.status(201).json({
        message: "ScheduledCourse created successfully",
        data: course,
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    });
});

router.get("/", (req, res) => {
  ScheduledCourseSchema.findAll({include:[{
    model:Course,
    attributes:["course_title"]
  }]})
    .then((courses) => {
      const course = courses.map((c)=>{
      return{
        run:c.run,
        PDU:c.PDU,
        CET:c.CET,
        start_date:c.start_date,
        time:c.time,
        day_period:c.day_period,
        end_date:c.end_date,
        max_seats:c.max_seats,
        fee:c.fee,
        confirmation_email:c.confirmation_email,
        certificate_email:c.certificate_email,
        visibility:c.visibility,
        course_title:c.Course.course_title,
      } 
      }
      )
      res.status(200).send(course);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    });
});

// router.put("/update-course/:id", (req, res) => {
//   CourseSchema.update(req.body, {
//     where: { course_id: req.params.id },
//   })
//     .then(() => {
//       res.status(200).json({ message: "User updated successfully" });
//     })
//     .catch((err) => {
//       console.error(err);
//       res.status(500).json({ message: "Server error" });
//     });
// });

// router.route("/edit-course/:id").get((req, res) => {
//   CourseSchema.findByPK(req.params.id, (error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       res.json(data);
//     }
//   });
// });

// router.delete("/delete-course/:id", (req, res) => {
//   CourseSchema.destroy({
//     where: { course_id: req.params.id },
//   })
//     .then(() => {
//       res.status(200).json({ message: "User deleted successfully" });
//     })
//     .catch((err) => {
//       console.error(err);
//       res.status(500).json({ message: "Server error" });
//     });
// });

module.exports = router;
