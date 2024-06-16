const sequelize = require("../sequelize");
const Course = require("./CourseModel");
const CourseRegister = require("./CourseRegisterModel");
const Payments = require("./PaymentModel");
const ScheduledCourse = require("./ScheduleCourseModel");

Course.hasMany(CourseRegister, {
  foreignKey: "selected_course",
  allowNull: false,
});
Payments.hasMany(CourseRegister, {
  foreignKey: "payments",
  allowNull: false,
});
Course.hasMany(ScheduledCourse, {
  foreignKey: "selected_course",
  allowNull: false,
});
ScheduledCourse.belongsTo(Course, { foreignKey: "course_Id" });
sequelize
  .sync()
  .then((result) => {
    console.log(result);
    console.log("Table has been created");
  })
  .catch((err) => {
    console.error("Unable to create course table:", err);
  });

const initilize = module.exports;
