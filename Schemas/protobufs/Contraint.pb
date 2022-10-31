/* Activities may be contrained. Contrains defines an accetable subset. 
   A contraint specifies a requirement to be met by an owl::Thing
   Constraints create contexts of validity
*/

syntax = "proto3";

package base;

import "_condition.proto";  // fix

message Constraint {
  string identifier = 1;
  google.protobuf.Any subject =  2; 
  repeated Condition conditions = 3;
}

syntax = "proto3";

package base;

import "f_activity_class.proto";

message Condition {
  Parameter parameter = 1;
  google.protobuf.Any value =  2; 
  string operator = 3;
}
