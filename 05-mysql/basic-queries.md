# SQL  - mysql basic queries

## DDL - Data Definition Language
	create
	alter - add, modify, drop column, rename column
	drop
	rename
	
## DML - Data Manipulation Language
	insert
	select
	update
	delete

## DCL - Data Control Language
	commit
	rollback
	savepoint

# Demo
## -- Create a database 
show databases;

create database mydb;
use mydb;
select database();

## -- Create a Table
create table employee(id int,name varchar(25),salary int);
desc employee;

## -- Alter table
alter table employee add primary key(id);
desc employee;

## -- To drop a table
drop table employee;

## -- Insert values
insert into employee values(101,'ram',1000);
insert into employee(id,name) values(102,'krishna');
insert into employee(id,name) values(102,'krishna'); -- error , unique
insert into employee(name) values('krishna'); -- error - not null

insert into employee values(103,'shiva',3000),(104,'ganesh',4000),(105,'bala',5000);
select * from employee;

## -- Show / select data
select id,name,salary from employee;
select * from employee;
select name,salary from employee;

## -- update table
update employee set salary=7000 where id=102;
select * from employee;

## -- delete
delete from employee where id = 104;
select * from employee;
delete from employee;
select * from employee;

## -- others
alter table employee add desig varchar(30);
desc employee;
select * from employee;
update employee set desig="developer";
select * from employee;
desc employee;
alter table employee modify name varchar(35);
desc employee;

alter table employee rename column name to ename;
desc employee;

rename table employee to emp;
desc employee; -- error
desc emp;
drop table emp;
desc emp; -- table dropped , error
-- drop
drop table employee;

