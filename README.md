# Shabbat_Readiness_App
Create check lists to help you prepare for shabbat

# To get started
1. create an environment.ts file in the backend folder and make sure to fill in the file as follows:
```
export const databaseName = [your url for your database server];
export const databaseSecret = [your password];
```
2. start backend
```
npm run dev
```
3. start front end
```
ng serve
```
4. you should be able to see on browser using localhost

# Developer Notes
This was my first app. I developed it while I was taking a course at Regis University during the spring of 2020. It makes use of Angular and MongoDB. 
Changes were made to improve the app in 2021. 

# What is working
1. home page
2. register
3. adding a basic check list
4. checklists do track based upon the user who is logged in 

# To DO/ clean up
1. Tasks need to be fixed 
2. the nested forms still need to get fixed so that you can have more than one added task
3. delte checklist
4. update checklist
5. logout does a weird popup
6. Need to get token to expire so that it doesn't stay forever
7. get the footer to float to the  botton no matter what size screen there is


# Working Thoughts
1. Tasks
    - need to make a place where the checklist details can show up with the name and the tasks that can be edited
    - need to then have a click for each one to the detials 