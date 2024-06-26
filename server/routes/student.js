const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const mongoose = require("mongoose");

const { handleValidationError } = require("../functions/validator");
const {
  isSignedIn,
  isStudent,
  getStudentAuth,
  isInPlacementTeam,
} = require("../controllers/auth");

const {
  studentRegister,
  getStudentProfile,
  updateStudentProfile,
  getStudentList,
  getPlacementData,
  getStudentListForTpo,
  getPlacedList,
  getUnplacedList
} = require("../controllers/student");

router.post(
  "/studentRegister",
  isSignedIn,
  [
    check("name").notEmpty().withMessage("Name is required"),
    check("gender").notEmpty().withMessage("Gender is required"),
    check("personalEmail").notEmpty().withMessage("Personal email is required"),
    check("enrollmentNo").notEmpty().withMessage("Enrollment No. is required"),
    check("courseId")
      .notEmpty()
      .withMessage("Course Id is required")
      .custom((courseId) => mongoose.isValidObjectId(courseId))
      .withMessage("Invalid Course Id"),
    check("departmentId")
      .notEmpty()
      .withMessage("Department Id is required")
      .custom((departmentId) => mongoose.isValidObjectId(departmentId))
      .withMessage("Invalid Department Id"),
    check("passingYear").notEmpty().withMessage("Passing year is required"),
    check("phoneNo")
      .notEmpty()
      .withMessage("Phone No is required")
      .custom((phoneNo) => phoneNo.toString().length == 10)
      .withMessage("Phone No should be of 10 digits"),
    check("altPhoneNo")
      .notEmpty()
      .withMessage("Alt Phone No is required")
      .custom((phoneNo) => phoneNo.toString().length == 10)
      .withMessage("Alt Phone No should be of 10 digits"),
  ],
  handleValidationError,
  studentRegister
);

router.get(
  "/getStudentProfile",
  isSignedIn,
  isStudent,
  getStudentAuth,
  [
    check("studentId")
      .optional()
      .custom((studentId) => mongoose.isValidObjectId(studentId))
      .withMessage("Invalid Student Id"),
  ],
  handleValidationError,
  getStudentProfile
);
router.get("/getPlacedList", isSignedIn, getPlacedList);
router.get("/getUnplacedList", isSignedIn, getUnplacedList);
router.post(
  "/updateStudentProfile",
  isSignedIn,
  isStudent,
  getStudentAuth,
  [
    check("studentId")
      .optional()
      .custom((studentId) => mongoose.isValidObjectId(studentId))
      .withMessage("Invalid Student Id"),
  ],
  handleValidationError,
  updateStudentProfile
);

router.get(
  "/getStudentList",
  isSignedIn,
  isInPlacementTeam,
  [
    check("courseId")
      .notEmpty()
      .withMessage("Course Id is required")
      .custom((courseId) => mongoose.isValidObjectId(courseId))
      .withMessage("Invalid Course Id"),
    check("passingYear").notEmpty().withMessage("Passing year is required"),
  ],
  handleValidationError,
  getStudentList
);
router.get(
  "/getStudentListForTpo",
  isSignedIn,
  isInPlacementTeam,
  [
    check("courseId")
      .notEmpty()
      .withMessage("Course Id is required")
      .custom((courseId) => mongoose.isValidObjectId(courseId))
      .withMessage("Invalid Course Id"),
    check("passingYear").notEmpty().withMessage("Passing year is required"),
  ],
  handleValidationError,
  getStudentListForTpo
);

router.get(
  "/getPlacementData",
  isSignedIn,
  isInPlacementTeam,
  // [
  //   check("courseId")
  //     .notEmpty()
  //     .withMessage("Course Id is required")
  //     .custom((courseId) => mongoose.isValidObjectId(courseId))
  //     .withMessage("Invalid Course Id"),
  //   check("passingYear").notEmpty().withMessage("Passing year is required"),
  // ],
  // handleValidationError,
  getPlacementData
);

module.exports = router;
