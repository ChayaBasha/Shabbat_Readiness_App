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
npm run serve
```
3. start front end
```
ng serve
```
4. you should be able to see on browser using localhost

# Developer Notes
This was my first app. I developed it while I was taking a course at Regis University during the spring of 2020. It makes use of Angular and MongoDB. 

# What is working
1. home page
2. register
3. adding a basic check list

# To DO/ clean up
1. the checklists aren't owned by the user (need to fix that)
2. the nested forms still need to get fixed so that you can have more than one added task
3. delte checklist
4. update checklist
5. logout does a weird popup
