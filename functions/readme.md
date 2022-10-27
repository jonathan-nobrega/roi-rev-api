## Requirements
- [X] The new ftp file must be processed every day.
- [X] Translate the CSV file into readable data and store in DB
- [ ] Once data is in the DB, it must be possible to retrieve:
    - [ ] All bids on a given task
    - [ ] All bids from a given company
    - [ ] All bids between given dates
- [X] Data must be available for ad-hoc reporting for at least 5 years.
- [X] The data store must not have duplicate bids.

## Assumptions / Cenarios
1. Let their app could consume an external REST API. So our serverless function/API would be triggered by their app on a daily basis
2. Create a Cloud Event triggered on a Schedule (AWS CloudWatch or GCP Schedule Functions)
3. Since our functionalities our purely bsaed on Bids reports, I won't break down the data in different Tables

## Design
- [ ] Types 
- [ ] Classes / Structs
- [X] Functions
- [X] Interfaces
- [X] Modules

## Tasks
- [X] Retrieve the file daily for an internal server
- [X] Translate a CSV file into readable data
- [X] Store into a database
- [ ] Be able to retrieve data with filters

