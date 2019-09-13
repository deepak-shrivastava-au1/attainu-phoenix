CREATE TABLE bankmanagement(customerID int, customerName varchar(50), branch varchar(20), account int, financialTransaction float, loan float, deposit float, accountType varchar(20) );

INSERT INTO bankmanagement(customerID, customerName, branch, account, financialTransaction, loan, deposit, accountType) VALUES ('01', 'Deepak', 'Varanasi', '1234', '200000', '400000', '5000', Çurrent);

SELECT * FROM bankmanagement WHERE branch = 'Banglore';

SELECT * FROM bankmanagement WHERE accountType = 'Saving' AND accountType = 'Loan';
