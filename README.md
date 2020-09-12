# Mini Carsales

I made this little pocket rocket in just over a day. I wish i could have improved it a lot more but i'm currently overwhelmed in my final semester of university. I tried to demonstrate some basic knowledge in the frameworks so i hope you like it :)

# Please read the instructions before launching the application to prevent any unexpected exceptions


## 1. Make sure you have the following dependencies installed:
 <p align="center"> 
    <img src="README_img/dependencies.jpg" alt="dependencies" width="400">
 </p>
You will need these dependencies to work with the local database connection, otherwise, the site wont work!

## 2. In visual studio, go to view > SQL Server object explorer
# 2.1 > right click on (localdb)\\MSSQLLocalDB and click on properties
# 2.2 > ensure the connection string property is the same as the connection string property in appsettings.json

I think its the same for everyone but i'm stating this just to be safe.
 <p align="center"> 
    <img src="README_img/sqlexplorer.jpg" alt="sqlexplorer" width="400">
    <img src="README_img/connectionstring2.jpg" alt="connectionstring2" width="400">
 </p>
  <p align="center"> 
    <img src="README_img/connectionstring.jpg" alt="connectionstring" width="400">
 </p>

## 3. In the package manager console, if the migration hasn't already been created yet, please do so by running the following command:

I'm sure the migration is already in the project but just being safe.
  <p align="center"> 
    <img src="README_img/add-migration.jpg" alt="Add-Migration InitialCreate" width="400">
 </p>

## 4. YOU MUST run the package manager console command Update-Database only once to build the database before running the application!

This is an important step to have the local database ready to go before the application runs!!
  <p align="center"> 
    <img src="README_img/update-database.jpg" alt="Update-Database" width="400">
 </p>
 