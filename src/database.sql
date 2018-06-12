CREATE TABLE answers ( 
  id int primary key auto_increment,
  message varchar(100),
  question_id int not null,
  correct boolean not null,
  foreign key (question_id)
  references questions(id)
);

CREATE TABLE questions (
  id int NOT NULL primary key AUTO_INCREMENT,
  message varchar(255) NOT null,
  level int not null
);

insert into questions (message, level) values (
  "You've saved $25,000 for a down payment on a house. You plan to buy within a year. Which of the following is the safest place to keep your money?",
  1
);

insert into answers (message, question_id, correct) values (
  "Answer 4",
  2,
  False
);

