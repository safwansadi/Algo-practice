JOIN Query

SELECT table1.column1,table1.column2,table2.column1,....
FROM table1
INNER JOIN table2
ON table1.matching_column = table2.matching_column;

table1: First table.
table2: Second table
matching_column: Column common to both the tables.

Sub Query

To display NAME, LOCATION, PHONE_NUMBER of the students from DATABASE table whose section is A

Select NAME, LOCATION, PHONE_NUMBER from DATABASE
WHERE ROLL_NO IN
(SELECT ROLL_NO from STUDENT where SECTION=’A’);

Explanation : First subquery executes “ SELECT ROLL_NO from STUDENT where SECTION=’A’ ” returns ROLL_NO from STUDENT table whose SECTION is ‘A’.Then outer-query executes it and return the NAME, LOCATION, PHONE_NUMBER from the DATABASE table of the student whose ROLL_NO is returned from inner subquery
