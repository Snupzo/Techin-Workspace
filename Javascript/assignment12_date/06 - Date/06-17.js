/*
 Write a JavaScript function to convert a Unix timestamp to time.

Test Data :
console.log(Unix_timestamp(1412743274));
"6:41:14"
*/
import moment from "moment";
let Unix_timestamp = (timestamp) => {
  return new moment(timestamp).format("h:m:s");
};
console.log(Unix_timestamp(1412743274));
