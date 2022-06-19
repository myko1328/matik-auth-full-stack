-- user table

create table users(
    user_id UUID DEFAULT uuid_generate_v4(),
    email varchar(255) unique not null,
    password varchar(255) not null,
    business_name varchar(255) not null,
    created_at date default current_date,
    primary key(user_id)
)

create table employees {
    emp_id SERIAL,
    user_id UUID,
    emp_first_name varchar(255) not null,
    emp_last_name varchar(255) not null,
    emp_age varchar(255) not null,
    emp_position varchar(255) not null,
    emp_date_hired varchar(255) not null,
    emp_current_rate varchar(255) not null,
    primary key (emp_id),
    foreign key (user_id) references users(user_id)
}

insert into users (email, password, business_name) values ('myko@outliant.com', 'Myko123!@#', 'matik company')

insert into employees (
    user_id,
    emp_first_name, 
    emp_last_name, 
    emp_age,
    emp_position,
    emp_date_hired,
    emp_current_rate ) values (
        '6b4278d4-0134-49a6-8634-c29b228c5247',
        'myko', 
        'miparanum', 
        '22',
        'safety officer',
        '01/01/2020',
        '750' )


select * from users LEFT JOIN employees ON users.user_id=employees.user_id

-- {
    --   "user_id":"asdasd",
    --   "emp_first_name":"asdasd",
    --   "emp_last_name":"asdasd",
    --   "emp_age":"asdasd",
    --   "emp_position":"asdasd",
    --   "emp_date_hired":"asdasd",
    --   "emp_current_rate":"asdasd",
-- }

-- SELECT * from employees WHERE emp_first_name = 'myko' AND emp_last_name = 'miparanum';

-- DELETE FROM employees WHERE emp_id = 9;